import "../Comment/Comment.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Comment = () => {
  const { currentUser } = useContext(AuthContext);
  const Comment = [
    {
      id: 1,
      UserId: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      dec: "adsffkdsalkjal;flsaflakfasdjf'adfasdjdjksa",
    },
    {
      id: 2,
      UserId: 2,
      name: "Jane Doe",
      img: "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      dec: "adsffkdsalkjal;flsaflakfasdjf'adfasdjdjksa",
    },
    {
      id: 3,
      UserId: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      dec: "adsffkdsalkjal;flsaflakfasdjf'adfasdjdjksa",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.pic} alt="" />
        <input type="text" placeholder="Write Something..." />
        <button>Send</button>
      </div>
      {Comment.map((data) => (
        <div className="comment" key={data.id}>
          <img src={data.img} alt="User Pic" />
          <div className="info">
            <span className="name">{data.name}</span>

            <p className="dec">{data.dec}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comment;
