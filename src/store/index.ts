import { observable, action } from "mobx";
import { getNews } from "api";
import { Router } from "react-router";

class Store {
    constructor() {
        this.fetchArticles();
    }

    @observable
    fetching = false;

    @observable
    country = "ru";
    @observable
    category?: string;

    @observable
    fetchedCategory;
    @observable
    fetchedCountry;

    @action.bound
    changeCountry(code) {
        this.country = code;
    }

    @action.bound
    changeCategory(name) {
        this.category = name;
    }

    @observable
    articles = [];

    @action.bound
    async fetchArticles() {
        try {
            this.errorMessage = "";
            this.fetching = true;

            const category =
                this.category !== "all" ? this.category : undefined;

            this.fetchedCountry = this.country;
            this.fetchedCategory = category;

            const {
                data: { articles }
            } = await getNews(this.country, category);

            this.articles = articles;
        } catch (e) {
            console.error(e);
        }

        this.fetching = false;
    }

    @observable
    errorMessage = "";
    @action.bound
    handleError(error) {
        this.errorMessage = error.message;
    }
}

export default new Store();
