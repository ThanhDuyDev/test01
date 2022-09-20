import "../../css/screen1/list2_scr1.css"

export default function List2Screen1() {
  var userList =[
    {
      id: 1,
      name: "Eric R Hopper",
      money: "-850",
      currency: "USDT"
    },
    {
      id: 2,
      name: "Melisa S Brooker",
      money: "+850",
      currency: "MCOIN"
    },
    {
      id: 3,
      name: "Andy Lau",
      money: "-80",
      currency: "MCOIN"
    },
    {
      id: 4,
      name: "Eric R Hopper",
      money: "-850",
      currency: "USDT"
    }
  ]
  return (
    <div className="list_user">
      <ul className="list">
        {userList.map((item)=> (
          <li className="item" key={item.id}>
            <div className="info">
              <div className="info_img"/>
              <div>
                <p className="info_name">{item.name}</p>
                <p className="info_time">3 hours ago</p>
              </div>
            </div>
            <div className="money" id={colorMoney(item.money)}>{item.money} {item.currency}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function colorMoney(value) {
  if (value<0) return "money_red";
  return "money_green";
}
