export default function NavBar() {
  return (
    <nav className="z-30 fixed backdrop-blur-lg w-full border-b-2 border-gray-900 h-16 sm:h-20 flex flex-row items-center justify-between px-6 sm:px-16 md:px-40">
      {/* Logo Section */}
      <div className="text-xl sm:text-2xl font-bold">Tenneyen</div>

      {/* Navigation Links */}
      <div className="flex flex-row justify-between gap-4 sm:gap-8 md:gap-10 font-bold text-sm sm:text-base md:text-lg">
        <a href="#home" className="hover:text-blue-950">Home</a>
        <a href="#about" className="hover:text-blue-950">About</a>
        <a href="#contact" className="hover:text-blue-950">Contact</a>
      </div>
    </nav>
  );
}
