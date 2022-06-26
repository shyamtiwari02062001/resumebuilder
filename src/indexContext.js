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
  const [maritalStatus, setMaritalStatus] = useState("Married");
  const [nationality, setNationality] = useState("Afghanistan");
  const [interest, setInterest] = useState("");
  const [address, setAddress] = useState("");
  const [languages, setLanguages] = useState("");
  const [degree, setDegree] = useState([]);
  const [year, setYear] = useState([]);
  const [board, setBoard] = useState([]);
  const [percentage, setPercentage] = useState([]);
  const [career,setCareer]=useState("");
  const [skills,setSkills]=useState("");
  const [image,setImage]=useState("");
  const [detailTitle,setDetailTitle]=useState([]);
  const [detail,setDetail]=useState([]);
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
        maritalStatus,
        setMaritalStatus,
        nationality,
        setNationality,
        interest,
        setInterest,
        address,
        setAddress,
        languages,
        setLanguages,
        degree,
        setDegree,
        board,
        setBoard,
        year,
        setYear,
        percentage,
        setPercentage,
        career,
        setCareer,
        skills,
        setSkills,
        image,
        setImage,
        detailTitle,
        setDetailTitle,
        detail,
        setDetail
      }}
    >
      {children}
    </ResumeDetailsContext.Provider>
  );
};

export { ResumeDetailsProvider };
export default ResumeDetailsContext;
