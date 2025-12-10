import { useState } from "react";
import { Button as ButtonPrimitive } from "a-legacy-lib";

export function Button({ children, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick?.();
  };

  return <ButtonPrimitive onClick={handleClick}>{children}</ButtonPrimitive>;
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
