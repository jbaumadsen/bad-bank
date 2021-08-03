import { DropdownButton } from "react-bootstrap";


const DropSelector = ({activeUser, children}) => {
  return (
      <>
      <label htmlFor="account-select">Account:</label>
      <DropdownButton id="account-select" className="drop-select" title={activeUser} display="inline-block">
        {children}
      </DropdownButton>
      </>
  );
}

export default DropSelector;