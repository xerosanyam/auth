import express from "express";
const app = express();
app.use(express.json());

const port = 3001;

import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890", 6);

const mobileNumberOTP = {};

app.post("/postMobileNumber", (req, res) => {
  const { mobileNumber } = req.body;
  const OTP = nanoid();
  mobileNumberOTP[mobileNumber] = OTP;
  console.log("OTP is:", OTP);
  res.status(200).json();
});

app.post("/verifyOTP", (req, res) => {
  const { mobileNumber, OTP } = req.body;
  if (mobileNumberOTP && mobileNumberOTP[mobileNumber] === OTP) {
    res.status(200).json({});
		return
  }
  res.status(401).json({});
	return
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
