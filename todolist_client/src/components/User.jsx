import "../styles/user.css";
export default function User({ img }) {
  return (
    <div className="userWrapper">
      <img class="userImage" src={img} />
    </div>
  );
}
