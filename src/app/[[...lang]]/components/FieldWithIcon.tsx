import React from "react";
import { LucideIcon } from "lucide-react";

interface FieldWithIconProps {
  icon: LucideIcon;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  iconClassName?: string;
  iconSize?: number;
  iconLeft?: boolean;
}

const FieldWithIcon: React.FC<FieldWithIconProps> = ({
  icon: Icon,
  placeholder,
  value,
  onChange,
  type = "text",
  className = "",
  iconClassName = "",
  iconSize = 24,
  iconLeft = false,
}) => {
  return (
    <div className={`flex items-center rounded-md px-3 py-2 ${className}`}>
      {iconLeft && (
        <Icon
          className={`text-gray-500 mr-2 ${iconClassName}`}
          size={iconSize}
        />
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none flex-grow bg-transparent"
      />
      {!iconLeft && (
        <Icon className={`text-gray-500 ${iconClassName}`} size={iconSize} />
      )}
    </div>
  );
};

export default FieldWithIcon;
