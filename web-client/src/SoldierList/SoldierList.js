/** @format */

import SoldierListElement from "./SoldierListElement";

function SoldierList({ soldiers }) {
    
    const soldierComponents = soldiers.map((soldier) => (
        <SoldierListElement
            soldier={soldier}
        />
    ));

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className="card border-0"> 
                <div className = "card-body p-3">
                    <ul className="list-group list-group-flush overflow-auto"
                        id="status-list">
                        {soldierComponents}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default SoldierList;
