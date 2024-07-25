import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center poppins-regular"
        style={{ backgroundImage: 'url(/HeroBg.webp)' }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="absolute left-10">
          <h2 className="text-4xl font-bold text-[#3BC020] mb-4">Your Perfect Resume, One Job at a Time!</h2>
          <button className="bg-[#28EB00] text-white py-4 px-8 rounded text-lg border-none font-bold">Create it!</button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold underline mb-4">About Us</h1>
          <div className='max-w-[400px] mx-auto'>
            <img src="https://via.placeholder.com/400" alt="About Us" className="mb-4" />
          </div>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec vestibulum risus, nec varius mi. Nulla facilisi.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="h-screen bg-gray-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold underline mb-4">Services</h1>
          <div className='max-w-[400px] mx-auto'>
            <img src="https://via.placeholder.com/400" alt="Services" className="mb-4" />
          </div>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec vestibulum risus, nec varius mi. Nulla facilisi.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
