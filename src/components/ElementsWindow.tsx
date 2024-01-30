import ElementsTab from "./ElementsTab";

function ElementsWindow() {
    return (
        <div className="elementswindow">
            <h1>Elements</h1>
            <ElementsTab/>
            <div className="noelements">
                <img src="no-elements.png" alt="" />
            </div>
        </div>
    );
}

export default ElementsWindow;