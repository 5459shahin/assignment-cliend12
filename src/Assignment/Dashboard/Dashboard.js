import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet> </Outlet>

                </div>
                <div className="drawer-side">
                    <label for="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                        <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                        <li><Link to="/dashboard/updateItem">Add Item</Link></li>
                        <li><Link to='/dashboard/review'>Review</Link></li>
                        <li><Link to='/dashboard/adminPanel'>Admin Panel</Link></li>
                        <li><Link to='/dashboard/make-admin'>Make Admin</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;