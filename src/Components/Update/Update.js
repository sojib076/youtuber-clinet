import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import DynamicTitle from '../../Hook/DynamicTitle';

const Update = () => {
    // DynamicTitle('')
    DynamicTitle(' Update ')
    const notify = (info) => toast(info);
    const loader = useLoaderData()
    console.log(loader);
    const { servicename, review, _id } = loader
    const [update, setupdate] = useState(' ')

    const blur = (info) => {
        setupdate(info.target.value)
    }
/// this handel update
    const handelupdate = (id) => {
        fetch(`https://youtuber-server-sojib076.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "review": update })
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    notify('Update Successfully')
                }
            })
    }
    // This is the for the update form
    return (
        <div>
            <div >
                <h1>Update</h1>
                <div className='w-[90%] mx-auto '>
                    <h1 className='text-3xl'>{servicename}</h1>

                    <div className='flex flex-col'>
                        <textarea className="textarea  border-x-stone-200" placeholder="Bio" onBlur={blur} defaultValue={review}></textarea>
                        <button onClick={() => handelupdate(_id)} className='btn btn-success mt-10'> Update</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Update;