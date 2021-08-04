import React from "react"
import Member from "./Member"
import profile1 from "../images/profile1.jpg"
import profile2 from "../images/profile2.jpg"
import profile3 from "../images/profile3.jpg"

function TopMember() {
    const profileArray = [{name: "Adriana Robinson", leads: "15 leads", image: profile1}, {name: "Teddy Smith", leads: "13 leads", image: profile3}, {name: "Rachel Hall", leads: "9 leads", image: profile2}]

    return(
        <div className="top-member-container">
            <div className="member-container">
                <div className="team-members">
                    <h3>My top team members</h3>
                </div>
                <div className="user-container">
                   {profileArray.map(profile => { return <Member name={profile.name} image={profile.image}/>})}
                </div>
                <div className="container-invite-member">
                    <div className="add-category invite-member">
                        <h4>Invite a new member</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMember