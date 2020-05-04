export default () => ({
  database: {
    url:
      process.env.USE_DB === 'local'
        ? process.env.DATABASE_URL
        : process.env.ATLAS_DB,
    port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  },
  auth: {
    secret: process.env.SECRET_KEY,
    refreshSectet: process.env.REFRESH_SECRET,
    accessTokenLife: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenLife: process.env.REFRESH_TOKEN_EXPIRY,
    salt: process.env.SALT
  }
})
