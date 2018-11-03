import Axios from "axios";
import { TopHeadlinesResponse } from "./types";

const { API_KEY, API_ENDPOINT } = require("../../app.config.json");

const inst = Axios.create({
    baseURL: API_ENDPOINT,
    params: {
        apiKey: API_KEY
    }
});

export const getNews = (country: string, category?: string) =>
    inst.get<TopHeadlinesResponse>("top-headlines", {
        params: {
            country,
            category
        }
    });
