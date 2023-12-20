import React from "react";
import PropType from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

export interface IMetadata {
    description: string;
    lang: string;
    meta: JSON;
    title: string;
}