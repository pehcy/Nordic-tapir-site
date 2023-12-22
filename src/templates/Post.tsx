import { PageProps, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../components/Layout";

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostQuery>> = ({ data, children } : any) => {
  return (
    <Layout>
      <div className="mt-8">
        <div className="max-w-5xl overflow-hidden relative mx-auto p-8">
          <div className="flex flex-col">
            <div className="py-6">
              <h1 className="text-4xl font-bold pb-2">{ data.mdx?.frontmatter?.title }</h1>
              <div className="flex flex-row flex-wrap text-slate-400">
                <span>pehcy</span>
                <span className="px-5"> | </span>
                <span>✒️ Created: { data.mdx?.frontmatter?.date }</span>
                <span className="px-5"> | </span>
                <span>⏱️ Time to read: { data.mdx?.frontmatter?.timeToRead }</span>
                <span className="px-5"> | </span>
                <span>💾 Last updated: { data.mdx?.frontmatter?.date }</span>
              </div>
            </div>
            <GatsbyImage 
              className="max-w-3xl rounded-md" 
              image={ data.mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as IGatsbyImageData}
              alt={ data.mdx?.frontmatter?.description }
            />
          </div>
          <article className="mt-10 blog-main header-bar leading-relaxed text-ellipsis">
            <MDXProvider>{ children }</MDXProvider>
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPostTemplate;

export const query = graphql`
  query BlogPost($id: String!) {
    mdx(id: { eq: $id }) {
      tableOfContents
      frontmatter {
        title
        description
        date
        published
        timeToRead
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        slug
      }
    }
  }
`