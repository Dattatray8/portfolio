import me from "../../assets/me.webp";

function AboutOriginal() {
  return (
    <div className="w-full px-[10%] mx-auto mb-20" id="about">
      <h2 className="text-4xl bebas-neue-regular tracking-wide my-10 sm:mt-2  text-primary">
        About Me
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[10%]">
        <div className="lg:w-1/2 text-lg leading-relaxed">
          I'm a Web Developer. I enjoy building clean, responsive interfaces and
          understanding how data flows across the full application.
          <br />
          <br />
          Currently, I'm strengthening my backend development skills by building
          practical, real-world projects. I'm always looking for opportunities
          to apply my skills, grow as a full-stack developer, and contribute to
          meaningful products.
        </div>

        <div className="h-[40vh] w-[40vh] sm:h-[45vh] sm:w-[45vh] lg:h-[50vh] lg:w-[50vh] shrink-0">
          <img
            src={me}
            alt="Me"
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutOriginal;

