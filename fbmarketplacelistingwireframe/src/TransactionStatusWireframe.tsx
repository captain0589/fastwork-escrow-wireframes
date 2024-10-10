import React from "react";

const TransactionStatusWireframe: React.FC = () => {
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
        Transaction Status
      </h1>

      <div style={{ marginBottom: "1rem" }}>
        <p>
          <strong>Transaction ID:</strong> FW12345
        </p>
        <p>
          <strong>Service:</strong> Logo Design
        </p>
        <p>
          <strong>Amount:</strong> $100
        </p>
        <p>
          <strong>Buyer:</strong> John Doe
        </p>
        <p>
          <strong>Seller:</strong> Jane Smith
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <div
          style={{ width: "25%", height: "4px", backgroundColor: "#10b981" }}
        ></div>
        <div
          style={{ width: "25%", height: "4px", backgroundColor: "#10b981" }}
        ></div>
        <div
          style={{ width: "25%", height: "4px", backgroundColor: "#e2e8f0" }}
        ></div>
        <div
          style={{ width: "25%", height: "4px", backgroundColor: "#e2e8f0" }}
        ></div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <p style={{ fontWeight: "bold" }}>Current Status: Work in Progress</p>
        <p>Seller is working on the logo design</p>
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
            1. Seller submits completed work
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            2. Buyer reviews and approves work
          </li>
          <li style={{ marginBottom: "0.25rem" }}>
            3. Funds are released to seller
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
        }}
      >
        Contact Other Party
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#64748b",
        }}
      >
        Issues with the transaction?{" "}
        <span style={{ color: "#3b82f6", cursor: "pointer" }}>
          Open a Dispute
        </span>
      </p>
    </div>
  );
};

export default TransactionStatusWireframe;
