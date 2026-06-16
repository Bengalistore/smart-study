export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-6">Smart Study Planner</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Today's Progress</h2>
          <p className="text-gray-600">68% Syllabus Completed</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold">Exam Target</h2>
          <p className="text-gray-600">JEE Main 2026</p>
        </div>
      </div>
    </div>
  );
}
