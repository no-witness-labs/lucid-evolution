import nextra from "nextra";

const withNextra = nextra({
  codeHighlight: true,
  defaultShowCopyCode: true,
  latex: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: "dark-plus",
        light: "light-plus",
      },
    },
  },
  readingTime: true,
  search: {
    codeblocks: false,
  },
  staticImage: true,
});

export default withNextra({
  basePath: "/lucid-evolution",
  images: {
    unoptimized: true,
  },
  output: "export",
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file": "./src/mdx-components.tsx",
    },
  },
});
