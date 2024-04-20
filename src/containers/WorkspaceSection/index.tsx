const WorkspaceSection = () => {
  return (
    <div className="rounded-xl bg-base-300 px-6 py-12 text-center md:px-12 lg:my-20 lg:text-left">
      <div className="lg:grid items-center lg:gap-12 lg:grid-cols-2 w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
        <div className="mb-16 lg:mb-0">
          <div className="grid lg:grid-cols-1">
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
                <code>Run StealthOS on Docker container</code>
              </pre>
              <pre data-prefix="$">
                <code>
                  docker run --rm -ti --network host -v $PWD/work:/work
                  stealthos/security
                </code>
              </pre>
            </div>
          </div>
          <div className="grid lg:grid-cols-1">
            <p className="my-4">
              For more information,&nbsp;
              <a
                href="https://stealthos.khulnasoft.com/docs/cloud/general-usage-docker"
                className="link-accent"
              >
                read here
              </a>
              &nbsp;or&nbsp;
              <a
                href="https://stealthos.khulnasoft.com/team/"
                className="link-accent"
              >
                email us
              </a>
              !
            </p>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            StealthOS <br />
            <span className="text-accent">on Docker containers.</span>
          </h1>
          <p className="my-2">
            Whether you want to have a container full of tools, or several
            smaller containers with a tiny selection of tools, or even a clean
            Stealth environment to build your custom stack on, this is the right
            place where to learn how to take advantage of the StealthOS Docker
            workspace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSection;
