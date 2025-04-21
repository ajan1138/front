function AddEmailButton({ isValid, onClick }) {
  return (
    <button
      className={`bg-gray-200 py-3 text-gray-400 rounded font-bold px-4 ${
        !isValid ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={!isValid}
      onClick={onClick}
    >
      Add Email →
    </button>
  );
}

export default AddEmailButton;
