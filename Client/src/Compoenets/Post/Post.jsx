import "./Post.scss";
import PostContent from "../PostContent/PostContent";

const Post = () => {
  const dummyData = [
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
    <div className="Post">
            
      {dummyData.map((data) => (
        <PostContent key={data.id} data={data} />
      ))}
      
    </div>
  );
};

export default Post;
