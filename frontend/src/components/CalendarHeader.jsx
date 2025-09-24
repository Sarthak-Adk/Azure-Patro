export default function CalendarHeader() {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Ashoj 2082 | Sep/Oct 2025</h2>
        <div className="flex gap-2">
          <button className="border px-2 py-1 rounded text-sm">◀</button>
          <button className="border px-2 py-1 rounded text-sm">Current Month</button>
          <button className="border px-2 py-1 rounded text-sm">▶</button>
          <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">📅 My Calendars</button>
        </div>
      </div>
      <div className="text-sm text-gray-500 mt-1">B.S. | Yearly</div>
    </div>
  );
}
