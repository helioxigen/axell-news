import { inject, observer } from "mobx-react";
import * as React from "react";
import { Article } from "api/types";
import Spinner from "components/atoms/Spinner";

const Article = ({
    match: {
        params: { id }
    },
    store: { articles, fetching }
}) => {
    if (fetching) return <Spinner />;

    const { title, description, url, urlToImage }: Article = articles[id];

    return (
        <article className="uk-article uk-animation-scale-up">
            <img src={urlToImage} height="200px" uk-img />
            <h1 className="uk-h2">{title}</h1>
            <p className="uk-article-meta">
                <a href={url}>{url}</a>
            </p>
            <p>{description}</p>
        </article>
    );
};

export default inject("store")(observer(Article));
