"use client";

import { FaCartPlus } from "react-icons/fa";
import { useEmailContext } from "../_contexts/EmailContext";

function SendEmailButton() {
  const { selectedEmails, isSubmitting, submitSelectedEmails } =
    useEmailContext();

  const isMoreThanTwo = selectedEmails.length > 2;

  return (
    <button
      onClick={submitSelectedEmails}
      className={`flex items-center text-white bg-gray-700 p-4 rounded-xl font-bold my-4 ${
        !isMoreThanTwo ? "cursor-not-allowed" : "cursor-pointer"
      } ${isSubmitting ? "opacity-50" : ""}`}
      disabled={!isMoreThanTwo || isSubmitting}
    >
      <FaCartPlus />
      <p className="ml-2">{isSubmitting ? "Sending..." : "Send Emails"}</p>
    </button>
  );
}

export default SendEmailButton;
