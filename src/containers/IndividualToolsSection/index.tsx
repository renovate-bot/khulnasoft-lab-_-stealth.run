import { containersData } from "./containersData";

const IndividualToolsSection = () => {
  return (
    <>
      <h1 className="mt-12 text-center text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        Individual StealthOS Tools
      </h1>
      <p className="my-8 text-center">
        If you already have Docker installed on your system, you can just run
        the last command directly.
      </p>
      {containersData.map((container, index) => (
        <div
          key={index}
          tabIndex={index}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mt-2"
        >
          <div className="collapse-title text-xl text-left font-medium">
            {container.title}
          </div>
          <div className="collapse-content">
            <div className="mockup-code bg-primary text-left text-secondary-content">
              <pre data-prefix="#" className="text-accent">
                <code>Update and upgrade the OS</code>
              </pre>
              <pre data-prefix="$">
                <code>sudo stealth-upgrade</code>
              </pre>
              <br />
              <pre data-prefix="#" className="text-accent">
                <code>Install Docker</code>
              </pre>
              <pre data-prefix="$">
                <code>sudo apt install docker.io</code>
              </pre>
              <br />
              <pre data-prefix="#" className="text-accent">
                <code>Run a nmap Docker container</code>
              </pre>
              <pre key={index} data-prefix="#">
                <code>{container.command}</code>
              </pre>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IndividualToolsSection;
