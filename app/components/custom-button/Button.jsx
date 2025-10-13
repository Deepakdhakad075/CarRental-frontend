import React from "react";

const VARIANT_STYLES = {
  primary: "text-white border-purple-900", // Removed bg class
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-300",
  success: "bg-green-500 hover:bg-green-600 text-white border-green-600",
};

export default function CustomButton({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const customStyle =
    variant === "primary"
      ? { backgroundColor: "rgba(49, 46, 129, 0.6)" }
      : {};

  return (
    <button
      className={`px-4 py-2 rounded-md border font-semibold transition-colors duration-200 focus:outline-none ${VARIANT_STYLES[variant]} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
}