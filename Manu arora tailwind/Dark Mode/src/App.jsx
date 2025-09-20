import { useEffect } from "react";

function App() {
  const icons = [
    { title: "Codex", size: "w-8 h-8", icon: "main_logo.gif" },
    { title: "Codex", size: "w-12 h-12", icon: "main_logo.gif" },
    { title: "Codex", size: "w-16 h-16", icon: "main_logo.gif" },
    { title: "Codex", size: "w-12 h-12", icon: "main_logo.gif" },
    { title: "Codex", size: "w-8 h-8", icon: "main_logo.gif" },
  ];

  // Toggle theme
  const handleThemeChange = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-background text-foreground flex justify-center items-center">
      <div className="h-80 w-60 bg-background text-foreground shadow-2xl border border-neutral-300 dark:border-neutral-700 rounded-xl overflow-hidden">
        
        {/* Icon row */}
        <div className="flex items-center gap-4 justify-center h-40 rounded-t-xl animate-marque">
          {icons.map((icon, index) => (
            <div key={index}>
              <img
                src={icon.icon}
                className={`${icon.size} rounded-full bg-black object-cover`}
                alt={icon.title}
              />
            </div>
          ))}
        </div>

        {/* Heading */}
        <h2 className="font-bold text-[12px] px-2">
          These LLMs are getting out of hand
        </h2>

        {/* Paragraph */}
        <p className="text-[10px] px-2 mt-2 line-clamp-5">
          I swear to god there's another AI dropping and twitter goes crazy. 
          It's a myth. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Button */}
        <button
          onClick={handleThemeChange}
          className="px-2 py-0.5 rounded-2xl bg-foreground text-background text-[10px] mt-4 ml-2"
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
