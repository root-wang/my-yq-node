/**
 * @Name
 * @Description 用于通过字符串数组的路径获取对象的value
 * @author root_wang
 * @date 2022/10/20
*/

import {zh} from '../schema/zh-cn';

/**
 * use pathArr to find the value in the obj
 * @param path
 * @param obj
 */
export function getValueByPath(path: Array<string>, obj?): any {
  obj = obj ?? zh;
  let nowProperty;
  
  path.forEach(property => {
    if (obj.hasOwnProperty(property)) {
      nowProperty = obj[property];
      obj = nowProperty;
    } else {
      return "路径错误"
    }
  })
  return nowProperty;
}