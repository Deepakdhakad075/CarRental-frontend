import React from "react";

const VARIANT_STYLES = {
  primary: "bg-slate-800 text-white border-purple-900",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300",
  success: "bg-green-500 hover:bg-green-600 text-white border-green-600",
};

export default function CustomButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-md border font-semibold transition-colors duration-200 focus:outline-none ${VARIANT_STYLES[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}