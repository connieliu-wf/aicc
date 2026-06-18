"use client";

import React from 'react';
import { CloseDefaultIcon } from '@/icons';

interface PanelHeaderProps {
  title: string;
  onClose?: () => void;
  headerAction?: React.ReactNode;
  paddingLeft?: string;
  paddingRight?: string;
}

const PanelHeader: React.FC<PanelHeaderProps> = ({ title, onClose, headerAction, paddingLeft, paddingRight }) => {
  const paddingClasses = paddingLeft || paddingRight 
    ? `py-3 flex items-center justify-between`
    : `px-2 py-3 flex items-center justify-between`;
  
  const paddingStyle = paddingLeft || paddingRight
    ? {
        paddingLeft: paddingLeft || '8px',
        paddingRight: paddingRight || '8px',
      }
    : {};

  return (
    <div className={paddingClasses} style={paddingStyle}>
      <h2 className="title-text-bold">{title}</h2>
      <div className="flex items-center gap-1">
        {headerAction}
        {onClose && (
          <button 
            onClick={onClose}
            className="w-6 h-6 flex items-center justify-center hover:bg-[var(--bg-tertiary)] rounded-sm"
          >
            <CloseDefaultIcon size={16} className="text-[var(--text-secondary)]" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PanelHeader; 