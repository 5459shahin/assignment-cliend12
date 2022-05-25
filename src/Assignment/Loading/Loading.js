import React from 'react';
import loading from '../../img/preview.gif'

const Loading = () => {
    return (
        <div className='h-screen flex justify-center justify-items-center'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;