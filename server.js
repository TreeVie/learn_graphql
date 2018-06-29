import Koa from 'koa';
import KoaStatic from 'koa-static';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import { database } from './mongodb';
import { saveInfo, fetchInfo } from './controllers/info';
import {
	saveStudent,
	fetchStudent,
	fetchStudentDetail
} from './controllers/student';

// 链接数据库并初始化数据模型
database()

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.get('/test', (ctx, next) => {
	ctx.body = 'This is a TEST!';
});

router.get('/info',fetchInfo);
router.post('/saveinfo',saveInfo)

router.post('/savestudent',saveStudent)

app.use(router.routes())
	.use(router.allowedMethods())
	.listen(4001);

console.log('graphQL server listen port: ' + 4001);
