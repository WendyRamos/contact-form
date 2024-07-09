import React, { useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
        onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="flex flex-col w-auto p-4 rounded-md text-sm bg-grey-darker text-green-lighter">
      <div className="flex flex-row items-center">
        <FaRegCircleCheck/>
        <h4 className="font-bold px-2">Message Sent!</h4>
      </div>
      <p className="text-xs">{message}</p>
    </div>
  );
}

export default Alert;
