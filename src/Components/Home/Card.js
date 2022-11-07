import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({dnt}) => {
    const {_id,name,img}=dnt
    return (
        <div>
            <div className="card lg:w-96 w-50 bg-blue-600 shadow-xl mt-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className=" w-50 h-50" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                       <Link to={`/checkout/${_id}`} className='btn btn-primary'> Donate Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;