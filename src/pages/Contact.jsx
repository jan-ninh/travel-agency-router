import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="bg-base-100 flex min-h-[calc(100vh-4rem-4rem)] flex-col items-center px-4 py-12">
      {/* Titel + Untertitel */}
      <section className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
        <p className="text-base-content/80 max-w-2xl text-lg">
          Want to join a trip or ask us anything? Send us a message and we'll be
          in touch soon!
        </p>
      </section>

      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      {/* SECTION: Card mit Formular */}
      {/* ---------------------------------------------------------------------- */}
      {/* ---------------------------------------------------------------------- */}
      <section className="w-full max-w-3xl">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered min-h-40 w-full"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              {/* Button rechts unten */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="btn btn-warning px-8 font-bold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
