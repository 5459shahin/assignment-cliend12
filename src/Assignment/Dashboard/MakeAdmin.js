import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Loading/Loading';

const MakeAdmin = () => {
    const [users, setUsers] = useState([ ]);
    useEffect(() => {
        fetch('https://radiant-everglades-78330.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    console.log(users);
    return (


        <div>

             <div className="overflow-x-auto mt-6">
            <table className="table w-full">
             
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {users.length === 0 ? <Loading className="justify-self-center " /> : ""}
                        {users.map(user => <div
                    key={user._id}
                    user={user}

                ></div>)
                }

                    {
                       
                         users?.map((user, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                {/* <td>{
                                    !user.role && <button onClick={() => handleAdmin(user.email)} className='btn btn-primary'>Make Admin</button>
                                }</td>
                                <td><button onClick={() => handleDelete(user.email)} className='btn btn-primary'>Delete</button></td>  */}

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div> 
        </div>
    );
};

export default MakeAdmin;