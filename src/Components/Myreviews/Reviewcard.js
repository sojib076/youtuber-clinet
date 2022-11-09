import React, { useState } from 'react';

const Reviewcard = ({ Review, handeldelt,handelblur,handelupdate }) => {


    const { review, _id, servicename } = Review


    return (

        <div className="card w-96  bg-slate-600 shadow-xl">
            <div className="card-body">
                <h1>Service Name</h1>
                <h2 className="card-title"> {servicename}</h2>
                <p> <span >Your Review</span> : {review}</p>
                <p>  </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning" onClick={() => handeldelt(_id)}>Detel</button>
                    <label htmlFor="my-modal" className="btn">Update</label>
                </div>
            </div>
       
            

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form > 
                    <textarea className="textarea textarea-bordered" defaultValue={review} onBlur={handelblur}></textarea>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn" onClick={()=>handelupdate(_id)} >Yay!</label>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Reviewcard;