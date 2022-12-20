import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import './home.css'

const Card = ({ product }) => {
    const { name, description, price, _id, img } = product
    return (
        <div>
            {/* <div className="card lg:w-96 w-50 lg:h-[300px]shadow-xl bg-cyan-700 mt-10">
                <figure className="px-10 pt-10">     
  
                </figure>
                <div className="card-body items-center text-center">
                  
                  
                  

                    <div className="card-actions">
                       
                    </div>
                </div>
            </div> */}
            <div className="card mt-10 mx-auto !bg-[#E6CFAE]">
                <div className="card-img">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt={name} className=" w-[100%] h-[100%]" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="card-info">
                <h2 className="card-title text-black">{name}</h2>
                <p className='text-ellipsis text-black'>{description.slice(0,100)}...</p>
                </div>
                <div className="card-footer">
                    <p className="card-text text-black"> ${price}</p>
                    <div className="card-button">
                        <Link to={`/details/${_id}`} > Details</Link>
                    </div>
                </div></div>

        </div>
    );
};

export default Card;