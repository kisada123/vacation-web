export default function Input({
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
        className="border border-black border border-black py-2 px-5 my-2 w-80  "
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="text-red-600">{error}</div>}
    </>
  );
}
