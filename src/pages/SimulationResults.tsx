import React from "react";

export default function SimulationResults() {
  return (
    <article className="px-5 py-6 w-full bg-white rounded-2xl shadow max-md:mt-5">
      {/* User Header */}
      <div className="flex items-center gap-3 bg-neutral-100 rounded-full px-4 py-2 w-max">
        <span className="text-xl font-semibold text-black">AVAD</span>
      </div>

      {/* Results Section */}
      <div className="mt-6">
        <section className="mb-6">
          <h4 className="text-base font-semibold text-neutral-400">
            Simulation Result
          </h4>
          <p className="text-4xl font-light text-black max-md:text-3xl">
            Success
          </p>
        </section>

        <section className="mb-6">
          <h4 className="text-base font-semibold text-neutral-400">
            Running Time
          </h4>
          <p className="text-4xl font-light text-black max-md:text-3xl">
            3m31s
          </p>
        </section>

        <section>
          <h4 className="text-base font-semibold text-neutral-400">Warnings</h4>
          <p className="text-3xl font-light text-red-600 max-md:text-2xl">
            Error Code 242
          </p>
        </section>
      </div>
    </article>
  );
}
