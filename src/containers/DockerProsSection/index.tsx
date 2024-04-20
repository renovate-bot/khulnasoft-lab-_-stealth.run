import Anonsurf from "./assets/anonsurf-on-docker.png";

const DockerProsSection = () => {
  return (
    <div className="rounded-xl bg-base-300 px-6 py-12 text-center md:px-12 lg:my-10 lg:text-left">
      <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="mt-12 lg:mt-0">
            <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Why containers?
            </h1>
            <p className="my-2">
              Docker is a powerful technology that allows users to run
              containers universally on any host platform. Docker uses template
              images, and allows the user to start several instances of the same
              template, destroy them, or build new custom templates on top of
              them. Stealth uses Docker to allow its users to use its vast
              arsenal of tools on any platform supported by docker.
            </p>
          </div>
          <img className="w-full" src={Anonsurf} alt="Stealth on Docker" />
        </div>
      </div>
    </div>
  );
};

export default DockerProsSection;
