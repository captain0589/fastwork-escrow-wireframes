import React from "react";

const FastworkQRPaymentWireframe: React.FC = () => {
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
        Fastwork Secure Payment
      </h1>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <p>
          <strong>Amount to Pay:</strong> $100
        </p>
        <p>
          <strong>Service:</strong> Logo Design
        </p>
        <p>
          <strong>Seller:</strong> Jane Smith
        </p>
      </div>

      <div
        style={{
          border: "2px solid #e2e8f0",
          borderRadius: "0.5rem",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <img
          src="https://via.placeholder.com/200"
          alt="QR Code for Payment"
          style={{
            width: "100%",
            maxWidth: "200px",
            margin: "0 auto",
            display: "block",
          }}
        />
        <p style={{ textAlign: "center", marginTop: "0.5rem" }}>
          Scan this QR code to make payment
        </p>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Payment will be held in escrow until you approve the work
        </p>
      </div>

      <button
        style={{
          width: "100%",
          padding: "0.5rem",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "0.25rem",
          cursor: "pointer",
        }}
      >
        I've Made the Payment
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#64748b",
        }}
      >
        Having issues?{" "}
        <span style={{ color: "#3b82f6", cursor: "pointer" }}>
          Contact Support
        </span>
      </p>
    </div>
  );
};

export default FastworkQRPaymentWireframe;
