import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [sfhard, setSfhard] = useState({}) // Change this line
    const { _id } = useParams();
    const navigate = useNavigate();

    // Change these lines to match current project route and states
    useEffect(() => {
        axios.get(`http://localhost:8000/api/sfhards/${_id}`)
            .then(res => setSfhard(res.data))
            .catch(err => console.error(err));
    }, [_id]);

    const deleteSfhard = (_Id) => {
        axios.delete(`http://localhost:8000/api/sfhards/${_Id}`)
            .then(res => {
                // removeFromDom(_Id)
                navigate(`/sfhards`)
            })
            .catch(err => console.error(err));

    }

    // Change these lines to match current project route and states
    return (
        <div className='w-100 mx-auto' >
            <div className='d-flex align-items-center justify-content-center gap-5' >
                <h1>{sfhard.title}</h1>
                <Link to={`/sfhards`}>
                    <button className='btn-primary' >Meals</button>
                </Link>
            </div>
            <hr />
            <div className='d-flex gap-5 justify-content-center'>
                <div>
                    <img
                        className="shadow rounded"
                        width="100%"
                        src={sfhard.imgUrl}
                        alt="Welp, no pic here bud"
                    />
                    <h2>"{sfhard.description}"</h2>
                </div>
                <div>
                    <h2>Details</h2>
                    <p>Calories: {sfhard.cal}</p>
                    <p>Price: {sfhard.price}</p>
                    {sfhard.isGlutenFree === true && <p>Peg Leg: Yes</p>}
                    {sfhard.isGlutenFree !== true && <p>Peg Leg: No</p>}
                    {sfhard.isSugarFree === true && <p>Eye Patch: Yes</p>}
                    {sfhard.isSugarFree !== true && <p>Eye Patch: No</p>}
                    {sfhard.isTasty === true && <p>Hook Hand: Yes</p>}
                    {sfhard.isTasty !== true && <p>Hook Hand: No</p>}
                    <div className='d-flex gap-1 justify-content-center' >
                        {/* <Link to={`/sfhards/${sfhard._id}/edit`}>
                            <button className='btn-warning' >Edit</button>
                        </Link> */}
                        {/* <Link to={`/sfhards/${sfhard._id}`}>
                    <button className='btn-primary' >Details</button>
                </Link> */}
                        <Link to={`/sfhards`} >
                            <button className='btn-primary '>Home</button>
                        </Link>
                        <button className='btn-danger' onClick={(e) => { deleteSfhard(sfhard._id) }}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;