import "dotenv/config"

export const ENV ={
    PORT: process.env.port || 5001,
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
}