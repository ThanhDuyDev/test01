import "../../css/screen1/list1_scr1.css"

export default function List1Screen1() {
  var list = ["blue", "orange", "green"];

  return(
    <div className="list1_screen1">
    <ul className="list1">
      {list.map((item) => (
        <li className="list1_item" id={item} key={item}>
          <div className="list1_item_img" />
          <div className="list1_item_info">
            <p className="list1_item_name">Meta Wallet</p>
            <p className="list1_item_money">90,500 MCOIN</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}