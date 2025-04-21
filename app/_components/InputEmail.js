"use client";
import { useState, useEffect } from "react";
import AddEmailButton from "./AddEmailButton";
import { useEmailContext } from "../_contexts/EmailContext";

function InputEmail() {
  const { addSelectedEmail } = useEmailContext();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const commonDomains = [
    "gmail.com",
    "outlook.com",
    "yahoo.com",
    "hotmail.com",
    "icloud.com",
  ];

  useEffect(() => {
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    setShowError(email.length > 0 && !isValidEmail);
  }, [email]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddClick = () => {
    if (isValid) {
      addSelectedEmail(email);
      setEmail("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && email.includes("@")) {
      e.preventDefault();
      const [username, partialDomain] = email.split("@");
      if (username && partialDomain) {
        const matchedDomain = commonDomains.find((domain) =>
          domain.startsWith(partialDomain)
        );
        const fullDomain = matchedDomain || "gmail.com";
        setEmail(`${username}@${fullDomain}`);
      }
    }

    if (e.key === "Enter") {
      handleAddClick();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          placeholder="Email"
          className={`border ${
            showError ? "border-red-500" : "border-gray-100"
          } rounded h-11 w-full md:w-[650px] mr-2 text-gray-600 p-3 my-5`}
          onChange={handleEmailChange}
          onKeyDown={handleKeyDown}
          value={email}
        />
        <AddEmailButton isValid={isValid} onClick={handleAddClick} />
      </div>
      {showError && (
        <p className="text-red-500 text-sm my-1">
          Please enter a valid email address ending with .com
        </p>
      )}
      <p className="text-gray-500 text-xs">
        Press Tab after typing @ to autocomplete with common email domains
      </p>
    </div>
  );
}

export default InputEmail;
