import BlogPostClient from "./BlogPostClient";

// Generate static params for all blog posts
export function generateStaticParams() {
  return [
    { slug: "gpu-shortage-visibility" },
    { slug: "visibility-problem-signs" },
    { slug: "introducing-vgac" },
    { slug: "hidden-costs-uncertainty" },
    { slug: "scheduling-visibility-trend" },
    { slug: "planning-with-unpredictable-queues" },
    { slug: "gpu-infrastructure-stack" },
    { slug: "transparent-queues" },
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
