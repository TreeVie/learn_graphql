import Koa from "koa";
import KoaStatic from "koa-static";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(process.cwd() + "public"));

router.get("/test", (ctx, next) => {
	ctx.body = "This is a TEST!";
});

app.use(router.routes())
	.use(router.allowedMethods())
	.listen(4001);

console.log("graphQL server listen port: " + 4001);
