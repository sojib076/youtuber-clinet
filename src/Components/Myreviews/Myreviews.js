import React, { useContext, useEffect, useState } from 'react';
import { Authcontex } from '../../AllContex/Usercontex';
import Reviewcard from './Reviewcard';
import { ToastContainer, toast } from 'react-toastify';
import DynamicTitle from '../../Hook/DynamicTitle';
const Myreviews = () => {
    DynamicTitle('My Reviews')

    const notify = (info) => toast(info);
    const { user } = useContext(Authcontex)
 
    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch(`https://youtuber-server-ten.vercel.app/userreviews?email=${user?.email}`,{
            headers: { 
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [user?.email])

    const handeldelt = (id) => {
        fetch(`https://youtuber-server-ten.vercel.app/reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
              
                if (result) {
                    notify('Deleted Successfully')
                    
                }

                const newreview = reviews.filter(review => review._id !== id)
                setreviews(newreview)  
             })
    }



    
    return (
        <div>
            {
                reviews?.length === 0 ?
                    <div className='text-center text-4xl text-red-500 '>No Reviews Found</div> :
                    <div className='lg:grid lg:grid-cols-3 grid grid-cols-1'> 
                       { reviews.map(Review => <Reviewcard Review={Review} handeldelt={handeldelt}></Reviewcard>)}
                    </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Myreviews;