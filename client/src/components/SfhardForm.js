import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
const SfhardForm = () => {
    //keep track of what is being typed via useState hook
    // Change the use states to match current thingyyyyy

    const [title, setTitle] = useState(""); //Change this line
    const [cal, setCal] = useState(""); //Change this line
    const [price, setPrice] = useState(""); //Change this line
    const [description, setDescription] = useState(""); //Change this line
    const [imgUrl, setImgUrl] = useState(""); //Change this line
    const [isGlutenFree, setIsGlutenFree] = useState(true); //Change this line
    const [isSugarFree, setIsSugarFree] = useState(true); //Change this line
    const [isTasty, setIsTasty] = useState(true); //Change this line
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new sfhard
        // Change route and params to match current thingyyyy
        axios.post('http://localhost:8000/api/sfhards', {
            title,
            cal,
            price,
            description,
            imgUrl,
            isGlutenFree,
            isSugarFree,
            isTasty
        })
            .then((res) => {
                console.log(res)
                setTitle("");
                setPrice("");
                setDescription("");
                setImgUrl("");
                setCal("Captain");
                setIsGlutenFree(true);
                setIsSugarFree(true);
                setIsTasty(true);
                navigate("/sfhards")
            })
            .catch(err => {
                console.log(err)
                // Get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorArr = [];
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update title and price and description
    return (
        <div className='w-100 mx-auto' >
            <div className='d-flex align-items-center justify-content-center gap-5' >
                <h1>Add Meal</h1>
                <Link to={`/sfhards`}>
                    <button className='btn-primary' >Meals</button>
                </Link>
            </div>
            <hr />
        <form onSubmit={onSubmitHandler} className='w-50 mx-auto' >
            {/* To display the errors add this line below  */}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className='form-group' >
                <label>Meal Name</label><br />
                <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <div className='form-group' >
                <label>Calories</label><br />
                <input className='form-control' type="number" onChange={(e) => setCal(e.target.value)} value={cal} />
            </div>
            <div className='form-group' >
                <label>Image Url</label><br />
                <input className='form-control' type="text" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
            </div>
            <div className='form-group' >
                <label>Price</label><br />
                <input className='form-control' type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <div className='form-group' >
                <label>Ingredients</label><br />
                <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
            </div>
            <div className='form-group d-flex gap-2' >
            {isGlutenFree === true && <input checked className='form-check-input' type="checkbox" onChange={(e) => setIsGlutenFree(e.target.checked)} value={isGlutenFree} />}
            {isGlutenFree !== true && <input className='form-check-input' type="checkbox" onChange={(e) => setIsGlutenFree(e.target.checked)} value={isGlutenFree} />}
                <label>Gluten Free</label>
            </div>
            <div className='form-group d-flex gap-2' >
            {isSugarFree === true && <input checked className='form-check-input' type="checkbox" onChange={(e) => setIsSugarFree(e.target.checked)} value={isSugarFree} />}
            {isSugarFree !== true && <input  className='form-check-input' type="checkbox" onChange={(e) => setIsSugarFree(e.target.checked)} value={isSugarFree} />}
                <label>Sugar Free</label>
            </div>
            <div className='form-group d-flex gap-2' >
            {isTasty === true && <input checked className='form-check-input' type="checkbox" onChange={(e) => setIsTasty(e.target.checked)} value={isTasty} />}
            {isTasty !== true && <input  className='form-check-input' type="checkbox" onChange={(e) => setIsTasty(e.target.checked)} value={isTasty} />}
                <label>Tasty</label>
            </div>
            <div className='d-flex gap-1'>
                <Link to={`/sfhards`} >
                    <button className='btn btn-primary mt-1  '>Cancel</button>
                </Link>
                <input type="submit" className='btn btn-primary mt-1 '/>
                </div>
        </form>

        </div>
    )
}

export default SfhardForm;