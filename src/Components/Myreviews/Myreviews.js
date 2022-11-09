import React, { useContext, useEffect, useState } from 'react';
import { Authcontex } from '../../AllContex/Usercontex';
import Reviewcard from './Reviewcard';
import { ToastContainer, toast } from 'react-toastify';
const Myreviews = () => {
    const [update, setupdate] = useState('')
    const notify = (info) => toast(info);

    const { user,loading } = useContext(Authcontex)
 
    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch(`https://youtuber-server-ten.vercel.app/userreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [update])

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


    function handelblur(data) {
        setupdate(data.target.value);
    }

    const handelupdate = (id) => {
        fetch(`https://youtuber-server-sojib076.vercel.app/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "review": update })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    notify('Updated Successfully')
                }
            })
    }

    return (
        <div className='lg:grid lg:grid-cols-3'>
            {
                reviews?.length === 0 ?
                    <div className='text-center text-4xl text-red-500'>No Reviews Found</div> :
                    reviews.map(Review => <Reviewcard Review={Review} handeldelt={handeldelt} handelblur={handelblur} handelupdate={handelupdate}></Reviewcard>)
            }
            <ToastContainer />
        </div>
    );
};

export default Myreviews;