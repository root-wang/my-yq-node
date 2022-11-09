import {FunctionComponent} from 'react';
import {nameTool} from '../tools/nameTool';
import {timeDifference, timeFormat} from '../tools/timeFormat';


export const TimeList: FunctionComponent<{ name: string }> = function (props) {
  const requestTime: number = Date.now() - 1000 * 60 * 60 * 46;
  const counselorTime: number = Date.now() - 1000 * 60 * 60 * 20;
  const secretaryTime: number = Date.now() - 1000 * 60 * 60 * 15;
  return (
    <>
      <div className='flow' >
        <ul >
          <li >
            <div className='avatar' >
              <span id='name_2' />
              {
                props.name.slice(-2)
              }
            </div >
            <div className='content' >
              <div className='ttl' ><span className='text'
                                          style={{fontSize: '16px'}} >发起申请</span >
                <span id='clock_request'
                      className='time' >
                {
                  timeFormat(requestTime).slice(5)
                }
                </span >
              </div >
            </div >
          </li >
          
          
          <li >
            <div className='avatar pass' >
              晓峰
            </div >
            <div className='content' >
              <div className='ttl' ><span className='text'
                                          style={{fontSize: '16px'}} >别晓峰审核（已通过）</span >
                <span id='clock_fdy'
                      className='time' >
                {
                  timeFormat(counselorTime).slice(5)
                }
                </span >
              </div >
              <div className='ctn' >同意</div >
            </div >
          </li >
          
          <li >
            <div className='avatar pass' >
              鹏军
            </div >
            <div className='content' >
              <div className='ttl' ><span className='text'
                                          style={{fontSize: '16px'}} >康鹏军审核（已通过）</span >
                <span id='clock_sj'
                      className='time' >
                {
                  timeFormat(secretaryTime).slice(5)
                }
                </span >
              </div >
              <div className='ctn' >一键审核通过</div >
            </div >
          </li >
          <li >
            <div className='pointer' >
              <i className='icon' />
            </div >
            <div className='content pointer' >
              <div className='ttl' >
                {
                  `审批共耗时${timeDifference(requestTime, secretaryTime)}`
                }
              </div >
            </div >
          </li >
        
        </ul >
      </div >
    </>
  )
}