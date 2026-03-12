import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return [
    { slug: "calibration-matters" },
    { slug: "building-vgac" },
    { slug: "calibration-gated-autonomy" },
    { slug: "llm-inference-observability" },
    { slug: "vgac-v4-release" },
    { slug: "gpu-idle-time-cost" },
    { slug: "gpu-shortage-visibility" },
    { slug: "introducing-vgac" },
    { slug: "hidden-costs-uncertainty" },
    { slug: "visibility-problem-signs" },
    { slug: "scheduling-visibility-trend" },
    { slug: "planning-with-unpredictable-queues" },
    { slug: "gpu-infrastructure-stack" },
    { slug: "transparent-queues" },
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
