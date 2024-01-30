import Search from "./Search";

function TopBar() {
    return (
        <div className="topbar">
           <div className="switch org">
            <div className="switchimg">
                <img src="Home.png" alt="" />
            </div>
            <div>
            <p>Change Organisation</p> 
            <p className="bold">Papersoft Limited</p>
            </div>
            <div className="dropdown">
            <img src="dropdown.png" alt="" />
            </div>
        </div>
       <Search/>
       <div><img src="notification.png" alt="" /></div>
        </div>
    );
}

export default TopBar;