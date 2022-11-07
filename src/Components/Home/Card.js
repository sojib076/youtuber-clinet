import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    const {name,description,price,_id,img}=product
    return (
        <div>
            <div className="card lg:w-96 w-50 lg:h-[300px]shadow-xl bg-cyan-600 mt-10">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className=" w-[300px] h-[170px]  lg:w-[400px] lg:h-[180px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text"> ${price}</p>
                    <p>{description.slice(0,100)}...</p>

                    <div className="card-actions">
                       <Link to={`/details/${_id}`} className='btn btn-primary'> Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;