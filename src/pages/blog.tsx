import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link, PageProps, graphql } from "gatsby";

const BlogPages: React.FC<PageProps<Queries.BlogMdxQuery>> = ({ data }) => {
    return (
        <Layout>
            <div className="mx-auto mt-10">
                <div className="p-8 relative">
		            <h1 className="text-[3.8em] font-bold pb-4">Blog posts</h1>
		            <p className="mb-[.8571429em] pl-6">Welcome to Nordic Tapir Laboratory, 
                        feel free to look around.
                    </p>
	            </div>
                <div className="grid grid-rows-none gap-y-2.5">
                    { data?.allMdx.edges.map(({node}) => (
                        <>
                            <Link
                            to={`/blog/${node.fields?.slug}`}
                            >
                                <div className="card relative hover:bg-gray-100">
                                    <div className="max-w-lg relative flex flex-col">
                                        <h1 className="font-semibold text-xl md:text-3xl md:pb-5">
                                            { node.frontmatter?.title }
                                        </h1>
                                        <p className="text-slate-400 pb-3 text-sm md:text-base">
                                            { node.frontmatter?.description }
                                        </p>
                                        <div className="flex flex-col md:flex-row">
                                            <p className="text-slate-400">✒️ Created: { node.frontmatter?.date }</p>
                                            <p className="md:px-6 text-slate-400">⏱️ Time to read: { node.frontmatter?.timeToRead }</p>
                                        </div>
                                    </div>
                                    <GatsbyImage 
                                        image={ node.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData as IGatsbyImageData } 
                                        alt={node.id}
                                        className="w-[160px] h-[120px] object-cover overflow-hidden rounded-md"
                                    />
                                </div>
                            </Link>
                            <div className="border-b border-slate-900 py-1"/>
                        </>
                    )) }
                </div>
            </div>
        </Layout>
    );
}

export default BlogPages;

export const query = graphql`
    query BlogMdx {
        allMdx(
            sort: {frontmatter: {date: DESC}}
            filter: {frontmatter: {published: {eq: true}}}
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        title
                        description
                        timeToRead
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`