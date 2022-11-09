import {nanoid} from 'nanoid';
import React, {FunctionComponent} from 'react';
import {Title} from '../../constant/title';
import {MyLink} from '../MyLink/MyLink';

interface IProps {

}

export const List: FunctionComponent<IProps> = function () {
  
  const titleArr = [
    Title.myDaKa,
    Title.myQingJia,
    Title.staySchoolRequest,
    Title.backSchoolRequest,
    Title.inOutSchoolRecord,
    Title.healthException,
    Title.personalInfo
  ];
  
  return (
    <>
      <div className='weui-cells custom' >
        {
          titleArr.map(title => {
            return (
              <MyLink key={nanoid()}
                      title={title} />
            )
          })
        }
      </div >
    </>
  )
}