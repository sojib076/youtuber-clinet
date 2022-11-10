import React from 'react';
import { toast , ToastContainer } from 'react-toastify';
import DynamicTitle from '../../Hook/DynamicTitle';


const AddProduct = () => {
    DynamicTitle('Add A Services')
    const notify = () => toast(" Product Added Successfully");
    const  handelsubmit = (e) => {
        e.preventDefault()
        
        const product = {
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value,
            img: e.target.img.value,
        }

        fetch('https://youtuber-server-sojib076.vercel.app/addservices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data) { 
                    notify()
                }
                console.log(data)
         })
    }
    return (
        <div>
            <h1>add product</h1>
            <form className="card-body" onSubmit={handelsubmit}>
                <div className="form-control">
                    <input type="text" placeholder=" Your Product Name" className="input input-bordered" name='name' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Your Products Img" className="input input-bordered" name='img' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Your Products Price" className="input input-bordered" name='price' />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Your Products description" className="input input-bordered" name='description' />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success">Add Service</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddProduct;