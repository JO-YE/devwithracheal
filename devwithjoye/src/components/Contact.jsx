import { FaGithub, FaLinkedin, FaWhatsapp, FaDev } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 text-white bg-[#06061a]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500">
          Let's Connect
        </h2>
        <p className="italic text-lg md:text-xl text-gray-300 my-4  font-semibold">Reach out via any of the platforms below 👇🏽</p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://wa.me/2348101692377"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <FaWhatsapp size={28} />
        </a>
        <a
          href="https://github.com/JO-YE"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/joye-a-racheal"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://dev.to/globaljoye"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <FaDev size={28} />
        </a>
        <a
          href="mailto:globaljoye@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <MdEmail size={28} />
        </a>
      </div>
    </section>
  );
};
