import PeopleIcon from "@mui/icons-material/People";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="title">Users</div>
      <PeopleIcon sx={{ pt: "30px" }} fontSize="large" />
    </div>
  );
}

export default Header;
