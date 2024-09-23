/** @format */

import SearchBar from "./SearchBar";

function Upper({ test }) {

    return (
        <div>
            <div className = "card-header d-flex flex-column align-items-center bg-light-gray">
                <span className="d-flex justify-content-center w-100 fw-bold">{test.name}</span>
            </div>
            <SearchBar doSearch = {() => {}} />
        </div>
    );
}

export default Upper;
