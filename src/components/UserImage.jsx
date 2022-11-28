import { Box } from "@mui/material";
import { API } from "../global";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${API}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;