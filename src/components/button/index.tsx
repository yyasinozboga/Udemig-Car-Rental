import React, { ReactElement } from "react";

type Props = {
  title: string;
  icon?: string;
  handleClick?: () => void;
  type: "submit" | "button";
  disabled?: boolean;
  designs?: string;
};

const Button = ({
  title,
  icon,
  handleClick,
  type,
  disabled,
  designs,
}: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={type}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 transition ${designs}`}
    >
      {title}{" "}
      {icon && <img alt="right arrow" src={icon} className="size-6 ms-5" />}
    </button>
  );
};

export default Button;
