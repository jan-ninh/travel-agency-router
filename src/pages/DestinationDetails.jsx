import React from "react";
import { Link, useParams } from "react-router-dom";

import destinations from "../data/travel.json";

const DestinationDetails = () => {
  const { slug } = useParams();
  const destination = destinations.find(
    (destination) => destination.slug === slug,
  );

  if (!destination) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="mb-4 text-lg font-semibold text-red-600">
          Destination not found.
        </p>
        <Link to="/destinations" className="link">
          ← Back to all destinations
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 pt-10 pb-16">
      <Link
        to="/destinations"
        className="mb-4 inline-block text-sm hover:underline"
      >
        ← Back to all destinations
      </Link>

      <article className="card bg-base-100 shadow-xl md:flex">
        <figure className="md:w-1/2">
          <img
            src={destination.image}
            alt={destination.title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="card-body md:w-1/2">
          <h1 className="mb-2 text-3xl font-bold">{destination.title}</h1>
          <p className="mb-4 text-slate-400">{destination.description}</p>
          <button className="btn btn-warning bg-amber-300 hover:bg-amber-500">
            Plan this trip
          </button>
        </div>
      </article>
    </main>
  );
};

export default DestinationDetails;
