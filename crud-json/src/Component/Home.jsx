import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 5


    useEffect(() => {
        axios.get('http://localhost:3000/USERS')
            .then(response =>
                setData(response.data)
            )
            .catch(() => console.log("Home get data"))
    }, [data]);


    // delete function
    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to Delete?");
        if (confirm) {
            axios.delete(`http://localhost:3000/USERS/${id}`)
                .then(
                    () => {
                        console.log("Delete the data");
                        setData(prevData => prevData.filter(user => user.id !== id))
                    }
                )
                .catch(() => console.log("Error in data get delete"))
        }
    }


    // Pagination Logic
    const indexLastUser = currentPage * itemPerPage;
    const indexFirstUser = indexLastUser - itemPerPage;
    const currentUsers = data.slice(indexFirstUser, indexLastUser)


    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
            <h1>List Of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end">
                    <Link to='/create' className='m-3 btn btn-success'>Add +</Link>
                </div>
                <div className="container">
                    <table className="table table-bordered">
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
                                currentUsers.map((d, i) => (
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td>{d.email}</td>
                                        <td>{d.phone}</td>
                                        <td>
                                            <Link to='/read' state={{ d }} className="btn btn-sm btn-primary me-2">Read</Link>
                                            <Link to='/update' state={{ d }} className="btn btn-sm btn-warning me-2">Edit</Link>
                                            <button onClick={event => handleDelete(d.id)} className="btn btn-sm btn-danger">Del</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page navigation example" className="mt-3">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <button onClick={()=>setCurrentPage(currentPage -1)} className="page-link">Previous</button></li>
                        {
                            Array.from({length: Math.ceil(data.length / itemPerPage)}, (_,index)=>(
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active':''}`}>
                                    <button onClick={()=>setCurrentPage(index+1)} className="page-link">
                                        {index+1}
                                    </button>
                                </li>
                            ))
                        }
                        <li className={`page-item ${currentPage === Math.ceil(data.length / itemPerPage) ? "disabled" : ""}`}>
                        <button onClick={()=>setCurrentPage(currentPage + 1)} className="page-link">Next</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );


}

export default Home