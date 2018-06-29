import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// 实例InfoSchema
const InfoScheme = new Schema({
	hobby: [String],
	height: String,
	weight: Number,
	meta: {
		createdAt: {
			type: Date,
			default: Date.now()
		},
		updatedAt: {
			type: Date,
			default: Date.now()
		}
	}
});

// 保存数据之前更新信息

InfoScheme.pre('save', function(next) {
	let now = Date.now();
	// 新建的文件需要添加创建日期
	this.isNew && (this.meta.createdAt = now);
	// 所有的保存都应该更新保存日期
	this.meta.updatedAt = now;
	// 继续执行
	next();
});

// 建立Info数据模型 与controller中的info.js中mongoose.model('Info')相对应
mongoose.model('Info', InfoScheme);
