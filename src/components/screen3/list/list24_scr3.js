import { Component } from "react";
import eng from "../../../json/eng.json";

import "../../../css/screen3/list/list.css"
import "../../../css/screen3/list/list24_scr3.css"


export default class List24Scr3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr24: this.random24(eng),
    };
    this.props.arr24(this.state.arr24);
  }

  render() {
    return (
      <div className="word_list_container">
        <ul className="word_list">
          {this.state.arr24.map((item) => (
            <li key={item.index} className="word_item">
              <div className="word_index">{item.index}</div>
              <p className="word">{item.word}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  random24(arr) {
    var result = [];
    var index = 1;
    result.push({ word: this.randomEng(arr), index: 0 });
    while (index < 24) {
      var obj = this.randomEng(arr);
      var dup = this.dupEng(result, obj);
      if (dup === 0) {
        result.push({ word: obj, index: index });
        index++;
      }
    }
    return result;
  }

  randomEng(arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  dupEng(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        return 1;
      }
      break;
    }
    return 0;
  }
}
