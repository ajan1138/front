"use client";

import { createContext, useContext, useState, useEffect } from "react";

const EmailContext = createContext();

export function EmailProvider({ children }) {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEmails = async () => {
    try {
      const response = await fetch("http://localhost:8080/getEmails", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch emails");
      }
      const data = await response.json();
      setEmails(data);
    } catch (err) {
      console.error("Error fetching emails:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const value = {
    emails,
    loading,
    error,
    refreshEmails: fetchEmails,
  };

  return (
    <EmailContext.Provider value={value}>{children}</EmailContext.Provider>
  );
}

export function useEmailContext() {
  const context = useContext(EmailContext);
  if (context === undefined) {
    throw new Error("useEmailContext must be used within an EmailProvider");
  }
  return context;
}
