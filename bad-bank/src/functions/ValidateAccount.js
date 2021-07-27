import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";


const ValidateAccount = (field, label) => {
  const { setStatus } = useContext(FormContext);
  if (!field) {
    setStatus('Error: ' + label);
    setTimeout(() => setStatus(''),3000);
    return false;
  }
  return true;
}

export default ValidateAccount;