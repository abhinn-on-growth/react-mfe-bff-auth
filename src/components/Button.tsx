import React from 'react';

interface ButtonProps {
  label?: string;
}

const Button = ({ label = 'Remote Button' }: ButtonProps) => {
  return (
    <button
      style={{
        padding: '10px 20px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );
};

export default Button;