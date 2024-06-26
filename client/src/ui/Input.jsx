import React from "react";

export default function Input({ label, type = "text", state, setState }) {
  return (
    <div>
      <label
        htmlFor="floatingInput"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id="floatingInput"
          value={state}
          onChange={(e) => setState(e.target.value)}
          type={type}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
