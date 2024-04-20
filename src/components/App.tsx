import Menu from "./Menu";
import Footer from "./Footer";
import WorkspaceSection from "../containers/WorkspaceSection";
import DockerProsSection from "../containers/DockerProsSection";
import ImagesSection from "../containers/ImagesSection";

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <Menu />
        <WorkspaceSection />
        <DockerProsSection />
        <ImagesSection />
      </div>
      <Footer />
    </>
  );
};

export default App;
