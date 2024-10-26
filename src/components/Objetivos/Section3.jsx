import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Carrossel1 from '../Carrossel1/Carrossel1.jsx'
import Carrossel2 from '../Carrossel2/Carrossel2.jsx'
import Carrossel3 from '../Carrossel3/Carrossel3.jsx'


const Section3 = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div id="objetivos">
             <Carousel 
            responsive={responsive} // muita atenção a essa propriedade. É ela que diz qual será o tamanho/quantos itens por tela no carrossel
            autoPlay={false}
            autoPlaySpeed={2000}
            transitionDuration={500}
            showDots={false}
         >
            {/* Todas as sections que deseja colocar, é só adicionar embaixo */}
            <Carrossel1 />
            <Carrossel2 />
            <Carrossel3 />
        </Carousel>
        </div>
        
    
    )
}

export default Section3;