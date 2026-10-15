import InputForm from "./InputForm";

export default function Form({ fields, data, handleChange, children, save }) {

  return (
    <>
      <form className="row g-3" onSubmit={save}>
        {fields.map(({ name, label }) => (
          <div className="col-md-4" key={name}>
            <InputForm
              label={name}
              type="text"
              value={data[name] ?? ""}
              change={handleChange}
            />
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