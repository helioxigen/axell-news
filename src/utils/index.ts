export const getCurrentDate = () => {
    const date = new Date();

    return date.toLocaleDateString("en-GB", {
        weekday: "long",
        month: "numeric",
        day: "numeric",
        year: "numeric"
    });
};

export const replaceComponent = (
    ...replacers: (React.ReactNode | boolean)[]
) => (component: React.ReactNode) => {
    const activeReplacers = replacers.filter(w => !!w);

    if (activeReplacers.length === 0) return component;

    const firstReplacer = activeReplacers[0];

    return firstReplacer;
};
