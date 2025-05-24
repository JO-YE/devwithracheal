import { FaGithub, FaLinkedin, FaWhatsapp, FaDev } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 text-white bg-[#06061a]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500">
          Let's Connect
        </h2>
        <p className="text-gray-400">Reach out via any of the platforms below 👇🏽</p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <FaWhatsapp size={28} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-gradient-to-br from-[#06061a] to-[#16213e] hover:bg-purple-700 transition"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
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
          href="mailto:yourname@gmail.com"
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
