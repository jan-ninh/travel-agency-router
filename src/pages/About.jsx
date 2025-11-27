import React from "react";

import aboutHero from "../assets/images/about-hero.jpg";

const About = () => {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* OBERER BEREICH  */}
      <h1 className="mb-4 text-center text-4xl font-bold text-amber-300">
        About Us
      </h1>
      <p className="mx-auto mb-12 max-w-2xl text-center">
        Welcome to <span className="font-semibold">Travel Agency</span> — We are
        a boutique travel agency focused on curated experiences. Our mission is
        to make planning your trip as relaxing as the journey itself.
      </p>

      {/* UNTERER BEREICH */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        {/* LINKS: Text */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-amber-300">
            Why Travel With Us?
          </h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Flexible payment plans tailored to student budgets</li>
            <li>Handpicked hostels and venues close to city hotspots</li>
            <li>Built-in networking events & 24/7 support </li>
            <li>Discount deals on local transport and attractions</li>
          </ul>
        </div>

        {/* RECHTS: Bild */}
        <figure className="flex flex-col items-center">
          <img
            src={aboutHero}
            alt="Team greeting Customer"
            className="h-80 w-full max-w-md rounded-3xl object-cover shadow-lg"
          />
          <figcaption className="mt-2 text-xs">Photos by Pexels</figcaption>
        </figure>
      </section>
    </main>
  );
};

export default About;
