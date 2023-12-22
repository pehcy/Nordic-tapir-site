import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <main className="h-full flex flex-col">
            <Header />
            <>{ children }</>
            <Footer />
        </main>
    )
}

export default Layout;