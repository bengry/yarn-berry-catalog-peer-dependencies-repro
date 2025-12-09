import { useState } from 'react';

export function Button({ children, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick?.();
  };

  return <button onClick={handleClick}>{children}</button>;
}

export function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export function ModernComponent() {
  // This uses React 19 features
  return <div>Modern React 19 Component</div>;
}
