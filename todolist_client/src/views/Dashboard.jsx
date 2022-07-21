import "../styles/Dashboard.css";
import DashboardLeft from "../components/DashboardLeftNav.jsx";
import DashboardNav from "../components/DashboardNav";
import Projects from "../components/Projects";
import filter from "../assets/filter.png";
export default function Dashboard() {
  return (
    <div class="DashboardWrapper">
      <DashboardLeft />
      <div className="rightBox">
        <DashboardNav />
        <div className="projectSection">
          <div className="projectHeading">
            <div className="projectMainHeading">Projects</div>
            <div className="filter">
              <img src={filter} alt="filterimg" /> <span>Filter</span>
            </div>
          </div>
          <div className="projectMain">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
