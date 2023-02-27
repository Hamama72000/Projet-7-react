import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";


export default function navbar() {
    return (
        <header>
                <img src={Logo} alt="logo kasa" className="logo" />
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="home" 
                            className={({ isActive }) => //sert à souligner le texte si je suis sur la page d'accueil
                                isActive
                                    ? "accueil_navbar active"
                                    : "accueil_navbar"
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="about"
                            className={({ isActive }) =>
                                isActive
                                    ? "about_navbar active"
                                    : "about_navbar"
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}