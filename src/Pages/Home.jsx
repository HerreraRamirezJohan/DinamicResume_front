import services from '@Mooks/Services.json'
import aboutus from '@Mooks/Aboutus.json'
import Card from '@Components/Home/Card';
import Services from '@Components/Home/Services';
const Home = () => {
  return (
    <div className='bg-[#2C332B]'>
      {/* Home Section */}
      <section
        id="home"
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center poppins-regular"
        style={{ backgroundImage: 'url(/HeroBg.webp)' }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="absolute left-10">
          <h2 className="text-4xl font-bold text-[#3BC020] mb-4">Your Perfect Resume, One Job at a Time!</h2>
          <button className="bg-[#28EB00] text-white py-4 px-8 rounded text-lg border-none font-bold cursor-pointer">Create it!</button>
        </div>
      </section>

      {/* Services Section */}
      <Services services={services} />

      {/* About Us Section */}
      <section id="about" className="flex items-center justify-start p-10">
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold mb-4 text-white poppins-regular text-left">About Us</h1>
          <div className='flex gap-3 overflow-x-auto'>
            {aboutus.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
