import React from "react";
import AddCategory from "./AddCategory";
import AddPhoto from "./AddPhoto"
import TopMember from "./TopMember"
import Archive from "./Archive"

function Aside(){
    return (
        <div className="aside">
             <AddCategory />
             <AddPhoto />
             <TopMember />
             <Archive />
        </div>
    )
}

export default Aside