import { forwardRef } from "react";

export const TextArea = forwardRef(
  ({ label, value, style, onChange, ...props }, ref) => {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          paddingBlock: "5px",
          paddingInline: "20px",
          fontSize: "13px",
          color: "#888",
          fontWeight: 500,
          display: "grid",
          gap: "5px",
        }}
      >
        {label && <label>{label}</label>}
        <textarea
          ref={ref}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            fontSize: "16px",
            resize: "none",
            overflow: "hidden",
            ...style,
          }}
          value={value}
          onChange={onChange}
          rows={1} 
          {...props}
        />
      </div>
    );
  }
);
