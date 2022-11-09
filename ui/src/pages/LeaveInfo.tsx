import {FunctionComponent} from 'react';
import {InfoDetail} from './InfoDetail';
import {Explain} from './Explain';
import {nameTool} from '../tools/nameTool';


export const LeaveInfo: FunctionComponent<{ name: string, changeName: () => void }> = function (props) {
  
  return (
    <div className='leaveinfo pass' >
      <form
        onClick={() => {
          props.changeName()
        }}
      >
        <div className='info gcp'
             data-target='/'
             data-form='form1'
             style={{position: 'relative'}} >
          <div className='avatar'
               style={{
                 width   : '45px',
                 height  : '45px',
                 fontSize: '17px'
               }} >
            {
              props.name.slice(-2)
            }
          </div >
          <div className='name' >
            <span id='name_1'
                  style={{fontSize: '16px'}} >
              {
                props.name
              }
            </span >
            <span style={{
              fontSize: '12px',
              color   : '#cac0c0fa'
            }} >审批已通过</span >
          </div >
          <div className='weui-cell__ft' />
        </div >
      </form >
      <InfoDetail />
      <Explain />
    </div >
  )
}