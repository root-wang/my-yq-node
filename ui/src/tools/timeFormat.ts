export const timeFormat = function (timeStamp: number): string {
  const date = new Date(timeStamp);
  
  let year = date.getFullYear()
  let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  
  return `${year}-${month}-${day} ${hour}时`;
}


//计算两个时间差
export const timeDifference = function (RequestTimeStamp: number, secretaryTimeStamp: number) {
  const start = new Date(RequestTimeStamp);
  const end = new Date(secretaryTimeStamp);
  const diff = end.getTime() - start.getTime();
  const dayDiff = Math.floor(diff / ( 1000 * 60 * 60 * 24 ));
  const hourDiff = Math.floor(( diff - dayDiff * 24 * 60 * 60 * 1000 ) / ( 1000 * 60 * 60 ));
  const minDiff = Math.floor(( diff - dayDiff * 24 * 60 * 60 * 1000 - hourDiff * 60 * 60 * 1000 ) / ( 1000 * 60 ));
  let timeStr = '';
  if (dayDiff > 0) {
    timeStr += `${dayDiff}天`;
  }
  if (hourDiff > 0) {
    timeStr += `${hourDiff}小时`;
  }
  if (minDiff > 0) {
    timeStr += `${minDiff}分钟`;
  }
  return timeStr;
}
