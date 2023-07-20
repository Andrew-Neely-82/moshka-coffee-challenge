import { bg } from "../../assets/img/img";
import { MainLayout } from "./import";
import "./style.scss";

const Main = () => {
  return (
    <div className="Main__">
      <MainLayout />
      <img src={bg} alt="cafe" />
    </div>
  );
};

export default Main;
