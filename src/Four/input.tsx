import React from "react";

interface InputProps {
  title: string;
  placeholder: string;
  type: "text" | "textarea";
}

export const Input: React.FC<InputProps> = ({ title, placeholder, type }) => {
  return (
    <div>
      <label htmlFor="title" className="block font-popi text-sm font-semibold">
        {title}
      </label>
      {type === "text" && (
        <input
          id="title"
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 p-4 py-3"
        />
      )}
      {type === "textarea" && (
        <textarea
          id={title}
          placeholder={placeholder}
          className="mt-1 w-full rounded-md border-2 p-4 py-3"
        />
      )}
    </div>
  );
};
