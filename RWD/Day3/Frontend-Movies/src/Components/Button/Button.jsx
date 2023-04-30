import { styled } from "@mui/system";

const Btn = styled("button")({
  color: "white",
  background: "red",
  fontSize: "1rem",
  padding: "5.5px 16px",
  borderRadius: "4px",
  marginLeft: "5px",
  "&:hover": {
    background: "pink",
    boxShadow: "1px 2px 4px 2px rgba(255, 105, 135, .5)",
  },
});

const CustomButton = (props) => {
  return (
    <div>
      <Btn onClick={props.onClick}>{props.text}</Btn>
    </div>
  );
};

export default CustomButton;
