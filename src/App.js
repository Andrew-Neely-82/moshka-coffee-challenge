import { Navbar, Main, Gallery } from "./components/export";
import "./App.scss";

const App = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Main />
        <Gallery />
      </>
    );
  };

  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
