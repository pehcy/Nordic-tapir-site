import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <main className="h-full">
            <Header />
            <div className="max-w-5xl mx-auto mb-12">{ children }</div>
            <Footer />
        </main>
    )
}

export default Layout;