import { MainLayout } from "./import";
import "./style.scss";

const Main = () => {
  const img = "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80";

  return (
    <div className="Main__">
      <MainLayout />
      <img src={img} alt="cafe" />
    </div>
  );
};

export default Main;
