import { useState } from "react";
import { postMobileNumber } from "./utils/api";

export default function PhoneAuth() {
  const [mobileNumber, setMobilNumber] = useState("");
  //OTP
  const [confirmationNumber, setConfirmationNumber] = useState(0);
  const [confirmationResult, setConfirmationResult] = useState("");
  const [verified, setVerified] = useState(false);

  const verifyConfirmationNumber = () => {};
  const generateOTP = async () => {
    await postMobileNumber(mobileNumber)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        // setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div>
          <label htmlFor="mobileNumber">Enter Mobile Number</label>
          <input
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobilNumber(e.target.value)}
            className="border"
            type="tel"
          />
        </div>
        {confirmationResult && (
          <div>
            <label htmlFor="confirmationNumber">Enter OTP</label>
            <input
              id="confirmationNumber"
              value={confirmationNumber}
              onChange={(e) => setConfirmationNumber(e.target.valueAsNumber)}
              className="border"
              type="tel"
            />
          </div>
        )}
        <div>
          {confirmationResult && (
            <button
              v-if="confirmationResult !== ''"
              id="sign-in-button"
              className="p-2 border"
              onClick={verifyConfirmationNumber}
            >
              Login
            </button>
          )}
          <button
            id="sign-in-button"
            className="p-2 border"
            onClick={generateOTP}
          >
            {confirmationResult === "" ? "Generate" : "Re-Send"} OTP
          </button>
        </div>
      </div>
    </div>
  );
}
