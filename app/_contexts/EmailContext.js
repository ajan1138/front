"use client";

import { createContext, useContext, useState, useEffect } from "react";

const EmailContext = createContext();

function EmailProvider({ children }) {
  const [emails, setEmails] = useState([]);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/getEmails");

      if (!response.ok) {
        throw new Error("Failed to fetch emails");
      }
      const data = await response.json();
      setEmails(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching emails:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addSelectedEmail = (emailValue) => {
    if (!emailValue) return;

    const emailExists = selectedEmails.some(
      (item) => item.email === emailValue
    );

    if (!emailExists) {
      const newEmail = {
        id: Date.now().toString(),
        email: emailValue,
        repeats: 1,
      };
      setSelectedEmails((prev) => [...prev, newEmail]);
    }
  };

  const removeSelectedEmail = (emailId) => {
    setSelectedEmails((prev) => prev.filter((email) => email.id !== emailId));
  };

  const submitSelectedEmails = async () => {
    if (selectedEmails.length < 3) return;

    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:8080/postUsers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedEmails),
      });

      if (!response.ok) throw new Error("Failed to submit emails");

      await response.json();
      setSelectedEmails([]);
      await fetchEmails();
    } catch (err) {
      console.error("Error submitting emails:", err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const value = {
    emails,
    selectedEmails,
    loading,
    error,
    isSubmitting,
    addSelectedEmail,
    removeSelectedEmail,
    submitSelectedEmails,
    fetchEmails: fetchEmails,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}

function useEmailContext() {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error("useEmailContext must be used within an EmailProvider");
  }
  return context;
}

export { EmailProvider, useEmailContext };
