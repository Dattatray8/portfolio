import { useEffect, useState } from "react";

function HeroOriginal() {
  const fullName = "Dattatray Mahindrakar.";
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedName(fullName.slice(0, index));
      index++;

      if (index > fullName.length) {
        clearInterval(typing);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="w-full px-[10%] mx-auto flex flex-col mt-25 justify-center min-h-[80vh] gap-6 md:gap-8" id="home">

      <div className="flex flex-col w-full gap-2">
        <div className="font-semibold text-primary text-2xl md:text-3xl">
          Hey there!, I'm-
        </div>

        <div className="bebas-neue-regular tracking-wide text-5xl md:text-7xl lg:text-8xl leading-tight">
          {typedName}
          {typedName.length < fullName.length && (
            <span className="animate-pulse">|</span>
          )}
        </div>
      </div>

      <div className="font-semibold text-xl md:text-2xl lg:text-3xl md:w-3/4 lg:w-2/3">
        Web Developer.{" "}
        <span className="text-gray-400">
          Driven by a strong interest in building efficient and user-friendly
          software.
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        
        <div
          className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2"
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
          className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2"
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
          className="btn group hover:bg-primary/10 duration-300 border hover:border-primary flex items-center gap-2"
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
  );
}

export default HeroOriginal;

