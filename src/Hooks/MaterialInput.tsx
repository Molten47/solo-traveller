// MaterialInput.tsx
import { useState } from 'react';
import type{ NavInputProps } from '../types/user';

const MaterialInput = ({ label, value, onChange, type = 'text', placeholder }: NavInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className='flex flex-col gap-2 items-start justify-center heading-font relative'>
        <label style={{
        //position: 'absolute',
        left: 0,
        top: focused || value ? '-12px' : '8px',
        fontSize: focused || value ? '10px' : '12px',
        color: focused ? '#1976d2' : '#666',
        transition: 'all 0.3s',
        pointerEvents: 'none'
      }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          border: 'none',
         outline: focused ? '1px solid #1976d2' : 'none',
          outlineOffset: '0px',
           borderBottom: focused ? '0 0 8px rgba(25, 118, 210, 0.4)' : 'none',
          padding: '6px 0',
          width: '100%',
          fontSize: '16px',
          background: 'transparent',
          transition: 'border-color 0.3s'
        }}
      />
    
    </div>
  );
};

export default MaterialInput;

