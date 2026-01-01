import reactLogo from "../../assets/skill-icons/react-svgrepo-com.svg";

function FooterOriginal() {
  return (
    <div className="w-full px-[8%] lg:px-[10%] mx-auto flex flex-col py-10">
      <div className="flex flex-col gap-6 items-center text-center py-10 md:py-16">
        <div className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular tracking-wide text-primary">
          Keep In Touch
        </div>

        <div className="text-base sm:text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl">
          I'm currently specializing in{" "}
          <span className="text-primary font-semibold">
            Full-Stack Development
          </span>
          . <br className="hidden sm:block" />
          Feel free to get in touch and talk more.
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-4">
          <div
            className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2 min-w-[140px] justify-center"
            onClick={() => window.open("https://github.com/Dattatray8", "_")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 group-hover:fill-primary fill-current"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.87 10.95c.58.1.78-.25.78-.55v-2.1c-3.2.7-3.87-1.55-3.87-1.55-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.72-1.55-2.55-.3-5.23-1.28-5.23-5.73 0-1.27.45-2.32 1.2-3.14-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.2a11.2 11.2 0 0 1 6 0c2.28-1.52 3.28-1.2 3.28-1.2.65 1.64.24 2.86.12 3.16.75.82 1.2 1.87 1.2 3.14 0 4.46-2.7 5.43-5.26 5.72.42.36.8 1.08.8 2.2v3.26c0 .3.2.65.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            <span className="group-hover:text-primary">Github</span>
          </div>

          <div
            className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2 min-w-[140px] justify-center"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/dattatray-mahindrakar/",
                "_"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 group-hover:fill-primary fill-current"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.52-.98 1.78-2 3.66-2 3.92 0 4.64 2.48 4.64 5.7V21h-4v-5.3c0-1.26-.03-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.8V21h-4V9Z" />
            </svg>
            <span className="group-hover:text-primary">LinkedIn</span>
          </div>

          <div
            className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2 min-w-[140px] justify-center"
            onClick={() =>
              window.open("mailto:dattatraymahindrakar@gmail.com", "_")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-5 h-5 group-hover:fill-primary fill-current"
            >
              <path d="M2 4h20v16H2V4Zm10 7L3 6v2l9 5 9-5V6l-9 5Z" />
            </svg>
            <span className="group-hover:text-primary">Email</span>
          </div>
        </div>
      </div>

      <div className="mx-auto text-center text-gray-400 text-sm sm:text-base leading-relaxed">
        Developed By <span className="text-primary">Dattatray Mahindrakar</span>
        .
        <br />
        Built with{" "}
        <img
          src={reactLogo}
          alt="React Logo"
          className="inline w-6 h-6 ml-1 align-middle"
        />
      </div>
    </div>
  );
}

export default FooterOriginal;

