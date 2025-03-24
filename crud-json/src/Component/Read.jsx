import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function Read() {

    const location = useLocation()
    const { d } = location.state || {}
    console.log(d)
    const [values] = useState({
        id: d.id || '',
        name: d.name || '',
        email: d.email || '',
        phone: d.phone || ''
    });

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <div className="w-74 rounded border bg-white shadow p-4">
                <div className="d-flex justify-content-center w-100">
                    <h2>User Data</h2>
                </div>
                <h5>ID: {values.id}</h5>
                <h5>Name: {values.name}</h5>
                <h5>Email: {values.email}</h5>
                <h5>Phone: {values.phone}</h5>
            </div>
            <Link className="btn btn-secondary mt-2 ms-3" to="/">Back</Link>
        </div>
    );
}

export default Read;