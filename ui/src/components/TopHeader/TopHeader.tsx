import React, {FunctionComponent} from 'react';
import {History} from 'history'
import {Link} from 'react-router-dom';

interface TopHeaderIprops {
  title: string
  history: History
  showHome: boolean
}

export const TopHeader: FunctionComponent<TopHeaderIprops> = function (props) {
  
  return (
    <>
      <div className='top-head' >
        <div >
          <div >
            <Link
              className='iconfont icon-back'
              style={{color: '#FFF'}}
              to={''} />
          </div >
        </div >
        <div >{props.title}</div >
        {
          props.showHome ? (
            <div style={{width: '15px'}} >
              <div style={{
                textAlign: 'right',
                display  : 'none'
              }}
                   id='qhdiv' >
                                <span className='open-popup'
                                      id='sxbut'
                                      data-target='#xuanzeqi' >
                                    <i className='icon icon-101' />
                                </span >
              </div >
            </div >
          ) : (
            <div >
              <a href='' >
                <i
                  onClick={() => {
                    props.history.push('/')
                  }}
                  className='iconfont icon-fangzi'
                  style={{color: '#FFF'}} />
              </a >
            </div >
          )
        }
      </div >
    </>
  )
}