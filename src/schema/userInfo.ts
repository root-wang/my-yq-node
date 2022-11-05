/**
 * @Name 用户信息字段校验规则
 * @Description
 * @author root_wang
 * @date 2022/10/20
 */

import joi from 'joi';
import lodash from 'lodash'
import {getValueByPath} from '../utils/getValueByPath';
import {setValueByPath} from '../utils/setValueBypath';

const propertyCheckArray: Array<{ [key: string]: any }> = [
  {
    path: ['academy'],
    rule: joi.string().required().pattern(/^[\u4e00-\u9fa5]{1,13}$/).error(new Error(getValueByPath([
      'validate', 'user', 'info', 'status'
    ])))
  },
  {
    path: ['name'],
    rule: joi.string().required().pattern(/^[\u4e00-\u9fa5]{1,6}$/).error(new Error(getValueByPath([
      'validate', 'user', 'info', 'name'
    ])))
  },
  {
    path: ['leaveInfo', 'checkStatus'],
    rule: joi.number().integer().min(0).max(2).required().error(new Error(getValueByPath([
      'validate', 'user', 'info', 'leaveInfo', 'checkStatus'
    ])))
  }
];

const info_change_schema: Object = {};

let tmpSchemaObj = {};
propertyCheckArray.forEach(({
                              path,
                              rule
                            }) => {
  path = ['body', 'info'].concat(path);
  const tmpObj = setValueByPath(path, rule, 0);
  tmpSchemaObj = lodash.merge(tmpSchemaObj, tmpObj);
})

lodash.merge(info_change_schema, tmpSchemaObj)

export default info_change_schema