import { ReactNode } from "react";

interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  //   onClick: () => void;
}

const Button = ({ color = "primary", children }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={() => {}}>
        {children}
      </button>
    </div>
  );
};

export default Button;
