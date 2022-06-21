import React, { useState } from "react";
const ResumeDetailsContext = React.createContext();
const ResumeDetailsProvider = ({ children }) => {
  const [id, setId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("male");
  const [nationality, setNationality] = useState("Afghanistan");
  const [interest, setInterest] = useState("");
  const [address, setAddress] = useState("");
  const [languages, setLanguages] = useState("");
  return (
    <ResumeDetailsContext.Provider
      value={{
        id,
        setId,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        middleName,
        setMiddleName,
        mobileNumber,
        setMobileNumber,
        email,
        setEmail,
        dob,
        setDOB,
        gender,
        setGender,
        nationality,
        setNationality,
        interest,
        setInterest,
        address,
        setAddress,
        languages,
        setLanguages,
      }}
    >
      {children}
    </ResumeDetailsContext.Provider>
  );
};

export { ResumeDetailsProvider };
export default ResumeDetailsContext;
