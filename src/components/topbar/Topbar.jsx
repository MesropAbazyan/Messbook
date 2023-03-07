import './Topbar.css';
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import {Link} from 'react-router-dom';

function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to='/login' className='topbarLinkHome'>
          <span className="logo">Messbook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon' />
          <input placeholder='Search Messbook' className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to='/' className='topbarLinkHome'>
            <span className="topbarLink">Home</span>
          </Link>
          <Link to='/register' className='topbarLinkHome'>
            <span className="topbarLink">Registration</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to='/profile' >
          <img src="/assets/person/1.jpg" alt="" className="topbarImg" />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
