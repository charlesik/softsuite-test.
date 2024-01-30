import MenuItems from "./MenuItems";
import SwitchDropDown from "./SwitchDropDown";

function SideBar() {
    return (
        <div className="sidebar">
        <img src="/logo.png" alt="" />
        <SwitchDropDown/>
       <MenuItems/>
      </div>
    );
}

export default SideBar;