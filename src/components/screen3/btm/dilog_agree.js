import { Component } from "react";
import { Checkbox, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { BsCheckLg, BsChevronCompactDown } from "react-icons/bs";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

import "../../../css/screen3/btm/dialog_agree.css";
import "../../../css/custom_btn.css"

export default class DialogAgree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkCount: 0,
    };
  }

  checkCountFn(box) {
    if (box.target.checked) {
      this.setState({
        checkCount: this.state.checkCount + 1,
      });
    } else {
      this.setState({
        checkCount: this.state.checkCount - 1,
      });
    }
  }

  render() {
    var data = [
      "Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility.",
      "Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword.",
      "To keep your backup file safe, you should also keep secret your back up location and secure it.",
    ];
    return (
      <Dialog
        open={true}
        PaperProps={{
          sx: {
            width: "100%",
            height: "75%",
            margin: "0",
            position: "fixed",
            bottom: "0",
            borderRadius: "16px 16px 0 0 ",
          },
        }}
      >
        <DialogTitle
          className="dialog_agree_title"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
            <BsChevronCompactDown color="D3D7DB" size={32} />
        </DialogTitle>
        <DialogContent className="dialog_agree">
          <div className="dialog_agree_icon">
            <BsCheckLg size={36} />
          </div>
          <p className="dialog_agree_text"> Your wallet has been created</p>
          <ul>
            {data.map((item, i) => (
              <li key={i} className="dialog_agree_content_item">
                <Checkbox
                  size={"32px"}
                  icon={<RiCheckboxBlankCircleLine />}
                  checkedIcon={<RiCheckboxCircleFill />}
                  style={{ padding: 0, marginRight: "12px" }}
                  onChange={this.checkCountFn.bind(this)}
                />
                <p className="dialog_agree_content_text">{item}</p>
              </li>
            ))}
          </ul>
          <div className="section_btn_dialog">
            <button
              className="btn_able btn_agrre"
              style={{ opacity: this.state.checkCount === 3 ? 1 : 0.3 }}
              disabled={this.state.checkCount === 3 ? true : false}
            >
              i understand
            </button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }
}
