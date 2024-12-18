import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../Context";
import Wallets from "../utils/wallets";

function Connect() {
  const { appName } = useParams();
  const { showWallet, setShowWallet } = useAuth();

  const selectedWallet = Wallets.find((items) => items.permalink === appName);

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  useEffect(() => {
    setShowWallet(false);
  }, [setShowWallet]);
  return (
    <div className="flex justify-center items-center h-screen bg-[#F9FAFB]">
      <div className="w-11/12 md:w-2/3 bg-white p-6 rounded-2xl shadow-lg max-w-xl">
        <div className="flex items-center gap-2 mb-6">
          <img src={selectedWallet.image} alt="MetaMask" className="w-8 h-8" />
          <h2 className="font-bold text-xl">
            Import your {selectedWallet.name} wallet
          </h2>
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">
            Wallet Name:
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg mt-1"
            value={`${selectedWallet.name} Wallet`}
            disabled
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">
            Recovery Phrase:
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-lg mt-1"
            rows="4"
            placeholder="Enter your recovery phrase"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">
            Typically 12 (sometimes 24) words separated by single spaces
          </p>
        </div>

        <div className="flex justify-between items-center">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            PROCEED →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Connect;
