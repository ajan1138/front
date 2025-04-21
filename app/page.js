"use client";

import { useEffect, useState } from "react";
import EmailSection from "./_components/EmailSection";
import Label from "./_components/Label";
import Table from "./_components/Table";

export default function EmailsPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

    fetchEmails();
  }, []);
  //moze se izbrisati dependency array da bi radilo kako treba, ali nije najprakticnije

  if (loading) {
    return <div className="p-4">Loading emails...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <EmailSection data={emails} />
      <Label>Most Frequently Send Emails</Label>
      <Table data={emails} />
    </div>
  );
}
