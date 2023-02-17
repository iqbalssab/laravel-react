import { Link } from "@inertiajs/react";
import React from "react";

const Navbar = ({ user }) => {
    console.log("props : ", user);
    return (
        <div className="navbar bg-success">
            <div className="flex-1">
                <a className="btn btn-primary normal-case text-xl">Homepage</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    {!user ? (
                        <>
                        <label
                                tabIndex={0}
                                className="btn btn-primary"
                        >
                            Guest
                            </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
                            >
                                <li>
                                    <Link href={route('login')} as="button">Login</Link>
                                </li>
                                <li>
                                    <Link href={route('register')} as="button">Register</Link>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <label
                                tabIndex={0}
                                className="btn btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img src="https://source.unsplash.com/40x40?avatar" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black"
                            >
                                <li>
                                    <Link href={route('dashboard')} as="button" className="justify-between">
                                        Dashboard
                                        <span className="badge badge-primary">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link href={route('logout')} method="post" as="button">Logout</Link>
                                </li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
