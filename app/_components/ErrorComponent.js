export default function ErrorMessage({
  message = "Something went wrong.",
  statusCode,
}) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      {statusCode && (
        <strong className="font-bold">Error {statusCode}: </strong>
      )}
      <span className="block sm:inline">{message}</span>
    </div>
  );
}
