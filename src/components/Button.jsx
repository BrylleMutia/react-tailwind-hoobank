import React from "react";

const Button = ({ styles }) => (
   <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary hover:text-white outline-none rounded-[10px] ${styles}`}
   >
      Get Started
   </button>
);

export default Button;
