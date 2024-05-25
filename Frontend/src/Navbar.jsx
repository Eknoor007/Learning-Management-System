import React from 'react'
import style from './CSS Module/Style.module.css';
import { Link } from 'react-router-dom';
import icon from './assets/EaselearningIcon.png'

export default function Navbar() {
    return (
        <>
            <nav class={`${style.navbar} p-2`}>
                <div class="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a className="navbar-brand" href="#">
                        <img src={icon} alt="Easelearning" />
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
                                <li><Link class="dropdown-item" to="#">My Favourites</Link></li>
                                <li><Link class="dropdown-item" to="#">Contact us</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link class="dropdown-item" to="/">Sign  Out</Link></li>
                            </ul>
                </div>
                </div>
            </nav>
        </>
    )
}
