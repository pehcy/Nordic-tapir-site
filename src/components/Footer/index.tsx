import React from "react";

const Footer: React.FC = () => (
    <footer className="px-4 lg:px-8 p-4 bg-transparent h-[150px]">
        <section className="w-full max-w-5xl mx-auto p-4 md:py-8">
          <hr/>
          <span className="mt-4 block text-sm text-gray-500 sm:text-center dark:text-gray-400">All rights reserved to tapirs © 2023 by pehcy</span>
          <span className="block text-1xl font-semibold whitespace-nowrap sm:text-center dark:text-white">Powered by GatsbyJS</span>
        </section>
    </footer>
)

export default Footer;