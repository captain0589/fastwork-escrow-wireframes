import React from "react";

const SellerWorkSubmissionWireframe: React.FC = () => {
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
        Submit Completed Work
      </h1>

      <div style={{ marginBottom: "1rem" }}>
        <p>
          <strong>Transaction ID:</strong> FW12345
        </p>
        <p>
          <strong>Service:</strong> Logo Design
        </p>
        <p>
          <strong>Buyer:</strong> John Doe
        </p>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Upload Files:
        </label>
        <div
          style={{
            border: "2px dashed #e2e8f0",
            borderRadius: "0.5rem",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p>Drag and drop files here or</p>
          <button
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "0.25rem",
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Browse Files
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Work Description:
        </label>
        <textarea
          style={{
            width: "100%",
            height: "6rem",
            padding: "0.5rem",
            border: "1px solid #e2e8f0",
            borderRadius: "0.25rem",
          }}
          placeholder="Describe the work you're submitting..."
        ></textarea>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{
            display: "block",
            marginBottom: "0.5rem",
            fontWeight: "bold",
          }}
        >
          Additional Comments (optional):
        </label>
        <textarea
          style={{
            width: "100%",
            height: "4rem",
            padding: "0.5rem",
            border: "1px solid #e2e8f0",
            borderRadius: "0.25rem",
          }}
          placeholder="Any additional information for the buyer..."
        ></textarea>
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
        Submit Work for Review
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          fontSize: "0.875rem",
          color: "#64748b",
        }}
      >
        Need more time?{" "}
        <span style={{ color: "#3b82f6", cursor: "pointer" }}>
          Request an Extension
        </span>
      </p>
    </div>
  );
};

export default SellerWorkSubmissionWireframe;
