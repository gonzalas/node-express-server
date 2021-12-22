module.exports = {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    MONGO_URI: `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
}