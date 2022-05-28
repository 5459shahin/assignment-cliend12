import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

const Items = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
            
    }, [])

    return (
        <div className='my-10'>
            <h3>items : {services.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                
                {services.length === 0 ? <Loading className="justify-self-center "/> : ""}
                {services/* .slice(0, 6) */.map(service => <Item
                        key={service._id}
                        service={service}
                        
                    ></Item>)
                }
            </div>

        </div>
    );
};

export default Items;