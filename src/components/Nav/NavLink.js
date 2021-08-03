import NavTooltip from "./NavTooltip";
import { Nav } from "react-bootstrap";

const NavLink = ({href, buttonText, tipText}) => {
  return (
    <Nav.Link href={href} key={buttonText}>
      <NavTooltip buttonText={buttonText} tipText={tipText} />
    </Nav.Link>
  );
}
 
export default NavLink;

