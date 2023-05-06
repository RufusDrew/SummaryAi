import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-40 p-3 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/RufusDrew", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Your Article With <br className="max-md:hidden" />
        <span className="bg-text-8xl font-extrabold text-transparent bg-clip-text animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text font-black text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <span className="bg-text-8x1 font-extrabold p-3">(Early Access)</span>
      <h2 className="desc">
        The OpenAI-based Url to article extractor is an innovative web solution
        designed to summarize the written content from the web.
      </h2>
    </header>
  );
};

export default Hero;
