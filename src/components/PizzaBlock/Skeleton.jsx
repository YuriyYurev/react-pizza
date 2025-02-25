import React from "react";
import ContentLoader from "react-content-loader";
import style from "./Skeleton.module.scss";

export const Skeleton = () => (
    <ContentLoader
        speed={2}
        viewBox="0 0 300 375"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className={style.sekeleton}
    >
        <circle cx="150" cy="90" r="80" />
        <rect x="50" y="185" rx="0" ry="0" width="200" height="25" />
        <rect x="0" y="225" rx="10" ry="10" width="300" height="85" />
        <rect x="0" y="340" rx="10" ry="10" width="100" height="25" />
        <rect x="160" y="335" rx="10" ry="10" width="140" height="35" />
    </ContentLoader>
);
