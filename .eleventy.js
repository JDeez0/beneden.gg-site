module.exports = function (eleventyConfig) {
    // Copy static assets to output
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/img");
    // Copy CNAME for custom domain
    eleventyConfig.addPassthroughCopy("./CNAME");

    // Add permalink for clean URLs
    eleventyConfig.addCollection("pages", function(collection) {
        return collection.getAll().filter(function(item) {
            return item.inputPath.match(/\.(md|njk)$/);
        });
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        // Use pretty URLs (about.html -> about/index.html)
        dataTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
