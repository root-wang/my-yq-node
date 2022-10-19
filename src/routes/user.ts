import express from 'express'
import {getUserInfo, login, register, setUserInfo} from '../controllers/user';

export const userApiRoute = express.Router();
// 登陆设置
userApiRoute.post('/login', login);

userApiRoute.post('/register',register)

export const userGetRoute = express.Router();
//用户get接口 需要token
userGetRoute.get('/user/userInfo',getUserInfo);


export const userPostRoute = express.Router();
// 修改用户信息
userPostRoute.post('/user/userInfo',setUserInfo);