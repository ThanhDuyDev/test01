import BtmScreen1 from "../components/screen1/btm_screen1";
import HeaderScreen1 from "../components/screen1/header_screen1";
import List1Screen1 from "../components/screen1/list1_scr1";
import List2Screen1 from "../components/screen1/list2_scr1";
import Nav1Screen1 from "../components/screen1/nav1_scr1";
import Nav2Screen1 from "../components/screen1/nav2_scr1";

import "../css/screen1/screen1.css"

export default function Screen1() {
  return (
    <div className="screen screen1">
      <HeaderScreen1 />
      <Nav1Screen1 />
      <List1Screen1/>
      <Nav2Screen1 />
      <List2Screen1 />
      <BtmScreen1/>
    </div>
  );
}