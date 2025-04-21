import { IoClose } from "react-icons/io5";

function SelectedEmail({ children, onRemoveEmail }) {
  return (
    <div className="inline-flex items-center bg-red-400 text-white p-2 px-3 rounded-2xl mr-2 max-w-xs">
      <label
        className="mr-2 font-bold truncate overflow-hidden whitespace-nowrap"
        title={children}
      >
        {children}
      </label>
      <button className="flex-shrink-0" onClick={onRemoveEmail}>
        <IoClose />
      </button>
    </div>
  );
}

export default SelectedEmail;
