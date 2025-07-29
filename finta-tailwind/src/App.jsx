import Container from "./Components/Container";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/NavBar";

function App() {
  return (
    <div className="min-h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]"> 
    <div className="absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent to-neutral-200"></div>
    <div className="absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-300/50 via-neutral-200 to-transparent to-neutral-200"></div>
      <Container>
        <Navbar />
        <HeroSection/>
      </Container>
    </div>
  );
}

export default App;
