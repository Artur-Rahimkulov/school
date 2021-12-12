import React from 'react';
import MainSlider from './MainSlider';

function Index(props) {

    function setNewState() {
        props.props(true);
    }

    return (
        <main class="main container">
            {/* <section class="main__slider">
                <div class="main__slideItem">
                    <div class="slideItem__content">
                        <div class="slideItem__left">
                            <div class="slideItem__text">
                                <div class="slideItem__title">
                                    Курс по Frontend-разработке
                                </div>
                                <div class="slideItem__description">
                                    <p class="slideItem__descriptionLine">Компания Тензор набирает студентов
                                        на
                                        курс по Frontend-разработке.</p>
                                    <p class="slideItem__descriptionLine">На курсе Вы узнаете:</p>
                                    <ul class="slideItem__descriptionLine slideItem__descriptionLine_list">
                                        <li>что такое Frontend-разработка</li>
                                        <li>как работать с HTML и CSS</li>
                                        <li>познакомитесь с Javascript</li>
                                        <li>получите опыт в командной разработке</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="slideItem__right slideItem__btnsContainer">
                            <a onClick={setNewState} class="btn btn-primary link">ЗАПИСАТЬСЯ</a>
                        </div>
                    </div>
                    <div class="slideItem__background"></div>
                </div>
                <div class="main__slider-arrows arrows">
                    <div class="arrow arrow-prew">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.6264 10.3882C30.6414 8.68235 34.3723 10.8801 34.3421 14.344L34.1154 40.3238C34.0851 43.7878 30.3164 45.92 27.3316 44.1619L4.94584 30.9756C1.96107 29.2175 1.99886 24.8875 5.01386 23.1817L27.6264 10.3882Z" fill="white" stroke="#587AB0"></path>
                        </svg>
                    </div>
                    <div class="arrow arrow-next">
                        <svg width="49" height="47" viewBox="0 0 49 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9813 9.53742L43.5938 22.331C46.6088 24.0368 46.6466 28.3667 43.6619 30.1249L21.2761 43.3111C18.2913 45.0693 14.5226 42.937 14.4923 39.4731L14.2656 13.4933C14.2354 10.0293 17.9663 7.83161 20.9813 9.53742Z" stroke="#587AB0"></path>
                        </svg>
                    </div>
                </div>
            </section> */}
            <MainSlider
            props={setNewState}
            />
        </main>
    );
}

export default Index;
