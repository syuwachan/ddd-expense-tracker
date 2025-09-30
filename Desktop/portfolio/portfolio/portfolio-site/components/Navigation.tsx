'use client'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = () => {

  return (
    <nav className="fixed w-full top-0 left-0 right-0 z-50  bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className=" mx-auto px-10 py-2.5 flex justify-around items-center h-24">
        {/* Logo */}
        <div className="text-gray-900 text-2xl font-bold mx-10">Asuka K</div>

     <ul className="flex gap-8">
  {navItems.map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="text-gray-600 hover:text-gray-900 py-2.5 rounded-md text-sm font-medium transition-colors"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>

 </div>

    </nav>
  )
}

export default Navigation
