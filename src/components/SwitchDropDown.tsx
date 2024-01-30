
function SwitchDropDown() {
    return (
        <div className="switchdrop">
        <div className="switch">
            <div className="switchimg">
                <img src="switch.png" alt="" />
            </div>
            <div>
            <p>Switch Module</p> 
            <p className="bold">Payroll Management</p>
            </div>
            <div className="dropdown">
            <img src="dropdown.png" alt="" />
            </div>
        </div>
        <div className="switchlist">
            <p className="switchitem">System Administration</p>
            <p className="switchitem">People Management</p>
            <p className="switchitem">Payroll Management</p>
            <p className="switchitem">Self Service</p>
        </div>
        </div>
    );
}

export default SwitchDropDown;