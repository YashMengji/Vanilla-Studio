import "./TeamCardTab.css";
import TeamCard from "./TeamCard";
import Yash from "../../../assets/yash.jpg";
import Sushant from "../../../assets/sushant.jpg";
import Dipanjan from "../../../assets/dipanjan.jpg";

export default function TeamCardTab() {
    return (
        <div className="team-card-tab">
            <TeamCard 
            instagram="https://www.instagram.com/yash.mengji"
            twitter="#"
            linkedin="https://www.linkedin.com/in/yashmengji/"
            github="https://github.com/YashMengji"
            image={Yash}
            title="Yash Mengji"
            desc="Full Stack Web Developer"/>
            <TeamCard 
            instagram="https://www.instagram.com/_sushant_hande/"
            twitter="#"
            linkedin="https://www.linkedin.com/in/sushant-hande-6792a72ab/"
            github="https://github.com/SushantHande04 "
            image={Sushant} 
            title="Sushant Hande" 
            desc="Full Stack Web Developer"/>
            <TeamCard 
            instagram="https://www.instagram.com/ig.dipartz.04/"
            twitter="https://x.com/DipanjanKarma11"
            linkedin="https://www.linkedin.com/in/dipanjan-karmakar-2b935a257/"
            github="https://github.com/DipanjanKarmakar43"
            image={Dipanjan} 
            title="Dipanjan Karmakar" 
            desc="Designer, Front End Web Developer"/>
        </div>
    );
}