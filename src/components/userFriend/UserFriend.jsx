import './UserFriend.css';

function UserFriend({user}) {
  return (
    <div className="rightbarFollowing">
      <img src={user.profilePicture} alt="" className="rightbarFollowingImg" />
      <span className='rightbarFollowingName'>{user.username}</span>
    </div>
  );
}

export default UserFriend;
