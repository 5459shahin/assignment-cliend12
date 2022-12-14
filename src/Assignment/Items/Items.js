import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

const Items = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://radiant-everglades-78330.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className='my-10'>
            <h3 className='text=3xl font-bold'>Tools : {services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {services.length === 0 ? <Loading className="justify-self-center " /> : ""}
                {services.slice(0, 6).map(service => <Item
                    key={service._id}
                    service={service}

                ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;