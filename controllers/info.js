import mongoose from 'mongoose';

const Info = mongoose.model('Info');

export const saveInfo = async (ctx, next) => {
	// 获取请求的数据
	const opts = ctx.request.body;

	const info = new Info(opts);
	// 保存数据
	const saveInfo = await info.save();
	console.log('saveInfo: ', saveInfo);

	// 判断是否保存成功
	if (saveInfo) {
		ctx.body = {
			success: true,
			info: saveInfo
		};
	} else {
		ctx.body = {
			success: false
		};
	}
};
// 获取所有的info数据
export const fetchInfo = async (ctx, next) => {
    const infos = await Info.find({}); // 数据查询
    console.log('infos: ', infos);

	if (infos.length) {
		ctx.body = {
			success: true,
			info: infos
		};
	} else {
		ctx.body = {
			success: false
		};
	}
};
