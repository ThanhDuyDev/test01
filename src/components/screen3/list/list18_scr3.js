import React from "react";

import "../../../css/screen3/list/list2.css";
import { GrFormNext } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import DialogAgree from "../../screen3/btm/dilog_agree";


import "../../../css/screen3/btm/btm3.css"

export default class List18Scr3 extends React.Component {
  constructor(props) {
    super(props);
    var array = this.random6(this.props.listInput);
    this.state = {
      list: array[0],
      active: 0,
      correctCount: array[1],
      btnIndex: 0,
    };

    // this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickSubmit = () => {
    if(this.state.correctCount === 6) {
      this.setState({
        btnIndex: this.state.btnIndex + 1
      })

    } else {
      this.props.error(1)
    }
  }

  

  random6(arr) {
    var result = [];
    var count = 0;
    var arr18 = this.random18(arr);

    for (var i = 0; i < 6; i++) {
      var listSub = [];
      listSub.push(arr18[3 * i], arr18[3 * i + 1], arr18[3 * i + 2]);
      var random = Math.floor(Math.random() * 3);
      var random2 = Math.floor(Math.random() * 3);
      if (random === random2) {
        count++;
      }
      var obj = {
        list: listSub,
        randomIndex: listSub[random2].index,
        number: random,
        row: i,
        correct: random === random2 ? true : false,
      };
      result.push(obj);
    }
    return [result, count];
  }

  random18(arr) {
    var result = [];
    var index = 0;
    result.push(this.randomEng(arr));

    while (index < 17) {
      var obj = this.randomEng(arr);
      var dup = this.dupEng(result, obj);
      if (dup === 0) {
        result.push(obj);
        index++;
      }
    }
    return result;
  }

  randomEng = (arr) => {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  dupEng(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        return 1;
      }
    }
    return 0;
  }

  render() {
    var list = this.state.list;
    var correctCount = this.state.correctCount;
    console.log(correctCount);
    var dialog;
    var btnIndex = this.state.btnIndex;
    var button;
    switch (btnIndex) {
      case 0: {
        button = (
          <button
            className="btn_able btn_submit"
            onClick={this.onClickSubmit}
          >
            submit
          </button>
        );
        break;
      }

      case 1: {
          setTimeout(() => {
            this.setState({
              btnIndex: this.state.btnIndex +1
            })
          }, 2000) 
         button = (
          <button
            className="btn_able btn_submit"
            disabled
            style={{ opacity: 0.3 }}
          >
            <AiOutlineLoading3Quarters size={24} />
          </button>
        );
        break;
      }

      case 2: {
        dialog = <DialogAgree open={this.state.openDialog}/>
      break;
      }
      default:
    }
    return (
      <div>
        <div className="word_list_container">
          <ul className="word_list2">
            {list.map((obj, i) => (
              <li className="word_list2_row" key={i}>
                <div className="row_num">
                  <p>{obj.randomIndex}</p>
                </div>
                <ul className="row_list">
                  {obj.list.map((o, j) => (
                    <li
                      key={j}
                      className="one_word"
                      onClick={() => {
                        obj.row = i;
                        obj.number = j;
                        this.setState({ active: this.state.active + 1 });
                        if (
                          o.index === obj.randomIndex &&
                          obj.correct === false
                        ) {
                          obj.correct = true;
                          this.setState({
                            correctCount: correctCount + 1,
                          });
                        } else if (
                          o.index !== obj.randomIndex &&
                          obj.correct === true
                        ) {
                          obj.correct = false;
                          this.setState({
                            correctCount: correctCount - 1,
                          });
                        } else {
                          this.setState({
                            correctCount: correctCount,
                          });
                        }
                      }}
                      style={{
                        backgroundColor:
                          obj.row === i &&
                          obj.number === j &&
                          this.state.active >= 0
                            ? "#BBCFFB"
                            : "#fff",
                      }}
                    >
                      <p>{o.word}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="btm_screen3">
        <div className="section_help_ques">
          <p>How does it work?</p>
          <GrFormNext size={22} />
        </div>
        <div className="section_button">{button}</div>
        {dialog }
      </div>
      </div>
    );
  }
}
