import {Users} from '../../dummyData';
import Online from '../online/Online';
import UserFriend from '../userFriend/UserFriend';
import './Rightbar.css';

function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Tom Cruise</b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoValue'>Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            {Users.map(u => (
              <UserFriend key={u.id} user={u} />
            ))}
          </div>
      </>
    );
  };

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
