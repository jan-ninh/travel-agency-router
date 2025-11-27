import React from "react";
import { Link } from "react-router-dom";

import destinations from "../data/travel.json";

const Destinations = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-16">
      <h1 className="mb-4 text-center text-4xl font-bold">
        Discover Your Next Getaway!
      </h1>
      <p className="mb-10 text-center text-lg text-slate-400">
        Find inspiring cities, vibrant campuses, and creative hubs perfect for
        software engineering students.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/destinations/${destination.slug}`}
            className="card bg-base-100 cursor-pointer shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <figure>
              <img
                src={destination.image}
                alt={destination.title}
                className="h-52 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mb-2">{destination.title}</h2>
              <p className="text-slate-400">{destination.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Destinations;
