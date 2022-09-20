import { Component } from "react";

import { IoIosCopy } from "react-icons/io";

import "../../../css/screen3/btm/section_copy.css";
import DialogCopy from "./dialog_copy";

export default class SectionCopyScr3 extends Component {
  constructor(props) {
    super(props);
    this.state={
      openDialog: false
    }
  }

  fnOpenDialog = () => {
    this.setState({
      openDialog: true,
    })
    setTimeout(() => {
      this.setState({
        openDialog: false,
      })
      this.props.indexPage(1);
    }, 2000)
  }

  render() {
    return (
      <div className="section_copy">
        <div className="section_copy_text">
          <p>
            Tap to Copy or Carefully write down your seed phrase and store it in
            a safe place
          </p>
        </div>
        <div className="copy_icon_wrapper">
          <IoIosCopy size={32} color={"#004DFF"} onClick={this.fnOpenDialog} />
        </div>
        <DialogCopy openDialog={this.state.openDialog}/>
      </div>
    );
  }
}
