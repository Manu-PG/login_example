import { Button as ButtonMui } from "@mui/material";

type ButtonProps = {
  type: "button" | "reset" | "submit" | undefined;
  value: string;
  click: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ type, value, click }: ButtonProps) => {
  return (
    <ButtonMui type={type} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={click}>
      {value}
    </ButtonMui>
  );
};

export default Button;
