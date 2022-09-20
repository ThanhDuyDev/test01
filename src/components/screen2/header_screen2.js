import { FaAngleDown, FaStore } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { useNavigate } from "react-router-dom";



import "../../css/screen2/header_screen2.css"

export default function HeaderScreen2() {
  var navigate = useNavigate();

  function navigateToScreen3 () {
    navigate("/screen3")
  }
  return(
    <div className="header_screen2">
    <div className="left_section">
      <div className="white_button">
        <FaAngleDown size={16} />
      </div>
    </div>
    <div className="right_section">
      <div className="right_section_item gray_button">
        <FaStore size={16} />
      </div>
      <div className="right_section_item gray_button" onClick={navigateToScreen3}>
        <FiMoreHorizontal size={16} />
      </div>
    </div>
  </div>
  )
}