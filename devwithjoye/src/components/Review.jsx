

import { useState } from "react";

export const ReviewForm = () => {
  const [formData, setFormData] = useState({ name: "", role: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just log it
    console.log("Review submitted:", formData);

    // Later: POST to your C# backend
    // await fetch("/api/reviews", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    setSubmitted(true);
    setFormData({ name: "", role: "", message: "" });
  };

  return (
    <section className="px-4 py-10 text-white" id="submit-review">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
        Feedback Form
      </h2>
      <p className="italic text-lg md:text-xl text-gray-300 my-4  font-semibold">Whether it was a collaboration, project, or just a chat — I’d love to hear your thoughts.</p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 rounded-4xl shadow-lg space-y-7"
      >
        <div>
          <input
            type="text"
            placeholder="Your Name (e.g. Sofia B.)"
            value={formData.name}
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-2xl bg-[#06061a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Your Role (e.g. Client, Backend Dev)"
            value={formData.role}
            required
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-2xl bg-[#06061a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          />
        </div>

        <div>
          <textarea
            placeholder="Your Review (e.g. The collaboration was seamless...)"
            value={formData.message}
            required
            rows="4"
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-2xl bg-[#06061a] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full  transition-all  shadow-lg hover:shadow-purple-500/30 hover:scale-105 duration-300 py-2  font-semibold text-white"
        >
          Submit Review
        </button>

        {submitted && (
          <p className="text-green-400 text-sm text-center mt-2">
            Thank you for your review!
          </p>
        )}
      </form>
    </section>
  );
};
