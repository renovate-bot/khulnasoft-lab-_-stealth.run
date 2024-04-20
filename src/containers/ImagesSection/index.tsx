import EditionsSection from "../EditionsSection";
import IndividualToolsSection from "../IndividualToolsSection";

const ImagesSection = () => {
  return (
    <>
      <div className="rounded-xl bg-base-300 px-6 py-12 text-center md:px-12 lg:my-20 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="mt-12 lg:mt-0">
            <EditionsSection />
            <IndividualToolsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesSection;
