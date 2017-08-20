// Yes, secrets pushed to github.
const {
    IMGUR_ID = "e960405e1d77c8a",
    IMGUR_SECRET = "6b66e9faa5da1e49dda965882bda47984de0bc55"
} = process.env;

module.exports = {
    imgur: {
        api: "https://api.imgur.com/3",
        id: IMGUR_ID,
        secret: IMGUR_SECRET
    },
    "DANGEROUSLY_EXPOSE_TO_CLIENT": {
        host: {
            server: "http://127.0.0.1:3000",
            client: "",
        }
    }
};
