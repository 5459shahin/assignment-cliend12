import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [services, setServices] = useState([]);
    console.log(services);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data),
            console.log(setServices));
            
    }, [])

    return (
        <div className='my-10'>
            <h3>items : {services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                
                {
                    services.map(service => <Item
                        key={service._id}
                        service={service}
                        
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;