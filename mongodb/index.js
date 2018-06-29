import mongoose, { mongo } from 'mongoose';
import config from '../config';

// 引入只是为了再mongodb上注册这两个模型
require('./schema/info')
require('./schema/student')

// 链接mongodb
export default database = () =>{
    mongoose.set('debug', true)

    mongoose.connect(config.dbPath)

    // 重连
    mongoose.connection.on('disconnected',()=>{
        mongoose.connect(config.dbPath)
    })

    mongoose.connection.on('error',err=>{
        console.error(err)
    })

    mongoose.connection.on('open',async ()=>{
        console.log('Connected to MongoDB', config.dbPath)
    })
}