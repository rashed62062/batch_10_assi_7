import img from '../../assets/banner-main.png';
import banner from '../../assets/bg-shadow.png'; // Your background image

export default function Banner({ onAddBalance }) {
  return (
    <div 
      className='relative bg-gray-950 px-5 md:px-20 rounded-lg py-7 shadow-lg' 
      style={{
       
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className='p-5 rounded-lg flex justify-center relative z-10'>
        <img className='mx-auto h-auto w-auto max-w-full' src={img} alt="Banner" />
      </div>
      <div className=' text-center relative z-10'>
        <h1 className='text-white text-2xl md:text-3xl font-bold mb-2'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='mb-4 text-gray-100'>Beyond Boundaries Beyond Limits</p>
        <div className='rounded-lg'>
          <button 
            onClick={onAddBalance} 
            className='font-medium border border-[#E7FE29] bg-[#E7FE29] text-black px-6 py-3 rounded-lg transition duration-300 hover:bg-transparent hover:text-[#E7FE29] hover:border-2'
            aria-label="Claim Free Credit"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}
