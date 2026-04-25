module.exports = function (eleventyConfig) {
    // Copy static assets to output
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    // Copy CNAME for custom domain
    eleventyConfig.addPassthroughCopy("./CNAME");

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
