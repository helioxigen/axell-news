import { Article } from "api/types";
import * as React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface ArticlesListProps {
    articles: Article[];
}

export default ({ articles }: ArticlesListProps) => (
    <ul className="uk-list uk-list-divider uk-animation-slide-top-small articles-list">
        {articles.map((a, idx) => (
            <li key={a.title}>
                {a.title}{" "}
                <div className="link-container uk-margin-top">
                    <Link to={`/article/${idx}`}>
                        <button className="uk-button uk-button-text">
                            Read more
                        </button>
                    </Link>
                </div>
            </li>
        ))}
    </ul>
);
