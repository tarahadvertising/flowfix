import React from 'react';
import { cn } from '../utils/cn.js';

export default function GlassCard({ className = '', children, gold = false, ...rest }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl glass card-hover',
        gold && 'gold-border',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
