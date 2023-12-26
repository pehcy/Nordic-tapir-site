import React from "react";
import PropType from "prop-types";
import { useSiteMetadata } from "../../hooks/use-site-metadata";

export interface ISEO {
    title?: string;
    description?: string;
    pathname?: string;
    children?: React.ReactNode | React.ReactNode[]
}

interface JSONSchema {
    [x: string]: string | Object | Array<string>;
}

export const SEO = ({ title, description, pathname, children }: ISEO) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image,
        siteUrl,
        twitterUsername,
        canonical
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image}`,
        url: `${siteUrl}${pathname || ``}`,
        canonical: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    };

    const siteSchema: JSONSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#Organization`,
        "name": `${seo.title}`,
        "url": `${siteUrl}`,
        "sameAs": [
            `${twitterUsername}`,
            `https://github.com/pehcy`
        ],
        "image": `${seo.image}`
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
            <link rel="canonical" href={seo.canonical} />
            <script type="application/ld+json">{ JSON.stringify({siteSchema}) }</script>
            { children }
        </>
    )
}