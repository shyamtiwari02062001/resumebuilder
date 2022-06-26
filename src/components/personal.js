import { useContext } from "react";
import ResumeDetailsContext from "../indexContext";
import "../css/input.css";
import { Nations } from "../constants/nation";
const Personal = () => {
  const {
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
  } = useContext(ResumeDetailsContext);
  return (
    <div style={{ margin: "10px" }}>
      <h1 className="header">Personal Details</h1>
      <div className="look">
        <div className="flex">
          <label className="label">First Name</label>
          <br />
          <input
            type={"text"}
            placeholder="First Name"
            className="input"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="flex">
          <label className="labelUnrequired">Middle Name</label>
          <br />
          <input
            type={"text"}
            placeholder="Middle Name"
            className="input"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
          />
        </div>
        <div className="flex">
          <label className="label">Last Name</label>
          <br />
          <input
            type={"text"}
            placeholder="Last Name"
            className="input"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
      </div>
      <div className="look">
        <div className="flex">
          <label className="label">Mobile Number</label>
          <br />
          <input
            type={"tel"}
            placeholder="Mobile Number"
            className="input2"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            required
          />
        </div>
        <div className="flex">
          <label className="label">Email Id</label>
          <br />
          <input
            type={"email"}
            placeholder="Email Id"
            className="input2"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="look">
        <div className="flex">
          <label className="label">DOB</label>
          <br />
          <input
            type={"date"}
            placeholder="Date of Birth"
            className="input"
            value={dob}
            onChange={(event) => setDOB(event.target.value)}
            required
          />
        </div>
        <div className="flex">
          <label className="label">Gender</label>
          <br />
          <select
            className="select"
            required
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Others"}>Others</option>
          </select>
        </div>
        <div className="flex">
          <label className="label">Nationality</label>
          <br />
          <select
            className="select"
            required
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
          >
            {Nations.map((nation, index) => (
              <option key={index} value={nation}>
                {nation}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <label className="label">Marital Status</label>
          <br />
          <select
            className="select"
            required
            value={maritalStatus}
            onChange={(event) => setMaritalStatus(event.target.value)}
          >
            <option value={"Married"}>Married</option>
            <option value={"Unmarried"}>Unmarried</option>
          </select>
        </div>
      </div>
      <div className="look">
        <div className="flex">
          <label className="label">Interest</label>
          <br />
          <textarea
            required
            className="textarea"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            placeholder="Area of Interest"
          />
        </div>
        <div className="flex">
          <label className="label">Address</label>
          <br />
          <textarea
            required
            className="textarea"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            placeholder="Permanent Address"
          />
        </div>
      </div>
      <div className="look">
        <div className="flex">
          <label className="label">Languages Known</label>
          <br />
          <input
            required
            className="input3"
            value={languages}
            onChange={(event) => setLanguages(event.target.value)}
            placeholder="List of langauges known"
          />
        </div>
      </div>
    </div>
  );
};
export default Personal;
