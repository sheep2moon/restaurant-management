import NextHead from "next/head";

import React from "react";

type HeadProps = {
    title?: string;
    description?: string;
};

const Head: React.FC<HeadProps> = ({ title, description }) => {
    return (
        <NextHead>
            <title>{title} | Restaurant Management</title>
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
        </NextHead>
    );
};

export default Head;
