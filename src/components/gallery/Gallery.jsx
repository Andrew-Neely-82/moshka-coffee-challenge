import { coffee, phone, people, espresso } from "../../assets/img/img";
import "./style.scss";

const Gallery = () => {
  return (
    <div className="Gallery__">
      <div className="Gallery__header">
        <h3>Gallery</h3>
      </div>
      <div className="Gallery__container">
        <img src={coffee} alt="coffee" />
        <img src={phone} alt="phone" />
        <img src={people} alt="people" />
        <img src={espresso} alt="espresso" />
      </div>
    </div>
  );
};

export default Gallery;
