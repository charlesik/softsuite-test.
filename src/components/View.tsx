import Elements from "./Elements";
import TopBar from "./TopBar";

function View() {
    return (
        <div className="view">
            <TopBar/>
            <Elements/>
        </div>
    );
}

export default View;