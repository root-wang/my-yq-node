/**
 * @Name
 * @Description 用于通过字符串数组的路径设置对象的value 公共工具 用于解耦
 * @author root_wang
 * @date 2022/10/20
 */


export function setValueByPath(path: Array<string>, value: any, index: number): any {
  
  if (index === path.length - 1) {
    return {[path[index]]: value}
  }
  
  const tmpObj = setValueByPath(path, value, ++index)
  
  return {[path[--index]]: tmpObj};
}