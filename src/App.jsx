import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/CoreStructure/Navbar";
import HomePage from "./components/LandingAndViews/HomePage";
import AboutPage from "./components/LandingAndViews/AboutPage";
import ExpertsPage from "./components/LandingAndViews/ExpertsPage";
import DashboardPage from "./components/LandingAndViews/DashboardPage"; 
import WorkoutListPage from "./components/LandingAndViews/WorkoutListPage";
import PostWorkoutPage from "./components/LandingAndViews/PostWorkoutPage";
import LoginPage from "./components/LandingAndViews/LoginPage";
import SignupPage from "./components/LandingAndViews/SignupPage";
import ExpertDetailPage from "./components/LandingAndViews/ExpertDetailPage";
import ExpertSignupPage from "./components/LandingAndViews/ExpertSignupPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experts" element={<ExpertsPage />} />
            <Route path="/experts/:id" element={<ExpertDetailPage />} />
            <Route path="/expert-signup" element={<ExpertSignupPage />} />
            <Route path="/workouts" element={<WorkoutListPage />} />
            <Route path="/post-workout" element={<PostWorkoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;