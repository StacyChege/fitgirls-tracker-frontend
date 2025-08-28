import { useParams } from 'react-router-dom';
import React from 'react';
// Corrected import: FaBookmark is the correct icon name for a save icon
import { FaChartLine, FaBookmark, FaUser } from 'react-icons/fa';

function computeDayStreak(userActivities) {
  const days = new Set(
    userActivities
      .filter(a => a.status === 'completed' && a.date_logged)
      .map(a => a.date_logged)
  );
  if (days.size === 0) return 0;
  const today = new Date();
  const fmt = d =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate())
      .toISOString()
      .slice(0, 10);
  let streak = 0;
  let cursor = new Date(today);
  while (days.has(fmt(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

const DashboardPage = () => {
  const { name } = useParams();
  const displayName = decodeURIComponent(name || '').trim() || "Athlete";

  // Mock Data
  const userActivities = [
    { workout: 3, status: 'completed', date_logged: '2025-08-25', notes: '' },
    { workout: 7, status: "completed", date_logged: "2025-08-24", notes: '' },
    { workout: 7, status: "in_progress", date_logged: "2025-08-23", notes: '' }
  ];

  const likes = [3, 12];
  
  const completedWorkouts = userActivities.filter(a => a.status === 'completed').length;
  const savedWorkouts = likes.length;
  const dayStreak = computeDayStreak(userActivities);

  return (
    <div className='bg-white max-w-7xl mx-auto p-6 text-black'> 
      <header className='mb-6'>
        <h1 className='text-3xl md:text-4xl font-extrabold'>
          Welcome back, {displayName}!
        </h1>
        <p className='text-gray-600 mt-2'>
          Ready for your next workout? Let's keep building those healthy habits!
        </p>
      </header> 
      <div className='grid gap-6 md:grid-cols-3'>
        <aside className='md:col-span-1 space-y-4'>
          <div className='bg-white rounded-2xl shadow p-5'>
            <div className='flex items-center gap-3'>
              <div className='h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-black font-bold'>
                {displayName.slice(0, 1).toUpperCase()}
              </div>
              <div>
                <p className='font-semibold'>{displayName}</p>
                <p className='text-xs text-gray-500'>Member</p>
              </div>
            </div>
            <div className='mt-4 text-sm text-gray-600'>
              <p>Stay consistent. Small wins compound.</p>
            </div>
          </div>
          {/* Stat Cards - This div is now a grid to make them horizontal */}
          <div className='grid grid-cols-3 gap-3'>
            <StatCard label="Completed Workouts" value={completedWorkouts} icon={<FaChartLine />} />
            <StatCard label="Saved Workouts" value={savedWorkouts} icon={<FaBookmark />} />
            <StatCard label="Current Streak" value={dayStreak} icon={<FaUser />} />
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold mb-3">Recent Activity</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              {userActivities.slice(0, 5).map((a, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span className="truncate">
                    #{a.workout} — {a.status.replace("_", " ")}
                  </span>
                  <span className="text-xs text-gray-400">{a.date_logged}</span>
                </li>
              ))}
              {userActivities.length === 0 && (
                <li className="text-gray-400">No activity yet.</li>
              )}
            </ul>
          </div>
        </aside>
        <section className="md:col-span-2">
          <div className="bg-white rounded-2xl shadow p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Your Workouts</h2>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Filter & Sort</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <EmptyTile />
              <EmptyTile />
              <EmptyTile />
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Coming next: render <strong>WorkoutList</strong> → <strong>WorkoutCard</strong> from local JSON data (shape aligned with your <em>Workout</em> model).
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;

// Updated StatCard component
function StatCard({ label, value, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center">
      <div className="flex flex-col items-center mb-2">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}

function EmptyTile() {
  return (
    <div className="border-2 border-dashed rounded-xl p-6 text-center text-gray-400">
      WorkoutCard placeholder
    </div>
  );
}