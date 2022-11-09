import {FunctionComponent} from 'react';

interface IProps {
}

export const Footer: FunctionComponent<IProps> = function () {
  
  return (
    <>
      <div className='footer-copy-space' >
        <div style={{
          color    : '#999',
          textAlign: 'center',
          fontSize : '13px',
          marginTop: '10px'
        }} >主管单位：党委学生工作部（学生处）
        </div >
        <div style={{
          color    : '#999',
          textAlign: 'center',
          fontSize : '13px'
        }} >联系电话：029-88430701
        </div >
      </div >
    </>
  )
}