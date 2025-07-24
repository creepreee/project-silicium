import { Link } from 'react-router-dom';
const Home = () => {
  return <div className="min-h-full">
      {/* Top section with default background */}
      <div className="bg-background p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Project Silicium</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building UEFI firmware for ARM-based mobile devices, running Windows 10/11 and Linux 
              on smartphones and tablets.
            </p>
          </div>
        </div>
      </div>
      {/*on the list*/}
      {/* Gradient blend from background to white */}
      {/*<div className="bg-gradient-to-b from-background to-white h-32"></div>*/}

      {/* Bottom section with white background */}
    <div className="bg-white p-8">
	<section className="py-20 px-6 space-y-24">
  {/* Section 1 */}
  <div className="flex flex-col md:flex-row items-center md:space-x-10">
   <img src="/project-silicium/windows.png" className="w-[400px] h-[400px] rounded-lg shadow-lg" />
    <div className="mt-6 md:mt-0">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
  	Windows On ARM
     </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto text-center">
  Boot Windows and Linux directly on ARM phones and tablets with our community-driven UEFI builds and give it a whole new life 🌟</p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-10">
    <img src="/project-silicium/UEFI.png" className="w-[400px] h-[400px] rounded-lg shadow-lg" />
    <div className="mt-6 md:mt-0">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
  	True UEFI Experience for Mobile Devices
     </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto text-center">
        Project Silicium is an open-source initiative that brings desktop-grade UEFI to smartphones and tablets — unlocking support for Windows, Linux, and beyond.
  </p>
    </div>
  </div>
 {/* Section 3 */}
  <div className="flex flex-col md:flex-row items-center md:space-x-10">
   <img src="/project-silicium/phones2.jpg" className="w-[600px] h-[400px] rounded-lg shadow-lg" />
    <div className="mt-6 md:mt-0">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
  	Is Your Device Supported?
     </h2>
      <p className="text-lg text-gray-700 max-w-xl mx-auto text-center">
  Curious whether your phone or tablet works with our UEFI builds? Check the{' '}
  <Link to="/devices" className="text-blue-600 hover:underline">
    Devices Status
  </Link>{' '}
  page for up-to-date compatibility info and status of your device.
</p>

    </div>
  </div>
   {/* Section 4 */}
  <div className="flex flex-col items-center text-center mt-10">
  <img
    src="/project-silicium/support.png"
    className="w-[200px] h-[200px] rounded-lg shadow-lg"
    alt="Support Illustration"
  />
  <h2 className="text-3xl font-bold mt-6 text-gray-900">
   Always Here to Help — 24/7 Support
  </h2>
  <p className="text-lg text-gray-700 max-w-xl mt-2">
    Got questions, issues, or want to contribute? Our community and maintainers are available around the clock to assist and guide you through every step.
    Whether you’re a developer or a first-time user, our team and contributors are here around the clock to help you troubleshoot, explore, and succeed.
  </p>
</div>
</section>
      </div>
      <div className="bg-gray-900 py-10 w-full">
  <div className="flex justify-around items-center w-full max-w-screen-xl mx-auto">
    {/* Telegram */}
    <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer" className="px-4">
      <img src="/project-silicium/telegram.png" alt="Telegram" className="w-16 h-16 rounded-full" />
    </a>

    {/* Discord */}
    <a href="https://discord.com/invite/Dx2QgMx7Sv" target="_blank" rel="noopener noreferrer" className="px-4">
      <img src="/project-silicium/Discord.png" alt="Discord" className="w-16 h-16 rounded-full" />
    </a>

    {/* GitHub */}
    <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="px-4">
      <img src="/project-silicium/github.png" alt="GitHub" className="w-16 h-16 rounded-full" />
    </a>
  </div>
</div>
    </div>;
};
export default Home;
