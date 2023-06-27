import './header.scss';
import avatar from '../../assets/images/bg.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img className="header-avatar" src={avatar} alt="Avatar"/>
                <div className="header-name">Mary</div>
            </div>

            <div className="header-content header-btn-group">
                <button className="header-btn save-btn" title="Save current state">
                    <span className="btn-text save-text">Save</span>
                </button>
                <button className="header-btn download-btn" title="Download last saved state">
                    <span className="btn-text download-text">Download</span>
                </button>
            </div>
        </header>
    )
}

export default Header;