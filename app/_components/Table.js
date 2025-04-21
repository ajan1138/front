function Table({ data }) {
  function isFibonacci(n) {
    if (n === 0 || n === 1) return true;

    let a = 0,
      b = 1;
    while (b < n) {
      [a, b] = [b, a + b];
    }

    return b === n;
  }

  return (
    <div className="overflow-x-auto rounded-xl border-gray-200 w-full mt-10">
      <table className="min-w-full bg-white text-left">
        <thead className="bg-white text-gray-700 border-b border-gray-100 font-bold">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold">No</th>
            <th className="px-6 py-3 text-sm font-semibold">Email</th>
            <th className="px-6 py-3 text-sm font-semibold">Repeats</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm text-gray-800 border-b border-gray-100">
          {data.map((item, index) => {
            const isFib = isFibonacci(item.email.length);
            return (
              <tr
                key={item.email}
                className={`hover:bg-gray-50 ${
                  isFib ? "bg-red-100 font-bold" : ""
                }`}
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.repeats}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
