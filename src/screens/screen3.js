import { Component } from "react";
import HeaderScreen3 from "../components/screen3/header/header";
import List24Scr3 from "../components/screen3/list/list24_scr3";
import SectionCopyScr3 from "../components/screen3/btm/section_copy";
import {AiFillWarning} from "react-icons/ai"

import "../css/screen.css";
import "../css/screen3/screen3.css";
import Btm1Scr3 from "../components/screen3/btm/btm1";
import Btm2Scr3 from "../components/screen3/btm/btm2";
import List18Scr3 from "../components/screen3/list/list18_scr3";

export default class Screen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr24: "",
      indexPage: 0,
      crr: 0,
      error: 0
    };
  }

  showError = (data) => {
    this.setState({
      error: data
    })
  }

  takeIndexPage = (data) => {
    this.setState({
      indexPage: data + this.state.indexPage,
    });
  };

  takeCorrectCount = (a) => {
    this.setState({
      crr: a +0,
    });
  }

  render() {
    var list;
    var section;
    var btm;


    switch (this.state.indexPage) {
      case 0: {
        list = <List24Scr3 arr24={this.takeArr} />;
        section = <SectionCopyScr3 indexPage={this.takeIndexPage}/>;
        btm = <Btm1Scr3 indexPage={this.takeIndexPage} />;
        break;
      }

      case 1: {
        list = <List24Scr3 arr24={this.takeArr}/>;
        btm = <Btm2Scr3 indexPage={this.takeIndexPage}/>;
        break;
      }

      case 2: {
        list = <List18Scr3 listInput={this.state.arr24} error={this.showError} />;
        section = (
          <div className="error_section" style={{opacity: this.state.error}}>
          <AiFillWarning size={20} style={{color: "#FF0366", marginRight: "12px"}}/>
          <p> Wrong seed phase. Please try again</p>
        </div>
        )
        break;
      }
      default:
        break;
    }

    return (
      <div>
        <HeaderScreen3 />
        {list}
        {section}
        {btm}
      </div>
    );
  }

  takeArr = (data) => {
    this.setState({
      arr24: data,
    });
  };
}
