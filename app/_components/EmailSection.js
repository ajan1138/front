"use client";
import InputEmail from "./InputEmail";
import SendEmailButton from "./SendEmailButton";
import Label from "./Label";
import SelectedEmailsList from "./SelectedEmailsList";

function EmailSection() {
  return (
    <div className="m-4">
      <Label>Add Emails to Database</Label>
      <InputEmail />
      <SelectedEmailsList />
      <SendEmailButton />
    </div>
  );
}

export default EmailSection;
