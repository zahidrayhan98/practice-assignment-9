import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="">
                <div className="navbar bg-base-100 flex justify-between">
                    <div className="flex">
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl">Search&Gain</NavLink>
                    </div>
                    <div className="">
                        <ul className="menu menu-horizontal ">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "my-defaultNav-li" : isActive ? "my-activeNav-li" : "my-defaultNav-li"
                            } to="/">Home</NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "my-defaultNav-li" : isActive ? "my-activeNav-li" : "my-defaultNav-li"
                            } to="/statistics">Statistics</NavLink>
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "my-defaultNav-li" : isActive ? "my-activeNav-li" : "my-defaultNav-li"
                            } to="/appliedJobs">Applied Jobs</NavLink>
                        </ul>
                    </div>
                    <NavLink className={({ isActive, isPending }) =>
                        isPending ? "my-defaultNav-li" : isActive ? "my-activeNav-li" : "m-2 rounded-lg shadow-lg bg-[#7E90FE] text-slate-50 uppercase hover:bg-blue-400 cursor-pointer p-2"
                    } to="/blog">Blog</NavLink>
                </div>
            </div>
            {/* mobile */}
        </div>
    );
};

export default Header;