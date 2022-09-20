import "../../css/screen2/list1_scr2.css"

export default function List1Screen2() {
  var arrList = [];
  addArr(40 , arrList);
  return (
    <div className="listapp_container">
      <ul className="listapp">
      {arrList.map((item) => (
        <li className="listapp_item" key={item.id}>
          <div className="listapp_img" id={item.img}/>
          <p className="listapp_text">{item.name}</p>
        </li>
      ))}
      </ul>


    </div>
  )
}

function addArr(numbers, arr) {
  var colorList = ["appRed", "appBlue", "appGreen"];
  for(var i=0; i<numbers; i++) {
    var x = Math.floor(Math.random()*3);
    arr.push({"name" : "DApp here", "img" : colorList[x], "id" : i});
  }
  return arr;
}