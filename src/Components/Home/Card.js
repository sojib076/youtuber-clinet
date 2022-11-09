import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ product }) => {
    const { name, description, price, _id, img } = product
    return (
        <div>
            <div className="card lg:w-96 w-50 lg:h-[300px]shadow-xl bg-cyan-700 mt-10">
                <figure className="px-10 pt-10">     
                    <PhotoProvider>
                        <PhotoView src={img}>
                        <img src={img} alt={name} className=" w-[300px] h-[170px]  lg:w-[400px] lg:h-[180px]" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text"> ${price}</p>
                    <p className='text-ellipsis'>{description.slice(0,100)}...</p>

                    <div className="card-actions">
                        <Link to={`/details/${_id}`} className='btn btn-primary'> Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;