import alert from "../assets/jam_alert.png";

export default function error() {
  return (
    <div className="errorWrapper">
      <div className="error">
        <img src={alert} alt="alertImg" id="alertImg" />
        <span className="errorMessage">Please Enter a valid Email</span>
      </div>
    </div>
  );
}
