

export default function NavBar () {
  return (
    <nav className="z-30  fixed backdrop-blur-lg w-screen border-b-2 border-gray-900 h-20 flex flex-row items-center justify-between pr-40 pl-40">

      <div className="text-2xl font-bold">Tenneyen</div>

      <div className="flex flex-row justify-between w-60 h-fit font-bold text-lg">

        <a href="#home" className=" hover:text-blue-950">Home</a>
        <a href="#about" className=" hover:text-blue-950">About</a>
        <a href="#contact" className=" hover:text-blue-950">Contact</a>

      </div>
    </nav>
  )
}