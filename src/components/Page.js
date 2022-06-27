import React, { useContext } from "react";
import ResumeDetailsContext from "../indexContext";
import '../css/page.css'
export const ComponentToPrint = React.forwardRef((props, ref) => {
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
    setDetail,
  } = useContext(ResumeDetailsContext);
  return (
    <div ref={ref} c>
      <div style={{ padding: "10px", display: "flex" }}>
        <div style={{ flex: "25" }}>
          <div style={{ justifyContent: "center" }}>
            <img
              alt=""
              src={image}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#D3D3D3",
              padding: "5px",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              <strong>
                <u style={{ fontSize: "large", fontWeight: 500 }}>
                  Permanent Address:
                </u>
              </strong>{" "}
              {address}
            </p>
            <p style={{ textAlign: "justify" }}>
              <u style={{ fontSize: "large", fontWeight: 500 }}>Mobile:</u>{" "}
              {mobileNumber}
            </p>
            <p style={{ textAlign: "justify" }}>
              <u style={{ fontSize: "large", fontWeight: 500 }}>E-Mail:</u>{" "}
              {email}
            </p>
            <u style={{ fontSize: "large", fontWeight: 500 }}>
              Personal Details:
            </u>
            <p >
              <span style={{ fontSize: "large", fontWeight: 500 }}>
                Date of Birth:
              </span>{" "}
               {dob}
            </p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "large", fontWeight: 500 }}>Mobile:</span>{" "}
               {mobileNumber}
            </p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "large", fontWeight: 500 }}>Gender:</span>{" "}
              {gender}
            </p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "large", fontWeight: 500 }}>
                Nationality:
              </span>{" "}
              {nationality}
            </p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "large", fontWeight: 500 }}>
                Marital Status:
              </span>{" "}
              {maritalStatus}
            </p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "large", fontWeight: 500 }}>
                Languages Known:
              </span>{" "}
              {languages}
            </p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontSize: "large", fontWeight: 500 }}>
                Interest
              </span>{" "}
              : {interest}
            </p>
            <u style={{ fontSize: "large", fontWeight: 500 }}>
              Technical Skills:
            </u>{" "}
            <br />
            <div style={{display:"list-item",marginLeft:"1em"}}>
              {" "}
              {skills.split(",").reduce((all, cur) => [
                ...all,
                  
                  <p style={{display:"list-item"}}>{cur}</p>
              ])}
            </div>
          </div>
        </div>
        <div
          style={{ flex: "75", marginLeft: "20px" }}
        >
          <h2 style={{textAlign:"center"}}>{firstName+" "+middleName+" "+lastName}</h2>
          <div style={{width:"100%",backgroundColor:"#D3D3D3",}}>
              <h4 style={{fontSize:"larger",padding:"5px"}}>CAREER OBJECTIVE</h4>
          </div>
          <p style={{fontSize:"large",textAlign:"justify"}}>{career}</p>
          <div style={{width:"100%",backgroundColor:"#D3D3D3",}}>
              <h4 style={{fontSize:"larger",padding:"5px"}}>ACADEMIC QUALIFICATIONS</h4>
          </div>
          <table>
	<thead>
		<tr>
			<td>Degree</td>
			<td>Board/University</td>
			<td>Year</td>
			<td>Percentage/CGPA</td>
		</tr>
	</thead>
	<tbody>
	{degree.map((val,index)=>    <tr>
      <td>{degree[index]}</td>
      <td>{degree[index]}</td>
      <td>{degree[index]}</td>
      <td>{degree[index]}</td>
    </tr>
  )}
	</tbody>
</table>

        </div>
      </div>
    </div>
  );
});
