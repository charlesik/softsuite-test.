import ElementList from "./ElementList";
import ElementsTab from "./ElementsTab";


const ElementsWindow: React.FC=()=> {
    
   


    return (
        <div className="elementswindow">
            <h1 className="elemhead">Elements</h1>
            <ElementsTab/>
            <ElementList/>
            
        </div>
    );
}

export default ElementsWindow;