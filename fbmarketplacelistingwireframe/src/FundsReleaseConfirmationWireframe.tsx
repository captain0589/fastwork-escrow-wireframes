import React from "react";

const FundsReleaseConfirmationWireframe: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "32rem",
        margin: "0 auto",
        padding: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "0.5rem",
        backgroundColor: "white",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Funds Released Successfully
      </h1>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>

      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <p>
          <strong>Transaction ID:</strong> FW12345
        </p>
        <p>
          <strong>Amount Released:</strong> $100
        </p>
        <p>
          <strong>Recipient:</strong> Jane Smith
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#f0fdf4",
          border: "1px solid #10b981",
          borderRadius: "0.25rem",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <p
          style={{ color: "#10b981", fontWeight: "bold", textAlign: "center" }}
        >
          Funds have been transferred to the seller's registered bank account.
        </p>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Next Steps:
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ marginBottom: "0.25rem" }}>
            1. Seller will be notified of the payment
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            2. Funds will appear in seller's account within 1-3 business days
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            3. You can now leave a review for the seller
          </li>
        </ul>
      </div>

      <button
        style={{
          width: "100%",
          padding: "0.5rem",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Leave a Review
      </button>

      <button
        style={{
          width: "100%",
          padding: "0.5rem",
          backgroundColor: "#f3f4f6",
          color: "#4b5563",
          border: "1px solid #e5e7eb",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        Back to Dashboard
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#64748b",
        }}
      >
        Need assistance?{" "}
        <span style={{ color: "#3b82f6", cursor: "pointer" }}>
          Contact Support
        </span>
      </p>
    </div>
  );
};

export default FundsReleaseConfirmationWireframe;
