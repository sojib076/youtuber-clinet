import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => {
    return (
        <div className='w-90% '>
             <ReactLoading type={type} color={color} height={100} width={200} className="mx-auto mb-32" />
        </div>
    );
};

export default Loading;