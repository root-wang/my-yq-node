import jwt from 'jsonwebtoken';
import {secretKey} from '../app';
import {Request, Response} from 'express';
import {changeStatus, getPassword, getUserInfoFromDB, insertNewUser, setUserInfoToDB, userExist} from '../dao/users';
import bcrypt from 'bcryptjs'
import {User} from '../models/User';

// 用户注册接口函数
export function register(req: Request,
                         res: Response) {
  const {
          username,
          password
        } = req.body;
  userExist(username, (isExist) => {
    if (!isExist) {
      insertNewUser(username, password, (msg) => {
        res.send(msg)
      });
    } else {
      res.send({
        status : 1,
        message: '注册用户失败，请稍后再试！'
      })
    }
  })
}

// 用户登陆接口
export function login(req: Request,
                      res: Response) {
  const {
          username,
          password
        } = req.body;
  let allow = false;
  getPassword(username, (passwordDB, msg) => {
    if (!passwordDB) {
      res.send(msg);
      return;
    }
    allow = bcrypt.compareSync(password, passwordDB);
    if (!allow) {
      res.send({
        status: 1,
        msg   : '密码错误,登陆失败'
      })
      return;
    }
    
    const tokenStr = jwt.sign({
      username
    }, secretKey, {expiresIn: '3000s'});
    changeStatus(username, 1, () => {
    });
    res.send({
      status: 0,
      msg   : '登陆成功',
      token : tokenStr
    })
  })
  
}

// 获取用户info接口
export function getUserInfo(req: any,
                            res: Response) {
  const {username = ''} = req?.auth as { username: string };
  if (!username) return res.send({
    status: 1,
    msg   : '请先登陆'
  })
  console.log("get userInfo")
  getUserInfoFromDB(username, (info, msg) => {
    if (!info) {
      res.send(msg);
      return;
    }
    const userObj = JSON.parse(info);
    const user = new User(userObj);
//     console.log(user)
    res.send(Object.assign(msg, {
      userInfo: user
    }))
  })
}

// 修改用户info接口
export function setUserInfo(req: any,
                            res: Response) {
  const {username = ''} = req?.auth as { username: string };
  if (!username) return res.send({
    status: 1,
    msg   : '请先登陆'
  })
  let {info} = req.body;
  console.log(info)
  Object.assign(info, {
    username,
    status: 1
  })
  info = JSON.stringify(info);
  setUserInfoToDB(username, info, (msg) => {
    res.send(msg)
  });
}
