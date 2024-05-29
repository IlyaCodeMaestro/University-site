import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contacts/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Reviews from "./Components/Reviews/Reviews";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Наша программа' title='Что мы предлагаем'/>
        <Programs />
        <About />
        <Title subTitle='Галерея' title='Фотографии кампуса'/>
        <Campus/>
        <Title subTitle='Отзывы' title='То что говорит студент'/>
        <Reviews/>
        <Title subTitle='Свяжитесь с нами' title='На связи'/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
