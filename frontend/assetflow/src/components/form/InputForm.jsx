export default function InputForm({ label, type, value, change }) {

  const title = label.charAt(0).toUpperCase() + label.slice(1);

  return (
    <>
      <label htmlFor={label} className="form-label">{title}</label>
      <input
        id={label}
        className="form-control"
        name={label}
        type={type}
        value={value}
        onChange={change}
      />
    </>
  )
}