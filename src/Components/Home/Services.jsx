/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Card from '@Components/Home/Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Services = ({ services }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Detecta el tamaño de pantalla
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768); // Cambia a `true` en pantallas menores a 768px
        window.addEventListener('resize', handleResize);
        handleResize(); // Ejecuta una vez para verificar al cargar

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Configuración del carrusel
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section id="services" className="flex items-center justify-start p-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-white poppins-regular text-left">Services</h1>
          <div className='flex gap-x-3'>
            {services.map((service, index) => (
              <Card key={index} title={service.title} content={service.content} />
            ))}
          </div>
        </div>
      </section>

    );
};

export default Services;
