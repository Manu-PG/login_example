import { FormControlLabel, Checkbox as CheckboxMui } from "@mui/material";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <FormControlLabel control={<CheckboxMui checked={checked} onChange={onChange} color="primary" />} label={label} />
  );
};

export default Checkbox;
