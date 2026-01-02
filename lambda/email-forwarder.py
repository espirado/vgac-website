import boto3
import email
import os
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication

s3 = boto3.client('s3')
ses = boto3.client('ses', region_name='us-east-1')

FORWARD_TO = 'masundeespira@gmail.com'
FORWARD_FROM = 'aespira@vgac.cloud'
BUCKET = 'vgac-email-bucket'

def lambda_handler(event, context):
    # Get the email from S3
    record = event['Records'][0]
    message_id = record['ses']['mail']['messageId']
    
    # Fetch email from S3
    response = s3.get_object(Bucket=BUCKET, Key=message_id)
    raw_email = response['Body'].read().decode('utf-8')
    
    # Parse the email
    msg = email.message_from_string(raw_email)
    
    # Get original sender and subject
    original_from = msg['From']
    original_subject = msg['Subject'] or '(No Subject)'
    
    # Create forwarded message
    forward_msg = MIMEMultipart()
    forward_msg['From'] = FORWARD_FROM
    forward_msg['To'] = FORWARD_TO
    forward_msg['Subject'] = f"Fwd: {original_subject}"
    forward_msg['Reply-To'] = original_from
    
    # Add forwarding header
    body_prefix = f"---------- Forwarded message ----------\nFrom: {original_from}\nSubject: {original_subject}\n\n"
    
    # Get the body
    if msg.is_multipart():
        for part in msg.walk():
            content_type = part.get_content_type()
            if content_type == 'text/plain':
                body = part.get_payload(decode=True).decode('utf-8', errors='ignore')
                forward_msg.attach(MIMEText(body_prefix + body, 'plain'))
                break
            elif content_type == 'text/html':
                body = part.get_payload(decode=True).decode('utf-8', errors='ignore')
                forward_msg.attach(MIMEText(f"<pre>{body_prefix}</pre>" + body, 'html'))
    else:
        body = msg.get_payload(decode=True).decode('utf-8', errors='ignore')
        forward_msg.attach(MIMEText(body_prefix + body, 'plain'))
    
    # Send the forwarded email
    try:
        ses.send_raw_email(
            Source=FORWARD_FROM,
            Destinations=[FORWARD_TO],
            RawMessage={'Data': forward_msg.as_string()}
        )
        print(f"Forwarded email from {original_from} to {FORWARD_TO}")
        return {'status': 'success'}
    except Exception as e:
        print(f"Error forwarding email: {str(e)}")
        raise e
