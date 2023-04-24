import "./listItem.css";
import FaceIcon from "@mui/icons-material/Face";

interface CARD_ITEM {
  name: string;
  surname: string;
}

function CardItem({ name, surname }: CARD_ITEM) {
  return (
      <div className="card">
        <p className="user_info">{name}</p>
        <p className="user_info">{surname}</p>
        <FaceIcon sx={{ ml: "600px", mt: "10px" }} fontSize="large" />
    </div>
  );
}

export default CardItem;
