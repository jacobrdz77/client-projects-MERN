import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
const Home = () => {
  return (
    <>
      <div className="container">
        <AddClientModal />
        <Clients />
        <Projects />
      </div>
    </>
  );
};

export default Home;
