function Navbar() {
  const links = [
    {
      title: "Guide",
      href: "#guide",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "Login",
      href: "#login",
    },
  ];

  return (
    <div className="flex items-center justify-between py-4 px-4">
      <img src="/fintaLogo.svg" width={70} height={70} alt="Finta Logo" />

      <div className="flex items-center gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-neutral-800 font-medium hover:text-neutral-600 transition duration-200"
          >
            {link.title}
          </a>
        ))}

        <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-white font-medium shadow-lg">
          Start free trial
        </button>
      </div>
    </div>
  );
}

export default Navbar;
