import Container from "./Components/Container";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <div className="min-h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0"></div>
      <Container>
        <Navbar />
        <HeroSection />
      </Container>
      <div className="relative w-full">
        <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r pointer-events-none"></div>
        <div className="max-w-5xl mx-auto rounded-lg p-2 mt-12">
          <img
            src="/public/hero-ui-v5.webp"
            alt=""
            width={800}
            height={800}
            className="rounded-2xl w-full object-cover object-left-top border-neutral-200 shadow-md mask-b-from-20% to-40%"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
