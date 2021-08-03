

const TextInput = ({text, type, value, onChange}) => {
  return (
    <>
      <label htmlFor={text.toLowerCase()} >{text}</label>
      <input type={type} className="form-control" id={text.toLowerCase()} placeholder={`Enter ${text.toLowerCase()}`} value={value} onChange={onChange}/>
      <br/>
    </>
  );
}

export default TextInput;