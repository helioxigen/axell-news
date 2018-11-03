const getCurrentDate = () => {
    const date = new Date();

    return date.toLocaleDateString("en-GB", {
        weekday: "long",
        month: "numeric",
        day: "numeric",
        year: "numeric"
    });
};

document.title = getCurrentDate();
