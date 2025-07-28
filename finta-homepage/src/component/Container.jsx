import Navbar from "./Navbar";
import HeroComponent from "./HeroComponent";

function Container() {
  return (
    <div className="container">
      <div className="layout-lines-container">
        <div className="left-line"></div>
        <div className="right-line"></div>
      </div>

      <Navbar />
      <HeroComponent />

      <div className="horizontal-line"></div>  

      <div className="hero-image-container">
        <img className="hero-img" src="/hero-ui-v5.webp" alt="" />

        <div className="hero-img-fade"></div>
      </div>
    </div>
  );
}

export default Container;
