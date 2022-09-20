import {GrBottomCorner, GrTopCorner} from "react-icons/gr"
import {IoIosNotifications} from "react-icons/io"

import "../../css/screen1/header_screen1.css"

export default function HeaderScreen1() {
  return(
    <div className="header_screen1">
    <div className="user">
      <div className="user_img" />
      <div className="user_info">
        <p className="user_info_name">Minh Nguyen</p>
        <p className="user_info_email">@Victoria</p>
      </div>
    </div>
    <div className="function">
      <ul className="fn_list">
        <li className="fn_item gray_button">
          <GrBottomCorner size={18} />
        </li>
        <li className="fn_item gray_button">
          <GrTopCorner size={18} />
        </li>
        <li className="fn_item gray_button">
          <IoIosNotifications size={18} />
        </li>
      </ul>
    </div>
  </div>
  )
}