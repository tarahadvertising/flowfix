import React from 'react';
import { cn } from '../utils/cn.js';

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  className = '',
  children,
  icon: Icon,
  iconRight: IconRight,
  ...rest
}) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  return (
    <Tag className={cn(base, 'group', className)} {...rest}>
      {Icon ? <Icon className="text-lg transition-transform group-hover:-translate-x-0.5" /> : null}
      <span>{children}</span>
      {IconRight ? (
        <IconRight className="text-lg transition-transform group-hover:translate-x-1" />
      ) : null}
    </Tag>
  );
}
