/** @format */

import SearchBar from "../../general/SearchBar";

function Upper({ testName, doSearch }) {

    return (
        <div className="title-bar">
            <div className = "card-header d-flex flex-column align-items-center bg-light-gray title-bar">
                <span className="d-flex justify-content-center w-100 fw-bold">{testName}</span>
            </div>
            <SearchBar doSearch = {doSearch} />
        </div>
    );
}

export default Upper;
