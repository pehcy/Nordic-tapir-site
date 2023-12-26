import { PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className="mx-auto mt-10">
	            <div className="p-8 relative">
		            <h1 className="text-[3.8em] font-bold pb-4">We're tapirs</h1>
		            <p className="mb-[.8571429em] pl-6">Welcome to Nordic Tapir Laboratory, feel free to look around.</p>
	            </div>
            </div>
        </Layout>
    );
}

export default IndexPage;

export const Head = () => (
    <SEO title="Nordic Tapir's site" pathname={location.pathname} />
)