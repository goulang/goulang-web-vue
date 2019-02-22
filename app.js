const Koa = require("koa")

const path = require("path")
const static = require("koa-static")


const app = new Koa()


app
    .use(static(path.join(__dirname, "dist")))


    .listen(3000)




