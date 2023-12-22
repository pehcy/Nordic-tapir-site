import { GatsbyNode, CreatePagesArgs, CreateNodeArgs } from "gatsby";

const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

type TypePostData = {
    fields: { slug: string };
    frontmatter: {
        date: string,
        title: string;
    };
}

type TypeGatsbyNode = {
    node: TypePostData;
}

type TypeEdgesData = {
    allMdx: {
        edges: Array<TypeGatsbyNode>;
    }
}

interface IOnCreateNode {
    node: any;
    actions: any;
    getNode: any;
}

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
    const { createPage } = actions;
    const result = await graphql<Queries.GatsbyNodeCreatePagesQuery>(`
        query GatsbyNodeCreatePages {
            allMdx(
                sort: {frontmatter: {date: DESC}}
                filter: {frontmatter: {published: {eq: true}}}
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        title
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    const postTemplate = path.resolve('./src/templates/Post.tsx');
    const createPostPromise = result.data?.allMdx.nodes.map((node) => {
        createPage({
            path: `blog${node.fields?.slug}`,
            component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id }
        });
    });

    await Promise.all([createPostPromise]);

    if (result.errors) {
        reporter.panicOnBuild('ERR: Error occured while running GraphQL query.');
        return;
    }
}

export const onCreateNode = ({ node, actions, getNode } : CreateNodeArgs) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'Mdx') {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: 'slug',
            node,
            value
        });
    }
}