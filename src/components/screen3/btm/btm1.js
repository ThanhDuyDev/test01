import { Component } from "react";

import {GrFormNext} from "react-icons/gr"

import "../../../css/screen3/btm/btm_scr3.css"
import "../../../css/screen3/btm/btm1_scr3.css"
import "../../../css/custom_btn.css" 

export default class Btm1Scr3 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick = (i) => {
    this.props.indexPage(i);
  }

  render() {
    return (
      <div className="btm_screen3">
        <div className="section_help_ques">
          <p>How does this work?</p>
          <GrFormNext size={22} />
        </div>
        <div className="section_button">
          <button
            className="btn_disable btnback"
            onClick={() => this.handleClick(0)}
          >
            back
          </button>
          <button
            className="btn_able btnnext"
            onClick={() => this.handleClick(1)}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}
