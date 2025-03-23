import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/USERS')
            .then(response =>
                setData(response.data)
            )
    }, [])
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1>List Of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    <Link to='/create' className='m-3 btn btn-success'>Add +</Link>
                </div>
                <div className="container">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((d,i)=>(
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td>{d.email}</td>
                                        <td>{d.phone}</td>
                                        <td>
                                            <Link to='/read' className="btn btn-sm btn-primary me-2">Read</Link>
                                            <Link to='/read' className="btn btn-sm btn-warning me-2">Edit</Link>
                                            <Link to='/read' className="btn btn-sm btn-danger">Del</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home