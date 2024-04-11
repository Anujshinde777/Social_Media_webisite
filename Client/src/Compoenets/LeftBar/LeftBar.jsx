import "./LeftBar.scss";
import Friends from "../../Assest/1.png";
import Group from "../../Assest/2.png";
import market from "../../Assest/3.png";
import play from "../../Assest/4.png";
import watch from "../../Assest/5.png";
import event from "../../Assest/6.png";
import Games from "../../Assest/7.png";
import Gallary from "../../Assest/8.png";
import video from "../../Assest/9.png";
import Message from "../../Assest/10.png";
import Tutorial from "../../Assest/11.png";
import Course from "../../Assest/12.png";
import Fund from "../../Assest/13.png";

const LeftBar = () => {
  return (
    <div className="Leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <span>Anuj Shinde</span>
          </div>
          <div className="items">
            <img src={Friends} alt="Friends Logo" />
            <span>Friends</span>
          </div>
          <div className="items">
            <img src={Group} alt="Group Logo" />
            <span>Group</span>
          </div>
          <div className="items">
            <img src={market} alt="Market Logo" />
            <span>Marketplace</span>
          </div>
          <div className="items">
            <img src={play} alt="Play Logo" />
            <span>Play</span>
          </div>
          <div className="items">
            <img src={watch} alt="Watch Logo" />
            <span>Watch</span>
          </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shorcuts</span>
          <div className="items">
            <img src={event} alt="Event Logo" />
            <span>Events</span>
          </div>
          <div className="items">
            <img src={Games} alt="Games Logo" />
            <span>Games</span>
          </div>
          <div className="items">
            <img src={Gallary} alt="Gallary Logo" />
            <span>Gallary</span>
          </div>
          <div className="items">
            <img src={video} alt="Video Logo" />
            <span>Videos</span>
          </div>
          <div className="items">
            <img src={Message} alt="Message Logo" />
            <span>Messages</span>
 
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Other</span>
          <div className="items">
            <img src={Tutorial} alt="Tutorial Logo" />
            <span>Tutorial</span>
          </div>
          <div className="items">
            <img src={Course} alt="Course Logo" />
            <span>Courses</span>
          </div>
          <div className="items">
            <img src={Fund} alt="Fund Logo" />
            <span>Fundraisers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
