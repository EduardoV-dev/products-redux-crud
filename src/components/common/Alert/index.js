import React from 'react';
import { withAlert } from '../../HOC';
import {
  SuccessIcon,
  WarningIcon,
  ErrorIcon
} from '../../icons';
import './alert.component.css';

const Alert = ({
  title,
  content,
  children,
  icon
}) => {
  let Icon;
  switch (icon) {
    default:
    case 'success':
      Icon = <SuccessIcon />
      break;
    case 'warning':
      Icon = <WarningIcon />
      break;
    case 'error':
      Icon = <ErrorIcon />
      break;
  }

  return (
    <div className="Alert jump">
      <h3 className="alert-head">
        {title}
      </h3>
      <div className="alert-body">
        <figure>
          {Icon}
        </figure>
        <p className="content">
          {content}
        </p>
      </div>
      <div className="alert-foot">
        {children}
      </div>
    </div>
  );
}

export default withAlert(Alert);