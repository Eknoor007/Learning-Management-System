import React from 'react'
import style from './CSS Module/Style.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav class={`${style.navbar} p-4`}>
                <div class="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a className="navbar-brand" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="lightblue" className="bi bi-easel2-fill" viewBox="0 0 16 16">
                            <path d="M8.447.276a.5.5 0 0 0-.894 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.809z" />
                            <path fillRule="evenodd" d="M.5 11a.5.5 0 0 0 0 1h2.86l-.845 3.379a.5.5 0 0 0 .97.242L3.89 14h8.22l.405 1.621a.5.5 0 0 0 .97-.242L12.64 12h2.86a.5.5 0 0 0 0-1zm3.64 2 .25-1h7.22l.25 1z" />
                        </svg>
                    </a>
                    <span className="mx-3 font-bold text-xxl text-white">EaseLearning</span>
                </div>
                <div className="relative">
                <a className="nav-link" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{ marginLeft: 1000 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </a>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="#">Profile</Link></li>
                                <li><Link class="dropdown-item" to="#">My Learning</Link></li>
                                <li><Link class="dropdown-item" to="#">My Wishlist</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to="/">Sign  Out</Link></li>
                            </ul>
                </div>
                </div>
            </nav>
        </>
    )
}
