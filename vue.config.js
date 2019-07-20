module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/public/dist'
      : '/',
    css: {
        loaderOptions: {
            sass: {
              data: `@import "@/scss/app.scss";`
            }
          }
    }
}