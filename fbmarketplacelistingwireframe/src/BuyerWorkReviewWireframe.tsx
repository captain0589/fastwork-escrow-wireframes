import React from "react";

const BuyerWorkReviewWireframe: React.FC = () => {
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
        Review Submitted Work
      </h1>

      <div style={{ marginBottom: "1rem" }}>
        <p>
          <strong>Transaction ID:</strong> FW12345
        </p>
        <p>
          <strong>Service:</strong> Logo Design
        </p>
        <p>
          <strong>Seller:</strong> Jane Smith
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
          Submitted Files:
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li
            style={{
              marginBottom: "0.25rem",
              color: "#3b82f6",
              cursor: "pointer",
            }}
          >
            logo_final.png
          </li>
          <li
            style={{
              marginBottom: "0.25rem",
              color: "#3b82f6",
              cursor: "pointer",
            }}
          >
            logo_vector.svg
          </li>
          <li
            style={{
              marginBottom: "0.25rem",
              color: "#3b82f6",
              cursor: "pointer",
            }}
          >
            brand_guidelines.pdf
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Seller's Description:
        </h2>
        <p
          style={{
            backgroundColor: "#f3f4f6",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          Final logo design with variations for different use cases. Includes
          vector files and basic brand guidelines.
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
          Your Feedback (optional):
        </label>
        <textarea
          style={{
            width: "100%",
            height: "6rem",
            padding: "0.5rem",
            border: "1px solid #e2e8f0",
            borderRadius: "0.25rem",
          }}
          placeholder="Provide feedback on the submitted work..."
        ></textarea>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <button
          style={{
            width: "48%",
            padding: "0.5rem",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Approve Work
        </button>
        <button
          style={{
            width: "48%",
            padding: "0.5rem",
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Request Revisions
        </button>
      </div>

      <p
        style={{ textAlign: "center", fontSize: "0.875rem", color: "#64748b" }}
      >
        By approving, you agree to release funds to the seller.{" "}
        <span style={{ color: "#3b82f6", cursor: "pointer" }}>Learn More</span>
      </p>
    </div>
  );
};

export default BuyerWorkReviewWireframe;
