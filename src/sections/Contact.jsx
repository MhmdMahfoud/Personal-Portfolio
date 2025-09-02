import RevealOnScroll from "../Ui/RevealOnScroll";

export function Contact() {
  return (
    <section
      id="Contact"
      className="min-h-screen font-mono flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-lg md:max-w-2xl lg:w-[600px] xl:w-[700px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form
            action="https://formsubmit.co/engmohammedmahfoud2001@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                required
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message..."
                required
                className="w-full bg-white/10 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Submit
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
}
