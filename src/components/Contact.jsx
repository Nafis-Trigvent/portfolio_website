export default function Contact() {
  return (
    <section id="contact" className=" ">
      <div className="max-w-[85%] mx-auto pb-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-blue-600">Me</span>
          </h2>
          <p className="pt-6 text-slate-300">
            Let’s talk about your project or idea
          </p>
        </div>

        {/* Form */}
        <form className="max-w-2xl mx-auto bg-slate-600 p-8 rounded-2xl shadow-sm">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border  focus:outline-none "
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border focus:outline-none"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg border mb-6 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
