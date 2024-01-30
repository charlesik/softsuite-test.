import Search from "./Search";
function ElementsTab() {
    return (
        <div className="elementstab">
                <div className="elementsearch">
                <Search/>
                <div className="filter"><img src="filter.png" alt="" /></div>
                </div>
                <button className="createelementbtn">Create Element</button>
            </div>
    );
}

export default ElementsTab;