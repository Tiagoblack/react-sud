import React from "react";
import logo from '../name.sud.svg'

import svg from '../decorator.svg'
export const Header = ()=>{

    return(
        <div className="container-header">
            <div className="container-logo">
                <img src={logo}/>
            </div>
            <div className="nav-bar">
                <div>
                    <img src={svg}/>
                </div>
                <ul className="ul" >
                    <li>
                        Blibliotecas
                        <i class="fas fa-caret-down"></i>
                    </li>
                    <li>
                        Servir
                        <i class="fas fa-caret-down"></i>
                    </li>
                    <li>
                        Viver a Vida
                        <i class="fas fa-caret-down"></i>
                    </li>
                    <li>
                        Quem somos
                        <i class="fas fa-caret-down"></i>
                    </li>
                </ul> 

                <div className="nav-menu">
                    <div className="seacrch">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="mundi">
                        <i class="fa-solid fa-earth-americas"></i>  
                    </div>
                    <div className="menu">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div >|</div>
                    <div className="peson">
                        <i class="fa-solid fa-user-large"></i>
                    </div>

                </div>               
            </div>
        </div>
    )
}
