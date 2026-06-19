"use client"

export default function Navbar() {
 return (
  <nav className="
  fixed top-0 left-0 right-0 z-50
  glass
  px-8 py-4">

   <div className="flex justify-between items-center">

    <div className="pixel text-sm">
      DESIGN.EXE
    </div>

    <div className="flex gap-6">
      <a href="#about">Обо мне</a>
      <a href="#portfolio">Кейсы</a>
      <a href="#services">Услуги</a>
      <a href="#contact">Контакты</a>
    </div>

   </div>

  </nav>
 )
}