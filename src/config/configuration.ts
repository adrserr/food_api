export default () => ({
  database: {
    url: process.env.DATABASE_URL,
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  }
})
