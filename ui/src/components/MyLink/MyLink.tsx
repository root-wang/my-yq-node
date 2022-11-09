import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import {Title, titleClass, titleRouterPath} from '../../constant/title';

interface IProps {
  title: Title
}

export const MyLink: FunctionComponent<IProps> = function (props) {
  
  return (
    <>
      <Link
        to={titleRouterPath[props.title]}
        className='weui-cell weui-cell_access' >
        <i className={titleClass[props.title]} />
        <div className='weui-cell__bd' >
          <span >
            {props.title.toString()}
          </span >
        </div >
        <div className='weui-cell__ft' />
      </Link >
    </>
  )
}
