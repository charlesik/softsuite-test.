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
       <div className="bell"><img src="notification.png" alt="" /></div>
       <div className="switch org userdetails">
            <div className="switchimg">
                <img src="user.png" alt="" />
            </div>
            <div>
            <p>Henry Okoro</p> 
            <p className="bold">Payroll Manager</p>
            </div>
            <div className="dropdown">
            </div>
        </div>
        </div>
    
    );
}

export default TopBar;