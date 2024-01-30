function MenuItems() {
    return (
        <div className="menuitems">
        <div className="menuitem">
            <div className="dashimg"><img src="dashboard.png" alt="" /></div>
            <p>Dashboard</p>
        </div>
        <div className="menuitem">
            <div className="dashimg"><img src="payroll.png" alt="" /></div>
            <p>Payroll Activities</p>
        </div>
        <div className="menuitem">
            <div className="dashimg"><img src="salary.png" alt="" /></div>
            <p>Salary Structure</p>
        </div>
        <div className="elementdrop">
        <div className="menuitem elementbtn">
            <div className="dashimg"><img src="element.png" alt="" /></div>
            <p>Element Setup</p>
        </div>
        <div className="elementsmenu">
                <div className="elementsmenuitem">Elements</div>
                <div className="elementsmenuitem">Balances</div>
            </div>
        </div>
        <div className="menuitem">
            <div className="dashimg"><img src="employees.png" alt="" /></div>
            <p>Employees</p>
        </div>

        <div className="menuitems2">
        <div className="menuitem">
            <div className="dashimg"><img src="payrollsetting.png" alt="" /></div>
            <p>Payroll Settings</p>
        </div>
        <div className="menuitem">
            <div className="dashimg"><img src="user.png" alt="" /></div>
            <p>My Account</p>
        </div>
        <div className="menuitem">
            <div className="dashimg"><img src="logout.png" alt="" /></div>
            <p>Logout</p>
        </div>
        </div>
        </div>
    );
}

export default MenuItems;