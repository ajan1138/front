"use client";

import SelectedEmail from "./SelectedEmail";
import { useEmailContext } from "../_contexts/EmailContext";

function SelectedEmailsList() {
  const { selectedEmails, removeSelectedEmail } = useEmailContext();

  return (
    <ul className="flex flex-wrap gap-2 my-4 w-full max-w-[800px]">
      {selectedEmails.map((email) => (
        <li key={email.id} className="mb-2">
          <SelectedEmail onRemoveEmail={() => removeSelectedEmail(email.id)}>
            {email.email}
          </SelectedEmail>
        </li>
      ))}
    </ul>
  );
}

export default SelectedEmailsList;
