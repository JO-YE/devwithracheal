import { motion as _motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const Testimonials = () => {
    const [posts, setPosts] = useState([]);
    const scrollRef = useRef(null);

    const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Designer",
    message: "Working with Racheal was a game changer. Her design-to-code skills are top-tier!",
    image: "/path-to-avatar1.jpg",
  },
  {
    name: "Mark A.",
    role: "Backend Developer",
    message: "The collaboration was seamless. Very professional and always meets deadlines.",
    image: "/path-to-avatar2.jpg",
  },
  {
    name: "Sofia B.",
    role: "Client",
    message: "The website she built for my brand is beautiful and responsive. Highly recommended!",
    image: "/path-to-avatar3.jpg",
  },
];

  
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=globaljoye")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))) // Limit to 5 posts
      .catch((err) => console.error("Failed to load blog posts:", err));
  }, []);

  
  return (
    <section className="py-10  text-white px-4 "  id="testimonials">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 bg-clip-text text-transparent ">What They Say & What I Write</h2>
      <div className="overflow-hidden relative">
        <_motion.div
          className="flex space-x-10 w-300"
          ref={scrollRef}
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}



        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4 space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{testimonial.message}</p>
            </div>
          ))}

          {/* Blog Posts from DEV.to */}
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[250px] bg-[#1a1a2e] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{new Date(post.published_at).toDateString()}</p>
              <p className="text-gray-300 text-sm line-clamp-3">{post.description}</p>
            </a>
          ))}
        </_motion.div>
      </div>
    </section>
  );
};
