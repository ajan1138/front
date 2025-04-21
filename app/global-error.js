"use client"; // Required for error boundaries

export default function Error({ error, reset }) {
  return (
    <div className="grid h-screen place-items-center bg-red-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          {error.message || "Something went wrong!"}
        </h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
