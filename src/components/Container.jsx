import React from 'react';
import { cn } from '../utils/cn.js';

export default function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={cn('container-x', className)} {...rest}>
      {children}
    </Tag>
  );
}
