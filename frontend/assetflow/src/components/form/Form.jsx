import InputForm from "./InputForm";

export default function Form({ data, handleChange, children, save }) {

  return (
    <>
      <form className="row g-3" onSubmit={save}>
        {Object.entries(data).map(([key, value]) => (
          <div className="col-md-4" key={key}>
            <InputForm label={key} type="text" value={value} change={handleChange} />
          </div>
        ))}
        {children}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
    </>
  )
}