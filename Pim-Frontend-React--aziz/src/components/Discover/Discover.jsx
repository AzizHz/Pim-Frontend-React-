import React from "react";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
    //--------DISCOVER NAVIGATION MENU
    const discover = [
        {
            name: "Collection",
            link: "collection",
        },
        {
            name: "NFT Details",
            link: "NFT-details",
        },
        {
            name: "Account Setting",
            link: "account",
        },
        {
            name: "Blog",
            link: "blog",
        },
    ];
    return (
        <div>
            {discover.map((el, i) => (
                <div key={i + 1} className={Style.discover}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default Discover;
