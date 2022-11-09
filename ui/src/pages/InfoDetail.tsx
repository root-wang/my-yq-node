import {FunctionComponent, useState} from 'react';
import {COLLEGE, collegeName} from '../constant/title';
import {timeFormat} from '../tools/timeFormat';


export const InfoDetail: FunctionComponent = function () {
  const startTime: number = Date.now() - 1000 * 60 * 60 * 3;
  const endTime: number = Date.now() + 1000 * 60 * 60 * 7;
  
  const generateCollegeName = function () {
    return collegeName[Math.round(Math.random() * ( collegeName.length - 1 ))] + COLLEGE
  }
  
  const [college, setCollegeName] = useState<string>(generateCollegeName())
  
  return (
    <div className='infodetails' >
      <div className='box' >
        <div className='item'
             onClick={() => {
               setCollegeName(generateCollegeName())
             }}
        >
          <span className='title' >所在学院</span >
          <span
            id='academy'
            style={{fontSize: '16px'}} >
            {
              college
            }
          </span >
        </div >
      </div >
      
      <div className='box' >
        <div className='item' >
          <span className='title' >请假类型</span >
          <span >事假</span >
        </div >
        <div className='item' >
          <span className='title' >请假时长</span >
          <span id='qjsxs' >
            {
              `${( endTime - startTime ) / 1000 / 60 / 60}小时`
            }
          </span >
        </div >
      </div >
      
      <div className='box' >
        <div className='item' >
          <span className='title' >请假开始时间</span >
          <span id='clock_start'
                className='blue-text' >
            {
              timeFormat(startTime)
            }
          </span >
        </div >
        <div className='item' >
          <span className='title' >请假结束时间</span >
          <span id='clock_end'
                className='blue-text' >
            {
              timeFormat(endTime)
            }
          </span >
        </div >
      </div >
    </div >
  )
}