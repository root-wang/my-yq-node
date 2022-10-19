import Query from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
import {OkPacket, ResultSetHeader, RowDataPacket} from 'mysql2';
import bcrypt from 'bcryptjs';

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
 * @param username string : 用户名
 * @param callback (passwordDB)=>any : 成功查询到数据库的用户密码时需要执行的回调函数
 * */
export function getPassword(username: string,
                            callback: (passwordDB) => any): any {
  const sql = "select password from users where username = ?";
  let password: string = '';
  
  db.query(sql, username, (err: Query.QueryError,
                           result: RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader) => {
    password = ( result as RowDataPacket )[0].password;
    callback(password);
  })
}


/**
 * 登陆或者注销时改变用户的状态
 * @param username {string} 用户名
 * @param status {number} 登陆状态0为注销1为登录
 */
export function changeStatus(username: string,
                             status: number) {
  const sql = "update users set status = ? where username = ?";
  
  db.query(sql, [username, status], (err: Query.QueryError,
                                     result: RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader) => {
    if (err) return {
      status : 1,
      message: err.message
    };
    if ('affectedRows' in result && result?.affectedRows !== 1) {
      return {
        status : 1,
        message: '用户登陆已改变'
      }
    }
  })
}

/**
 * 获取用户info的json字符串
 * @param username
 * @param callback
 */
export function getUserInfoFromDB(username: string,
                                  callback: (info: string) => any): any {
  const sql = "select info from users where username = ?";
  let info: string = '';
  
  db.query(sql, username, (err: Query.QueryError,
                           result: RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader) => {
    info = ( result as RowDataPacket )[0].info;
    callback(info);
  })
}

/**
 * 更新用户的info字段
 * @param username
 * @param info
 */
export function setUserInfoToDB(username: string,
                                info: string): any {
  const sql = "update users set info = ? where username = ?";
  
  db.query(sql, [info, username], (err: Query.QueryError,
                                   result: RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader) => {
    if (err) return {
      status : 1,
      message: err.message
    };
    if ('affectedRows' in result && result?.affectedRows !== 1) {
      return {
        status : 1,
        message: '已成功更新用户信息'
      }
    }
  })
}