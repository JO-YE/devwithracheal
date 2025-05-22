import { Typewriter } from "react-simple-typewriter";

export const Hero = () => {
  return (
    <section className="text-white text-center py-10 px-4">
      <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent font-bold mb-4 min-h-[4.5rem] italic">
        <Typewriter
          words={["Turning vision into clean, responsive, and smart solutions."]}
          loop={5}        // loop 5 times
          cursor          // show cursor
          cursorStyle="|" 
          typeSpeed={70}  
          deleteSpeed={40} 
          delaySpeed={3500} 
        />
      </h1>
      <p className="text-lg md:text-xl text-gray-300 italic">
        Let's bring that idea to life
      </p>
    </section>
  );
};
