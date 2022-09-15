const linkByTag = (tech: string): string | undefined => {
  switch (tech) {
    case "TensorFlow":
      return "https://www.tensorflow.org/";
    case "Docker":
      return "https://www.docker.com";
    case "Next.js":
      return "https://nextjs.org";
    case "Tailwind CSS":
      return "https://tailwindcss.com";
    default:
      return;
  }
};

export default linkByTag;
