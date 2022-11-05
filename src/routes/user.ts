import express from 'express'
import {getUserInfo, login, register, setUserInfo} from '../controllers/user';

export const userApiRoute = express.Router();
//导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
import {reg_login_schema} from '../schema/user';
import info_change_schema from '../schema/userInfo';

// 登陆设置
userApiRoute.post('/login', expressJoi(reg_login_schema), login);

userApiRoute.post('/register', expressJoi(reg_login_schema), register)

export const userGetRoute = express.Router();
//用户get接口 需要token
userGetRoute.get('/user/userInfo', getUserInfo);


export const userPostRoute = express.Router();

/**
 * 用于修改用户信息 其中请假信息一次只能修改一条所以传递的json是一个对象不是数组
 * 在校验时不用校验数组
 */
userPostRoute.post('/user/userInfo', setUserInfo);