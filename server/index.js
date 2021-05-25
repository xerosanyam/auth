import express from "express"
const app = express();
const port = 3000;

import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890", 6);

app.post("/getOTP", (req, res) => {
  const OTP = nanoid();
  console.log("OTP is:", OTP);
  res.status(200).json({ OTP });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
