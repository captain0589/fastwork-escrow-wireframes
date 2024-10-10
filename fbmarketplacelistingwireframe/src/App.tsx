import React, { useState } from "react";
import FBMarketplaceListingWireframe from "./FBMarketplaceListingWireframe";
import FastworkQRPaymentWireframe from "./FastworkQRPaymentWireframe";
import TransactionStatusWireframe from "./TransactionStatusWireframe";
import SellerWorkSubmissionWireframe from "./SellerWorkSubmissionWireframe";
import BuyerWorkReviewWireframe from "./BuyerWorkReviewWireframe";
import FundsReleaseConfirmationWireframe from "./FundsReleaseConfirmationWireframe";

type WireframeKey =
  | "FBMarketplaceListing"
  | "FastworkQRPayment"
  | "TransactionStatus"
  | "SellerWorkSubmission"
  | "BuyerWorkReview"
  | "FundsReleaseConfirmation";

const wireframes: Record<WireframeKey, React.FC> = {
  FBMarketplaceListing: FBMarketplaceListingWireframe,
  FastworkQRPayment: FastworkQRPaymentWireframe,
  TransactionStatus: TransactionStatusWireframe,
  SellerWorkSubmission: SellerWorkSubmissionWireframe,
  BuyerWorkReview: BuyerWorkReviewWireframe,
  FundsReleaseConfirmation: FundsReleaseConfirmationWireframe,
};

const App: React.FC = () => {
  const [currentWireframe, setCurrentWireframe] = useState<WireframeKey>(
    "FBMarketplaceListing"
  );

  const CurrentWireframe = wireframes[currentWireframe];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Fastwork Escrow Wireframes
      </h1>
      <select
        value={currentWireframe}
        onChange={(e) => setCurrentWireframe(e.target.value as WireframeKey)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      >
        <option value="FBMarketplaceListing">
          Facebook Marketplace Listing
        </option>
        <option value="FastworkQRPayment">Fastwork QR Payment</option>
        <option value="TransactionStatus">Transaction Status</option>
        <option value="SellerWorkSubmission">Seller Work Submission</option>
        <option value="BuyerWorkReview">Buyer Work Review</option>
        <option value="FundsReleaseConfirmation">
          Funds Release Confirmation
        </option>
      </select>
      <CurrentWireframe />
    </div>
  );
};

export default App;
