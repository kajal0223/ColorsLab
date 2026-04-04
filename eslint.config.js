export default [
    {
        ignores: ["public/js/md5.js"]
    },
    {
        files: ["public/js/**/*.js"],
        languageOptions: {
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                console: "readonly",
                fetch: "readonly",
                alert: "readonly"
            }
        },
        rules: {
            "semi": ["error", "always"],
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];