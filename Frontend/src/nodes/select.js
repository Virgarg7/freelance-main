// input.js

export const Select = ({ label, value, onChange, children, ...props }) => {
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
      <select
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          fontSize: "16px",
        }}
        value={value}
        onChange={onChange}
        {...props}>
        {children}
      </select>
    </div>
  );
};
