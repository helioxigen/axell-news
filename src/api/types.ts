export type Article = {
    source: {
        id?: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

export type TopHeadlinesResponse = {
    status: string | "ok";
    totalResults: number;
    articles: Article[];
};
