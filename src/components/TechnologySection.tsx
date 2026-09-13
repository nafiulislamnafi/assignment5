import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  //  datafetch
  const technologyDataFetch = async (): Promise<Technology[]> => {
    const res = await fetch("/data/technologies.json");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    technologyDataFetch()
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Failed to load technologies"))
      .finally(() => setLoading(false));
  }, []);

  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }
    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const technology = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    toast.info(`${technology?.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };
  if (loading) {
    return (
      <section className="px-5 py-16">
        <div className="mx-auto max-w-285 text-center">
          <span className="loading loading-spinner loading-lg text-pink-500"></span>

          <p className="mt-3 text-sm text-gray-500">Loading technologies...</p>
        </div>
      </section>
    );
  }
  return (
    <section id="technologies" className="bg-white px-5 py-14">
      <div className="mx-auto max-w-285">
        <div className="mb-9">
          <h2 className="text-3xl font-extrabold text-[#111827] md:text-[36px]">
            Explore the
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent ml-3">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-[#667085]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* card */}

        <div className="grid grid-cols-4 gap-7 ">
          <div className="grid  gap-5 col-span-3 grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some((item) => item.id === technology.id);

              return (
                <div
                  key={technology.id}
                  className="flex min-h-66 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm  hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <span className="rounded-full bg-pink-50 px-3 py-1 text-[11px] font-medium text-pink-500">
                      {technology.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#111827]">
                    {technology.name}
                  </h3>

                  <p className="mt-2 text-xs  text-[#667085]">
                    {technology.description}
                  </p>

                  <div className="mt-auto border-t border-gray-100 pt-3">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="rounded bg-gray-100 px-2 py-1 text-gray-600">
                        {technology.category}
                      </span>

                      <span className="text-gray-500">
                        {technology.difficulty}
                      </span>

                      <span className="font-medium text-gray-700">
                        <span className="mr-1 text-yellow-400">★</span>
                        {technology.rating}
                      </span>
                    </div>

                    <button
                      onClick={() => addToStack(technology)}
                      disabled={isAdded}
                      className={`mt-3 w-full rounded-lg py-2.5 text-xs font-medium transition cursor-pointer  ${
                        isAdded
                          ? "cursor-not-allowed bg-gray-200 text-gray-500"
                          : "bg-[#080D1A] text-white hover:bg-gray-800"
                      }`}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* stack */}

          <aside className="h-fit rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex justify-between items-center ">
              <div>
                <h3 className="text-base font-bold text-[#111827]">
                  Your Stack
                </h3>

                <p className="mt-1 text-xs text-gray-400">
                  {stack.length === 0
                    ? "No technologies selected yet."
                    : `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`}
                </p>
              </div>
            </div>

            {stack.length === 0 && (
              <div className="mt-4 flex justify-center items-center h-16 rounded-xl border border-dashed border-gray-200">
                <p className="text-xs text-gray-400">Your stack is empty.</p>
              </div>
            )}

            {stack.length > 0 && (
              <div className="mt-4 space-y-3">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-7 w-7 object-contain"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {technology.name}
                      </p>

                      <p className="text-[11px] text-gray-400">
                        {technology.category}
                      </p>
                    </div>

                    {/* remove  */}
                    <button
                      onClick={() => removeFromStack(technology.id)}
                      className="text-lg text-gray-400 hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Remove All */}
                <button
                  onClick={removeAll}
                  className="mt-2 w-full rounded-lg border border-red-100 py-2 text-xs font-medium text-red-500 cursor-pointer "
                >
                  Remove All
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        aria-label={undefined}
      />
    </section>
  );
};

export default TechnologySection;
