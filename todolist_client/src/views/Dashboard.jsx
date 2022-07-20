import "../styles/Dashboard.css";
import DashboardLeft from "../components/DashboardLeftNav.jsx";
import DashboardNav from "../components/DashboardNav";
export default function Dashboard() {
  return (
    <div class="DashboardWrapper">
      <DashboardLeft />
      <div className="rightBox">
        <DashboardNav />
        <div className="projectSection">
          <div className="projectHeading">
            <div className="projectMainHeading">Projects</div>
            <div className="filter">Filter</div>
          </div>
          <div className="projectMain">YOYO VERY TIME CONSUMING CSS</div>
        </div>
      </div>
    </div>
  );
}
