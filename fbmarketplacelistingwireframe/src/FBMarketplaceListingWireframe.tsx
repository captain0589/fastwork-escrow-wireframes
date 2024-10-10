import React from "react";

const FBMarketplaceListingWireframe: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "32rem",
        margin: "0 auto",
        padding: "1rem",
        border: "1px solid #e2e8f0",
        borderRadius: "0.5rem",
        backgroundColor: "#f0f2f5",
      }}
    >
      <h1
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Facebook Marketplace
      </h1>

      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Logo Design Service
        </h2>
        <p style={{ marginBottom: "0.5rem" }}>
          Professional logo design for your business
        </p>
        <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
          Price: $100
        </p>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Sample logo designs"
          style={{
            width: "100%",
            borderRadius: "0.25rem",
            marginBottom: "0.5rem",
          }}
        />
        <div
          style={{
            backgroundColor: "#e6f3ff",
            padding: "0.5rem",
            borderRadius: "0.25rem",
            marginBottom: "0.5rem",
          }}
        >
          <p style={{ color: "#0066cc", fontWeight: "bold" }}>
            Secure Payment via Fastwork Available
          </p>
        </div>
        <button
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#1877f2",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Edit Listing
        </button>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Buyer Messages
        </h3>
        <div
          style={{
            borderBottom: "1px solid #e2e8f0",
            paddingBottom: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          <p>
            <strong>John Doe:</strong> Is this still available?
          </p>
        </div>
        <button
          style={{
            width: "100%",
            padding: "0.5rem",
            backgroundColor: "#42b72a",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          Respond to Messages
        </button>
      </div>
    </div>
  );
};

export default FBMarketplaceListingWireframe;
