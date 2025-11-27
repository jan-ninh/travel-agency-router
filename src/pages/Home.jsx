import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // 1️⃣ Hook von React Router, um per Code die Seite zu wechseln
  const navigate = useNavigate();

  // 2️⃣ Handler → Wird ausgelöst, wenn Formular abgeschickt wird
  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/destinations");
  };

  return (
    <main>
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* TOP SECTION */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      <section className="flex flex-col items-center px-4 py-10">
        <h1 className="mb-8 text-center text-3xl font-extrabold md:text-4xl">
          Find Your Next Adventure!
        </h1>
        {/* 3️⃣ Suchleiste als FORM */}
        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-5xl flex-col items-center gap-3 md:flex-row md:items-center md:justify-center"
        >
          {/* Origin */}
          <input
            type="text"
            name="origin"
            placeholder="Origin"
            className="input input-bordered flex-1 rounded-full"
          />
          {/* Destination */}
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            className="input input-bordered flex-1 rounded-full"
          />
          {/* Date from */}
          <input
            type="text"
            name="dateFrom"
            placeholder="TT.mm.jjjj"
            className="input input-bordered flex-1 rounded-full"
          />
          {/* Date to */}
          <input
            type="text"
            name="dateTo"
            placeholder="TT.mm.jjjj"
            className="input input-bordered flex-1 rounded-full"
          />
          {/* Search-Button (type="submit" triggert onSubmit von <form> */}
          <button
            type="submit"
            className="btn btn-warning rounded-full px-8 font-bold"
          >
            Search
          </button>
        </form>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      {/* MIDDEL SECTION */}
      {/* ------------------------------------------------------------- */}
      {/* ------------------------------------------------------------- */}
      <section className="mx-auto mt-16 w-full max-w-5xl">
        {/* Titel */}
        <h2 className="mt-16 mb-8 text-center text-2xl font-extrabold text-white md:text-3xl">
          Why Book With Us?
        </h2>

        {/* Card-Container */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          {/* Card 1 */}
          <div className="bg-base-200 rounded-3xl px-10 py-8 text-center shadow-md">
            <h3 className="mb-3 font-semibold">Student-Friendly Pricing</h3>
            <p className="text-sm">
              We negotiate exclusive student deals so you can explore more
              destinations without breaking your budget.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-base-200 rounded-3xl px-10 py-8 text-center shadow-md">
            <h3 className="mb-3 font-semibold">Local Insider Guides</h3>
            <p className="text-sm">
              Our trips are designed with input from local students and guides
              who know the best spots beyond the tourist traps.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-base-200 rounded-3xl px-10 py-8 text-center shadow-md">
            <h3 className="mb-3 font-semibold">Stress-Free Planning</h3>
            <p className="text-sm">
              From transport and accommodation to activities, we handle the
              logistics so you can focus on enjoying the journey.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
