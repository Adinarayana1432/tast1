import React, { useState } from "react";
import './home.css';

const App = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        nationality: "",
        gender: "",
        email: "",
        phone: "",
    });

    const [students, setStudents] = useState([]);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setStudents([...students, formData]);
        setFormData({
            firstName: "",
            lastName: "",
            dob: "",
            nationality: "",
            gender: "",
            email: "",
            phone: "",
        });
    };

    return (
        <div className="home">
            <div className="bg">
            <header>
                <h1 className="head">Student Hub</h1>
                <p className="para">Where students come to shine and data comes to life!</p>
                <button className="btn">Join Us</button>
            </header>
            </div>

            <div className="bg2">
                <section>
                    <h2 className="res-form">Student Registration Form</h2>
                    <h1 className="res-form1">Personal Information</h1>
                    <form onSubmit={handleSubmit}>
                        <input className="f-name"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <input className="l-name"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        /> 
                        <br/>
                        <input className="d-birth"
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={handleInputChange}
                            required
                        />
                        <input className="nationality"
                            type="text"
                            name="nationality"
                            placeholder="Nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            required
                        />
                        <div>
                            <p className="gender">Gender</p>
                            <label>
                            
                                <input className="check"
                                    type="checkbox"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleInputChange}
                                />
                                Female
                            </label>
                            <label>
                                <input className="check"
                                    type="checkbox"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleInputChange}
                                />
                                Male
                            </label>
                            <label>
                                <input className="check"
                                    type="checkbox"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === "Other"}
                                    onChange={handleInputChange}
                                />
                                Other
                            </label>
                        </div>
                        <input className="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <input className="p-number"
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        /> <br />
                        <button className="button1" type="submit">Submit</button>
                    </form>
                </section>
                </div>

                <div>
                <section>
                    <h2>Students List</h2>
                    <table >
                        <thead >
                            <tr >
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Nationality</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.phone}</td>
                                    <td>{student.email}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.nationality}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                </div>
           
        </div>
    );
};

export default App;
