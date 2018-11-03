import { Article } from "api/types";
import * as React from "react";
import { Link } from "react-router-dom";

interface ArticlesListProps {
    articles: Article[];
}

export default ({ articles }: ArticlesListProps) => (
    <ul className="uk-list uk-list-divider uk-animation-slide-top-small">
        {articles.map((a, idx) => (
            <li key={a.title}>
                {a.title}{" "}
                <button
                    style={{ display: "block", marginLeft: "auto" }}
                    className="uk-button uk-button-text uk-margin-top"
                >
                    <Link to={`/article/${idx}`}>Read more</Link>
                </button>
            </li>
        ))}
    </ul>
);
