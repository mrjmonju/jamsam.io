import React from "react";

function Button(props) {
  return (
    <>
      <button className="center py-3 px-9 text-white rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 duration-300 mt-6 ml-6 bg-slate-600 shadow-lg">
        {props.buttonText}
      </button>
    </>
  );
}

export default Button;
