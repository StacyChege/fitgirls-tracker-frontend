import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/CoreStructure/Navbar";
import HomePage from "./components/LandingAndViews/HomePage";
import AboutPage from "./components/LandingAndViews/AboutPage";
import ExpertsPage from "./components/LandingAndViews/ExpertsPage";
import DashboardPage from "./components/LandingAndViews/DashboardPage"; 

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
            {/* The :name part is the dynamic route parameter */}
            <Route path="/dashboard/:name" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;