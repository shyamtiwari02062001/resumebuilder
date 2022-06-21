import { useContext } from "react";
import ResumeDetailsContext from "../indexContext";
import "./personal.css";
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
          <label className="label">Middle Name</label>
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
          <select className="select" required value={gender}
            onChange={(event) => setGender(event.target.value)}>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Others"}>Others</option>
          </select>
        </div>
        <div className="flex">
          <label className="label">Nationality</label>
          <br />
          <select className="select" required value={nationality}
            onChange={(event) => setNationality(event.target.value)}>
            <option value={"Afghanistan"}>Afghanistan</option>
            <option value={"Albania"}>Albania</option>
            <option value={"Algeria"}>Algeria</option>
            <option value={"Argentina"}>Argentina</option>
            <option value={"Australia"}>Australia</option>
            <option value={"Austria"}>Austria</option>
            <option value={"Bangladesh"}>Bangladesh</option>
            <option value={"Belgium"}>Belgium</option>
            <option value={"Bolivia"}>Bolivia</option>
            <option value={"Botswana"}>Botswana</option>
            <option value={"Brazil"}>Brazil</option>
            <option value={"Bulgaria"}>Bulgaria</option>
            <option value={"Cambodia"}>Cambodia</option>
            <option value={"Cameroon"}>Cameroon</option>
            <option value={"Canada"}>Canada</option>
            <option value={"Chile"}>Chile</option>
            <option value={"China"}>China</option>
            <option value={"Colombia"}>Colombia</option>
            <option value={"Costa Rica "}>Costa Rica</option>
            <option value={"Croatia"}>Croatia</option>
            <option value={"Cuba"}>Cuba</option>
            <option value={"Czech Republic"}>Czech Republic</option>
            <option value={"Denmark"}>Denmark</option>
            <option value={"Dominican Republic"}>Dominican Republic</option>
            <option value={"Ecuador"}>Ecuador</option>
            <option value={"Egypt"}>Egypt</option>
            <option value={"El Salvador"}>El Salvador</option>
            <option value={"England"}>England</option>
            <option value={"Estonia"}>Estonia</option>
            <option value={"Ethiopia"}>Ethiopia</option>
            <option value={"Fiji"}>Fiji</option>
            <option value={"Finland"}>Finland</option>
            <option value={"France"}>France</option>
            <option value={"Germany"}>Germany</option>
            <option value={"Ghana"}>Ghana</option>
            <option value={"Greece"}>Greece</option>
            <option value={"Guatemala"}>Guatemala</option>
            <option value={"Haiti"}>Haiti</option>
            <option value={"Honduras"}>Honduras</option>
            <option value={"Hungary"}>Hungary</option>
            <option value={"Iceland"}>Iceland</option>
            <option value={"India"}>India</option>
            <option value={"Indonesia"}>Indonesia</option>
            <option value={"Iran"}>Iran</option>
            <option value={"Iraq"}>Iraq</option>
            <option value={"Ireland"}>Ireland</option>
            <option value={"Israel"}>Israel</option>
            <option value={"Italy"}>Italy</option>
            <option value={"Jamaica"}>Jamaica</option>
            <option value={"Japan"}>Japan</option>
            <option value={"Jordan"}>Jordan</option>
            <option value={"Kenya"}>Kenya</option>
            <option value={"Kuwait"}>Kuwait</option>
            <option value={"Laos"}>Laos</option>
            <option value={"Latvia"}>Latvia</option>
            <option value={"Lebanon"}>Lebanon</option>
            <option value={"Libya"}>Libya</option>
            <option value={"Lithuania"}>Lithuania</option>
            <option value={"Madagascar"}>Madagascar</option>
            <option value={"Malaysia"}>Malaysia</option>
            <option value={"Mali"}>Mali</option>
            <option value={"Malta"}>Malta</option>
            <option value={"Mexico"}>Mexico</option>
            <option value={"Mongolia"}>Mongolia</option>
            <option value={"Morocco"}>Morocco</option>
            <option value={"Mozambique"}>Mozambique</option>
            <option value={"Namibia"}>Namibia</option>
            <option value={"Nepal"}>Nepal</option>
            <option value={"Netherlands"}>Netherlands</option>
            <option value={"New Zealand"}>New Zealand</option>
            <option value={"Nicaragua"}>Nicaragua</option>
            <option value={"Nigeria"}>Nigeria</option>
            <option value={"Norway"}>Norway</option>
            <option value={"Pakistan"}>Pakistan</option>
            <option value={"Panama"}>Panama</option>
            <option value={"Paraguay"}>Paraguay</option>
            <option value={"Peru"}>Peru</option>
            <option value={"Philippines"}>Philippines</option>
            <option value={"Poland"}>Poland</option>
            <option value={"Romania"}>Romania</option>
            <option value={"Russia"}>Russia</option>
            <option value={"Saudi Arabia"}>Saudi Arabia</option>
            <option value={"Scotland"}>Scotland</option>
            <option value={"Senegal"}>Senegal</option>
            <option value={"Serbia"}>Serbia</option>
            <option value={"Singapore"}>Singapore</option>
            <option value={"Slovakia"}>Slovakia</option>
            <option value={"South Africa"}>South Africa</option>
            <option value={"South Korea"}>South Korea</option>
            <option value={"Spain"}>Spain</option>
            <option value={"Sri Lanka"}>Sri Lanka</option>
            <option value={"Sudan"}>Sudan</option>
            <option value={"Sweden"}>Sweden</option>
            <option value={"Switzerland"}>Switzerland</option>
            <option value={"Syria"}>Syria</option>
            <option value={"Taiwan"}>Taiwan</option>
            <option value={"Tajikistan"}>Tajikistan</option>
            <option value={"Thailand"}>Thailand</option>
            <option value={"Tonga"}>Tonga</option>
            <option value={"Tunisia"}>Tunisia</option>
            <option value={"Turkey"}>Turkey</option>
            <option value={"Ukraine"}>Ukraine</option>
            <option value={"United Arab Emirates"}>United Arab Emirates</option>
            <option value={"(The) United Kingdom"}>(The) United Kingdom</option>
            <option value={"(The) United States"}>(The) United States</option>
            <option value={"Uruguay"}>Uruguay</option>
            <option value={"Venezuela"}>Venezuela</option>
            <option value={"Vietnam"}>Vietnam</option>
            <option value={"Wales"}>Wales</option>
            <option value={"Zambia"}>Zambia</option>
            <option value={"Zimbabwe"}>Zimbabwe</option>
          </select>
        </div>
      </div>
      <div className="look">
        <div className="flex">
          <label className="label">Interest</label>
          <br />
          <textarea required className="textarea" value={interest}
            onChange={(event) => setInterest(event.target.value)} placeholder="Area of Interest" />
        </div>
        <div className="flex">
          <label className="label">Address</label>
          <br />
          <textarea required className="textarea" value={address}
            onChange={(event) => setAddress(event.target.value)} placeholder="Permanent Address" />
        </div>
      </div>
      <div className="look">
        <div className="flex">
          <label  className="label">Languages Known</label>
          <br />
          <input required className="input3"  value={languages}
            onChange={(event) => setLanguages(event.target.value)} placeholder="List of langauges known" />
        </div>
      </div>
    </div>
  );
};
export default Personal;
