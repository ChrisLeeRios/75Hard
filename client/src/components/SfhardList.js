import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


// Change all persons and people and params from dot notation to match current project
const SfhardList = (props) => {

    const { removeFromDom } = props;

    const deleteSfhard = (_Id) => {
        axios.delete(`http://localhost:8000/api/sfhards/${_Id}`)
            .then(res => {
                removeFromDom(_Id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='w-100 mx-auto' >
            <div className='d-flex align-items-center justify-content-center gap-5' >
                <h1>Meals</h1>
                <Link to={`/sfhards/create`}>
                    <button className='btn-primary' >Add Meal</button>
                </Link>
            </div>
            <hr />
            {props.sfhards.map((sfhard, i) =>
                <div className='justify-content-center mb-4 d-flex gap-4' key={i} >
                    <img
                        className="shadow rounded"
                        width="10%"
                        src={sfhard.imgUrl}
                        alt="Welp, no pic here bud"
                    />
                    <div className='text-center' >
                        <h3>{sfhard.title}</h3>
                        {/* <p>Price: {sfhard.price}</p>
                    <p>Description: {sfhard.description}</p>
                    <p>Expiration Date: {sfhard.cal}</p> */}
                        {/* {sfhard.isGlutenFree === true && <p>This Is GlutenFree</p>}
                    {sfhard.isGlutenFree !== true && <p>This Is Not Gluten Free</p>} */}
                        <div className='d-flex gap-1 justify-content-center' >
                            {/* <Link to={`/sfhards/${sfhard._id}/edit`}>
                        <button className='btn-warning' >Edit</button>
                    </Link> */}
                            <Link to={`/sfhards/${sfhard._id}`}>
                                <button className='btn-primary' >View Meal</button>
                            </Link>
                            <button className='btn-danger' onClick={(e) => { deleteSfhard(sfhard._id) }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SfhardList;