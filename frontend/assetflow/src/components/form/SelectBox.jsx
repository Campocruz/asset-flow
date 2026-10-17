export default function SelectBox({ labeldName, value, onChange, optionList }) {

  return (
    <>
      <label htmlFor={labeldName} className="form-label">{labeldName}</label>
      <select id={labeldName} className="form-select" value={value?.id ?? ""} onChange={onChange}>
        <option value="">Select</option>
        {optionList?.map((option) =>
          <option key={option.id} value={option.id}>{option.name}</option>
        )}
      </select>
    </>
  )
}