import { Application } from "oak";
import config from "./config.js";
import error from "./middlewares/error.js";
import log from "./middlewares/log.js";
import timming from "./middlewares/timming.js";
import router from "./middlewares/router.js";
import publicAssets from "./middlewares/publicAssets.js";
const app = new Application()
//Middlewares 中间件
app.use(timming);
app.use(log);
app.use(error);
//router
app.use(router.routes());
app.use(router.allowedMethods());


//公共
app.use(publicAssets);


console.log(`Listening on ${config.APP_HOST}:${config.APP_PORT}`);
await app.listen({ port: config.APP_PORT });