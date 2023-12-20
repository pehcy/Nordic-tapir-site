import { PageProps } from "gatsby";
import React from "react";
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <footer className="px-4 lg:px-8 p-4 bg-transparent h-[150px]">
                <section className="w-full max-w-5xl mx-auto p-4 md:py-8">
                    <hr/>
                    <span className="mt-4 block text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023 by Nordic Tapir (pehcy)</span>
                </section>
            </footer>
        </div>
    )
}

export default IndexPage;