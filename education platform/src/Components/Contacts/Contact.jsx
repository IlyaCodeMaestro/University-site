import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Отправка....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Форма успешно отправлена!");
      event.target.reset();
    } else {
      console.log("Ошибка", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          <img src={msg_icon} alt="message icon" />
          Отправь нам сообщение
        </h3>
        <p>Мы ответим на все интересующие тебя вопросы</p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Edusity@mail.ru
          </li>
          <li>
            <img src={phone_icon} alt="" />+ 8-800-55-35-35
          </li>
          <li>
            <img src={location_icon} alt="" />
            Cambridge 77, USA
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Ваше имя</label>
          <input
            type="text"
            name="name"
            placeholder="Введите своё имя"
            required
          />
          <label>Ваш номер телефона</label>
          <input
            type="tel"
            name="phone"
            placeholder="Введите свой номер телефона"
            required
          />
          <label>Напишите своё сообщение здесь</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Введите ваше сообщение"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Отправить сейчас <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
