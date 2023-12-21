import { PageProps, graphql, useStaticQuery } from "gatsby";
import React from "react";
import Header from "../components/Header";
import { MDXProvider } from "@mdx-js/react";

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data, children } : any) => {

    const { frontmatter, body, tableOfContents } = data.mdx;

    return (
        <div className="flex flex-col">
            <Header />
            <MDXProvider>
              {children}
            </MDXProvider>
            <footer className="px-4 lg:px-8 p-4 bg-transparent h-[150px]">
                <section className="w-full max-w-5xl mx-auto p-4 md:py-8">
                    <hr/>
                    <span className="mt-4 block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 by Nordic Tapir (pehcy)</span>
                </section>
            </footer>
        </div>
    );
}

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost {
    mdx {
      id
      body
      tableOfContents
      frontmatter {
        title
        date
        published
      }
      fields {
        slug
      }
    }
  }
`