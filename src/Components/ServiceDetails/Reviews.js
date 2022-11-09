import React from 'react';


const Reviews = ({ rev }) => {
    const { email, img, name, review } = rev
    return (
        <div className=' '>

                    <div className=" break-words bg-white shadow-xl shadow-black mt-20">
                        <div className="h-24 w-24">
                            <img src={img} alt="" className="rounded-full 
                          object-cover h-full w-full shadow-m
                          mx-auto" />
                        </div>
                        <div className=" text-gray-700 uppercase text-center py-3 px-6 mb-0">
                            {name}
                            <p className='text-center'>{email}</p>
                        </div>

                        <p className="text-black">
                            {review}
                        </p>
                    </div>
              
     


        </div>
    );
};

export default Reviews;