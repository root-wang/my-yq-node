/**
 * @Name 用户注册字段校验规则
 * @Description
 * @author root_wang
 * @date 2022/10/20
 */

import joi from 'joi';

/*
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

const username = joi.string().min(1).max(20).pattern(/[a-zA-Z0-9_$%^&*@#]/).required();
const password = joi.string().min(1).max(30).pattern(/[a-zA-Z0-9_$%^&*@#]/).required();


// 注册和登录表单的验证规则对象
export const reg_login_schema = {
  // 表示需要对 req.body 中的数据进行验证
  body: {
    username,
    password,
  },
}