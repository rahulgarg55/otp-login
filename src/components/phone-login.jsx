import React, { useState } from "react";

const PhoneOtpForm = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const handlePhonenumber = () => {};
  return (
    <div>
      <form onSubmit={() => {}}>
        <input
          type="text"
          value={phonenumber}
          onChange={handlePhonenumber} //calling a function on change
          placeholder="Enter Phone Number"
        />
      </form>
    </div>
  );
};

export default PhoneOtpForm;
