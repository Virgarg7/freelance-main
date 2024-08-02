// input.js

import { forwardRef } from "react";

export const Input = forwardRef(
  ({ label, type, value, onChange, ...props }, ref) => {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "1000px",
          paddingBlock: "5px",
          paddingInline: "20px",
          fontSize: "13px",
          color: "#888",
          fontWeight: 500,
          display: "grid",
          gap: "5px",
        }}>
        {label && <label>{label}</label>}
        <input
          ref={ref}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "16px",
          }}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);
