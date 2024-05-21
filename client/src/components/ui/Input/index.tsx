import { TextField } from "@mui/material";

type InputProps = {
  label: string;
  value: string;
  inputName: string;
  type?: React.HTMLInputTypeAttribute;
  changeEvent: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input = ({ label, value, inputName, type, changeEvent }: InputProps) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      label={label}
      name={inputName}
      autoFocus
      value={value}
      onChange={changeEvent}
      type={type}
    />
  );
};

export default Input;
