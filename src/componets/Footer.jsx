import React from 'react'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='container_img-logo'>
                    <img loading="lazy" src="https://assets.ldscdn.org/5c/63/5c633a2c6b0aca861f5f84fce422174c7d5a7b65/5c633a2c6b0aca861f5f84fce422174c7d5a7b65.png" alt="Christus Symbol"></img>
                </div>
                <div className='footer-infor'>
                    <div className='container_nav-footer'>
                        <a>Mapas</a>
                        <a>Comentarios</a>
                        <a>Empregos</a>
                        <a>Ajuda</a>
                    </div>
                    <div className='container-media'>
                        <i class="fa-brands fa-facebook-square"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <a>Todas  as páginas de mídia social da igreja</a>
                    </div>
                    <div className='container-terms'>
                        <a>termo de uso (atualizado 2021-040-13)</a>
                        <div className='terms-pais'>
                            <a >Notificação de  privacidade - Brasil (atualizado em 2021-04-06)</a>
                            <a className='active'>Preferências de Cookies</a>
                        </div>
                        <a>2022 Intellectual Reserve, Inc. Todos direitos Reservados</a>
                    </div>
                </div>  
            </div>
        </div>
    )
}
