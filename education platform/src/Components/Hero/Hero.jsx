import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Мы обеспечиваем лучшее образование для лучшего мира!</h1>
        <p>
          Наша передовая учебная программа призвана дать учащимся знания, навыки
          и опыт, необходимые для достижения успеха в учёбе!
        </p>
        <button className="btn">
          Подробнее <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
