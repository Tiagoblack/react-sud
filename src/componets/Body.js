import React from "react";
import '../App.css';

import Img4 from '../assets/img/img4.jpeg';


const Body = ()=>{


return(
    <div className="container-geral">
        <div className="main">
            <h1>Jesus Cristo vive</h1>
            <p>Assista a um nono vídeo Páscoa  e explore o que é possível #GraçaAEle</p>
        </div>
        <div className="hero">
            <div className="hero-jesus">
                <span>Conferẽncia geral</span>
                <h2>Veja ou leia  mensagens inspiradoras  sobre Jesus Cristo</h2>
                <p >Texto agora disponível da conferência geral de abril </p>               
            </div>
            <div className="hero-profeta">
                <div className="hero-message message-1" >
                    <span>semana de Páscoa</span>
                    <h4>Explore a semana final do ministério de jesus na mortalidade</h4>
                </div>
                <div className="hero-message message-2" >
                    <span>Presidente  Russsel M. Nelson</span>
                    <h4> O que  o profeta disse  na conferência?</h4>
                </div>
            </div>
        </div>
        <div className="container-anuncio">
            <div className="anuncio">
                <div className="container-img">
                    <img src={Img4}/>
                </div>
                <a>
                Lição semanal do “Vem, e Segue-Me” para o estudo do evangelho no lar
                </a>
            </div>
            <div className="anuncio">
                <div className="container-img">
                    <img src={Img4}/>
                </div>
                <a>
                O presidente e a irmã Nelson vão compartilhar uma mensagem para os jovens adultos em maio
                </a>
            </div>
            <div className="anuncio">
                <div className="container-img">
                    <img src={Img4}/>
                </div>
                <a>
                Assista a um concerto especial de Páscoa do Tabernacle Choir
                </a>
            </div>
            <div className="anuncio">
                <div className="container-img">
                    <img src={Img4}/>
                </div>
                <a>
                Resumo dos discursos da sessão das mulheres                </a>
            </div>
        </div>

        <div className="container-nav">
            <div className="container-space">
                <span>Links Rápidos</span>
                <div className="space-link"></div>
            </div>
            <div className="container-space-mobile">
                <div className="space"></div>
                <span>Links Rápidos</span>
                <div className="space"></div>
            </div>

            <div className="container-link">
                <div className="links">
                    <a>Conferência Geral</a>
                    <a>Sobre os templos</a>
                    <a>FamilySearch.org</a>
                    <a>Uma Proclamação do Bicentenário ao Mundol</a>
                    <a>Revistas</a>
                </div>
                <div className="links">
                    <a>Vem, e Segue-Me</a>
                    <a>Revistas</a>
                    <a>Crianças e Jovens</a>
                    <a>Biblioteca de Mídial</a>
                </div>
                <div className="links">
                    <a>Notícias</a>
                    <a>Eventos mundiais da Igreja</a>
                    <a>FamilySearch.org</a>
                    <a>Localizador de capelas</a>
                    <a>Encontre um templo</a>
                </div>
                <div className="links">
                    <a>Online Store</a>
                    <a>Calendário de Estaca e Ala</a>
                    <a>FamilySearch.org</a>
                    <a>Diretório de Estaca e Ala</a>
                    <a>Dia do Senhor</a>
                </div>
            </div>
        </div>

    </div>
);
}
export default Body;