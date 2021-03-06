import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-center mt-4 text-purple-500'>Welcome to Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side shadow-xl">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        user && <li><Link to="/dashboard/myorders">My Orders</Link></li>
                    }
                    {
                        user && <li><Link to="/dashboard/addreview">Add a Review</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/admin">Make Admin</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/manageorders">Manage All orders</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    }
                    {
                        admin && <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;