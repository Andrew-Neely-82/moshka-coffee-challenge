import { MainHeading, MainDescription, MainButton } from "./import";

const MainLayout = () => {
  const props = {
    heading: {
      title: "our coffee",
    },
    description: {
      description: `When it comes to the important stuff - the coffee - 
      we are committed to sourcing and serving one of the highest quality 
      and we believe is nothing short of best coffee possible`,
    },
    button: {
      title: "Download our menu",
    },
  };

  return (
    <div className="Main__content">
      <MainHeading {...props.heading} />
      <MainDescription {...props.description} />
      <MainButton {...props.button} />
    </div>
  );
};
export default MainLayout;
