export default function CheckBox({ fieldName, value, checkedValue, onChange }) {

  return (
    <>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value={value} id="departments" checked={checkedValue?.some(data => data.id === value) ?? false} onChange={onChange} />
        <label className="form-check-label" htmlFor={`${fieldName}-${value}`}>
          {fieldName}
        </label>
      </div>
    </>
  )
}