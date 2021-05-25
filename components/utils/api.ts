const url = "http://localhost:3001";
export const postMobileNumber = async (mobileNumber: string) => {
  console.log(mobileNumber);
  const response = await fetch(`${url}/postMobileNumber`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mobileNumber }),
  });
  return response.json();
};
