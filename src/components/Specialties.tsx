import Newzealandspecialist from "./Newzealandspecialist";

const Certificate = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg mb-6">
            🎖️ Official Recognition
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">
                Certificate of Excellence
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">Recognized for outstanding service and expertise</p>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-5xl group">
            {/* Enhanced glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-amber-400/20 via-orange-400/30 to-red-400/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-300/30 via-orange-300/40 to-red-300/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Certificate container with parchment-style background */}
            <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-200/50 transform transition-all duration-500 hover:scale-[1.03]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 via-amber-100/40 to-orange-100/30"></div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-400 rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400 rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400 rounded-br-2xl"></div>
              
              <div className="relative z-10 rounded-2xl m-6">
                <img
                  src="/images/certificate.jpg"
                  alt="Certificate"
                  className="object-contain rounded-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Specialties = () => {
  return (
    <>
      {/* Gold Partner Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block">
              <div className="mb-4">
                <span className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg">
                  ✨ Official Partnership
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Authorized New Zealand
                </span>
                <span className="block text-5xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mt-3">
                  Gold Partner ⭐
                </span>
              </h2>
              <div className="flex justify-center gap-2 mt-8">
                <div className="w-16 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <div className="w-16 h-1.5 bg-gradient-to-r from-amber-500 to-red-500 rounded-full"></div>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl group">
              {/* Multi-layer glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-400/20 via-pink-400/30 to-blue-400/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Specialist badge container with enhanced background */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-transparent transform transition-all duration-500 hover:scale-[1.03]" style={{ 
                backgroundImage: 'linear-gradient(white, white), linear-gradient(145deg, #667eea, #764ba2, #f093fb)', 
                backgroundOrigin: 'border-box', 
                backgroundClip: 'padding-box, border-box' 
              }}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-pink-100/30 to-blue-100/50"></div>
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(252, 231, 243, 0.2) 0%, transparent 50%)'
                }}></div>
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate section */}
      <Certificate />

      {/* Specialties Grid Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg mb-6">
              🌟 What We Offer
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Our Specialties
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-4">Curated experiences for unforgettable journeys</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.03] border-2 border-blue-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transform group-hover:rotate-6 transition duration-500">
                  <span className="text-white text-3xl">🏔️</span>
                </div>
                <h3 className="font-bold text-2xl text-center mb-3 text-gray-800">Adventure Tours</h3>
                <p className="text-gray-600 text-center leading-relaxed">Experience thrilling adventures across breathtaking landscapes</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.03] border-2 border-teal-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transform group-hover:rotate-6 transition duration-500">
                  <span className="text-white text-3xl">🌊</span>
                </div>
                <h3 className="font-bold text-2xl text-center mb-3 text-gray-800">Coastal Experiences</h3>
                <p className="text-gray-600 text-center leading-relaxed">Explore stunning coastlines and pristine beaches</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-[1.03] border-2 border-purple-200/50">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transform group-hover:rotate-6 transition duration-500">
                  <span className="text-white text-3xl">🏛️</span>
                </div>
                <h3 className="font-bold text-2xl text-center mb-3 text-gray-800">Cultural Tours</h3>
                <p className="text-gray-600 text-center leading-relaxed">Discover rich heritage and ancient traditions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newzealandspecialist component */}
      <Newzealandspecialist />
    </>
  );
};

export default Specialties;