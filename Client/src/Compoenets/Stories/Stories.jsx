import { useContext } from "react";
import "./Stories.scss";
import { AuthContext } from "../../Context/AuthContext";
 

function Stories() {
  //dummy data
  const { currentUser } = useContext(AuthContext);
  const data = [
    {
      id: 1,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Jane Doe",
      profile:
        "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "John Doe",
      profile:
        "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Jane Doe",
      profile:
        "https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="Stories">
      <div className="story">
        <img src={currentUser.pic} alt={currentUser.name} />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {data.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.profile} alt={story.name} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Stories;
