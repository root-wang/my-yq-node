import Query from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
import {OkPacket, ResultSetHeader, RowDataPacket} from 'mysql2';
import bcrypt from 'bcryptjs';
import {User} from '../models/User';

const mysql = require('mysql2');
const {config} = require('../config/config')

const db = mysql.createConnection(config);

/**
 * 查询用户是否存在
 * @param username
 * @param callback
 */
export function userExist(username: string,
                          callback: (isExist: boolean) => void): void {
  
  const selectSql = "select * from users where username = ?"
  let isExist: boolean = false;
  
  db.query(selectSql, username, (err: Query.QueryError,
                                 result: any) => {
    isExist = result.length > 0;
    console.log(isExist)
    callback(isExist);
  })
}


// 注册用户时添加用户名和密码
export function insertNewUser(username: string,
                              password: string,
                              callback: (msg) => void): any {
  const insertSql = "insert into users (username, password) values (?,?)";
  
  // 将加密后的用户密码存储到数据库
  const passwordHashSync: string = bcrypt.hashSync(password, 10);
  
  db.query(insertSql, [
    username, passwordHashSync
  ], (err: Query.QueryError,
      result: RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader) => {
    if (err) callback({
      status : 1,
      message: err.message
    });
    if ('affectedRows' in result && result?.affectedRows !== 1) {
      callback({
        status : 1,
        message: '注册用户失败，请稍后再试！'
      })
    }
    callback({
      status : 0,
      message: '注册成功！'
    });
  })
}

/**
 * 获取用户密码与当前密码对比 使用加密算法
 * @param username {string} : 用户名
 * @param callback {(passwordDB)=>any }: 成功查询到数据库的用户密码时需要执行的回调函数
 * */
export function getPassword(username: string,
                            callback: (passwordDB, msg) => any): any {
  const sql = "select password from users where username = ?";
  let password: string = '';
  
  //result是执行结果的数组(查找到对应用户的话就是[{password:string}])
  db.query(sql, username, (err: Query.QueryError,
                           result: any) => {
    if (err) {
      callback('', err.message);
      return;
    } else if (result.length !== 1) {
      callback('', {
        status: 1,
        msg   : '未找到用户存在'
      })
      return;
    }
    password = ( result as RowDataPacket )[0].password;
    callback(password, {
      status: 0,
      msg   : ''
    });
  })
}


/**
 * 登陆或者注销时改变用户的状态
 * @param username {string} 用户名
 * @param status {number} 登陆状态0为注销1为登录
 * @param callback {(status)=>any} 回调函数
 */
export function changeStatus(username: string,
                             status: number,
                             callback: (status) => any) {
  const sql = "update users set status = ? where username = ?";
  
  db.query(sql, [username, status], (err: Query.QueryError,
                                     result: any) => {
    if (err) callback({
      status : 1,
      message: err.message
    });
    if (result?.affectedRows !== 1) {
      // console.log(`更新用户status状态结果: ${JSON.stringify(Object.entries(result), null, 2)}`)
      callback({
        status : 1,
        message: '用户登陆已改变'
      })
    }
  })
}

/**
 * 获取用户info的json字符串
 * @param username {string} 用户名
 * @param callback {(info:string)=>any} 回调函数
 */
export function getUserInfoFromDB(username: string,
                                  callback: (info: string, msg: {}) => any): any {
  const sql = "select info from users where username = ?";
  let info: string = '';
  
  db.query(sql, username, (err: Query.QueryError,
                           result: Array<{ info: string } | undefined>) => {
    if (err) throw new Error(err.message);
    if (!result[0]) {
      callback('', {
        status: 1,
        msg   : '未找到不存在的用户的信息'
      })
      return;
    }
    if (result && result.length > 0) {
      // console.log(`获取用户info数据结果: ${JSON.stringify(Object.entries(result),null,2)}`)
      info = result[0].info;
      callback(info, {
        status: 0,
        msg   : "获取用户信息成功"
      });
    }
  })
}

/**
 * 更新用户的info字段
 * @param username {string} 用户名
 * @param info {string} new user information
 * @param callback {(msg: { status: number, message: string }) => any} callback
 */
export function setUserInfoToDB(username: string,
                                info: string,
                                callback: (msg: { status: number, message: string }) => any): any {
  const sql = "update users set info = ? where username = ?";
  
  db.query(sql, [info, username], (err: Query.QueryError,
                                   result: any) => {
    if (err) callback({
      status : 1,
      message: err.message
    });
    if (result.affectedRows === 1) {
//       console.log(`更新用户info数据结果: ${JSON.stringify(Object.entries(result), null, 2)}`)
      callback({
        status : 1,
        message: '已成功更新用户信息'
      })
    }
  })
}