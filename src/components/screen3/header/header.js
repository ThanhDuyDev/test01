import { IoIosArrowBack } from "react-icons/io";
import TittleTextScr3 from "./text_title";

export default function HeaderScreen3() {
  return (
    <div className="header_scr3">
      <div className="back_section">
        <IoIosArrowBack size={18} style={{ marginRight: "12px" }} />
        <p> Create New Wallet</p>
      </div>
      <TittleTextScr3 text={"Auto Gen Seed Phase?"}/>
    </div>
  );
}
