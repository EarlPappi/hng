import React, { useEffect } from "react";
import { useAuth } from "../Context";
import { ChevronRight, XMark } from "../Icons";
import Wallets from "../utils/wallets";
import { Link } from "react-router-dom";

function Modal() {
  const { showWallet, setShowWallet } = useAuth();

  useEffect(() => {
    if (showWallet) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showWallet]);

  return (
    <div>
      {showWallet && (
        <div>
          <div
            className="fixed top-0 bg-[#00000094] w-screen h-screen overflow-hidden"
            onClick={() => {
              setShowWallet(false);
            }}
          ></div>

          <div className="absolute bg-white max-h-[90%] overflow-y-scroll w-11/12 max-w-2xl h-3/7 z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3 md:p-6 ">
            <div className="flex justify-between">
              <h2 className="font-bold text-[1.4em] mb-12">Connect Wallet</h2>
              <XMark />
            </div>

            <div>
              <p>Choose your Preferred Wallet: </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {Wallets.map((item) => {
                return (
                  <Link to={`/restore/connect/apps/${item.permalink}`}>
                    <div className="flex justify-between items-center bg-[#F8F9FA] hover:bg-[#e4ecf5] px-4 py-2 rounded-lg border border-[#CFD8DC]">
                      <div className="flex items-center gap-8">
                        <div>
                          <img
                            src={item.image}
                            alt=""
                            width={20}
                            height={20}
                          ></img>
                        </div>
                        <h2 className="font-bold">{item.name}</h2>
                      </div>

                      <div>
                        <ChevronRight />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
