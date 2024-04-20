const EditionsSection = () => {
  return (
    <>
      <h1 className="mb-12 text-center text-accent text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        Docker Images
      </h1>
      <div role="tablist" className="grid grid-cols-2 tabs tabs-bordered">
        <input
          type="radio"
          name="editions"
          role="tab"
          className="tab"
          aria-label="Core Edition"
        />
        <div role="tabpanel" className="tab-content p-10">
          <p className="my-2">
            Core system with just the Stealth basics. You can use it as a start
            point to create your custom containers. If you already have Docker
            installed on your system, you can just run the last command
            directly.
          </p>
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
                stealthos/core
              </code>
            </pre>
          </div>
        </div>

        <input
          type="radio"
          name="editions"
          role="tab"
          className="tab"
          aria-label="Security Edition"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-10">
          <p className="my-2">
            This container includes a huge collection of tools that can be used
            via command line from inside a Docker container. If you already have
            Docker installed on your system, you can just run the last command
            directly.
          </p>
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
          <div role="alert" className="alert alert-info my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-primary">
              Some tools with graphical interface were excluded for obvious
              reasons.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditionsSection;
