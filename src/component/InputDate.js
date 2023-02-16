export default function InputDate({
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <>
      <input
        className="form-control"
        type={type || "date"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-600">{error}</div>}
    </>
  );
}
