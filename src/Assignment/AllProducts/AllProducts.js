/* import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../Hooks/useProduct';
import { MdDeleteForever } from 'react-icons/md';


const AllProducts = () => {
    const [service, setService] = useProduct();
    
    const navigate = useNavigate();

    const deleteItem = (id) => {
        const proceed = window.confirm('Are You delete the Cart');
        if (proceed) {
            const url = `https://radiant-everglades-78330.herokuapp.com/service/${id}`
            
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = service.filter(service => service._id !== id);
                    setService(remaining);
                })

        }

    }




    return (
        <div className="row container mx-auto all-products-container">
            <h1 className='text-center'>see All products</h1>

            {
                service.map(product =>

                    <div>


                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">name</th>
                                    <th scope="col">price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">supplier</th>

                                </tr>
                            </thead>
                            <tbody className='w-100'>
                                <tr>
                                    <td><img height={'50px'} width={'80px'} lassName="all-img" src={product.img} alt="" /></td>
                                    <td>{service.name}</td>
                                    <td>{service.price}</td>
                                    <td>{service.quantity}</td>
                                    

                                    <td> <p className='delete-btn text-center justify-content-end' onClick={() => deleteItem(product._id)}><MdDeleteForever /></p>
                                    </td>

                                </tr>
                            </tbody>
                        </table>


                    </div>

                )
            }
            <button className='bg-dark text-light' onClick={() => navigate('/addItem')}>Add Item</button>
        </div>
    );
};

export default AllProducts; */