import { Tooltip, OverlayTrigger } from "react-bootstrap";

const NavTooltip = ({buttonText, tipText}) => {
  return (
        <OverlayTrigger
          key={buttonText}
          placement="bottom"
          overlay={
            <Tooltip id={`tooltip-${buttonText}`}>
              <p>{tipText}</p>
            </Tooltip>
          }
        >
          <span>{buttonText}</span>
        </OverlayTrigger>
  );
}
 
export default NavTooltip;