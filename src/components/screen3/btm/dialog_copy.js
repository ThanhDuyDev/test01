import { Component } from "react";

import { Dialog, DialogContent} from "@mui/material";

import {FaCopy} from "react-icons/fa";

export default class DialogCopy extends Component {
  render() {
    return (
      <Dialog
        open={this.props.openDialog}
        PaperProps={{
          sx: {
            width: "100%",
            height: "40%",
            margin: "0",
            position: "fixed",
            bottom: "0",
            borderRadius: "16px 16px 0 0 ",
          },
        }}
      >
        <DialogContent className="dialog_copy">
          <div className="dialog_copy_icon">
            <FaCopy color={"white"} size={40} />
          </div>
          <p className="dialog_copy_text"> Save to clipboard</p>
        </DialogContent>
      </Dialog>
    );
  }
}
