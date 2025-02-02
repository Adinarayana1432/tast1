import React, { useState } from "react";

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
        <div>
            <header>
                <h1>Student Hub</h1>
            </header>
            <main>
                <section>
                    <h2>Student Registration Form</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            value={formData.dob}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="nationality"
                            placeholder="Nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            required
                        />
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleInputChange}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleInputChange}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Other"
                                    checked={formData.gender === "Other"}
                                    onChange={handleInputChange}
                                />
                                Other
                            </label>
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section>
                    <h2>Students List</h2>
                    <table>
                        <thead>
                            <tr>
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
            </main>
        </div>
    );
};

export default App;
