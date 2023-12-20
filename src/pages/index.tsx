import { PageProps } from "gatsby";
import React from "react";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className="flex flex-col">
            <Header />
        </div>
    )
}

export default IndexPage;