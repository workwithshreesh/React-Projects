import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/USERS', {
            name: values.name,
            email: values.email,
            phone: values.phone
        })
            .then(response => {
                alert("User Added")
                navigate('/')
            })
            .catch(() => console.log("Error in post data"))
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

            <div className="w-75 rounded bg-white border shadow p-4">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            placeholder="Name"
                            name="name"
                            onChange={event => setValues({ ...values, name: event.target.value })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name="email"
                            onChange={event => setValues({ ...values, email: event.target.value })}
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="phoneInput">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneInput"
                            placeholder="Number"
                            name="phone"
                            pattern="^[6-9]\d{9}$"
                            maxLength="10"
                            title="Phone number must be exactly 10 digits and start with 6, 7, 8, or 9"
                            onChange={event => setValues({ ...values, phone: event.target.value })}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    <Link className="btn btn-secondary mt-2 ms-3" to="/">Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
