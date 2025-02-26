import React from "react";
import BackButton from "../components/BackButton";

const JoinPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const dto = Object.fromEntries(formData.entries());
    console.log(dto);

    // Prepare DTO for sending to the endpoint
    fetch("/api/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form">
      <BackButton />

      <form onSubmit={handleSubmit}>
        <h1 id="formTitle" className="common-header">
          Join
        </h1>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name (Last, Fist, Middle Initial)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="(000) 000-0000"
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" name="companyName" required />
        </div>

        <div className="form-group">
          <label htmlFor="businessIndustry">Business Industry:</label>
          <input
            type="text"
            id="businessIndustry"
            name="businessIndustry"
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Join
        </button>
      </form>
    </div>
  );
};

export default JoinPage;
