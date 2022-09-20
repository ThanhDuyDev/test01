import { FaSearch } from "react-icons/fa";

import "../css/screen2/screen2.css";
import "../css/custom_btn.css";
import List1Screen2 from "../components/screen2/list1_scr2";
import Nav1Screen2 from "../components/screen2/nav1_scr2";
import HeaderScreen2 from "../components/screen2/header_screen2";


export default function Screen2() {
  return (
    <div className="screen screen2">
      <HeaderScreen2 />
      <Nav1Screen2 />
      <List1Screen2/>

      <div className="bottom_screen2">
        <div className="input_search">
          <FaSearch opacity={0.2} />
          <p className="search_text"> Search</p>
        </div>
      </div>
    </div>
  );
}
