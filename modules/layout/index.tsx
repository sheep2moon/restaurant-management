import React from "react";
import Footer from "./templates/footer";
import Nav from "./templates/nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-screen min-h-screen bg-secondary">
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
