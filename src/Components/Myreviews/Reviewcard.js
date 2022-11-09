import React from 'react';
import { Link } from 'react-router-dom';

const Reviewcard = ({ Review, handeldelt, }) => {
    const { review, _id, servicename } = Review

  



  

    return (

        <div className="card w-[90%]  bg-slate-600 shadow-xl">
            <div className="card-body">
                <h1>Service Name</h1>
                <h2 className="card-title"> {servicename}</h2>
                <p> <span >Your Review</span> : {review}</p>
                <p>  </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={() => handeldelt(_id)}>Detel</button>
                    <Link to={`/updateproduct/${_id}`} className='btn btn-secondary'>Update </Link>
                </div>
            </div>
            </div>


    );
};

export default Reviewcard;