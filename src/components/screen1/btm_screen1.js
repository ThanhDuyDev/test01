import React from "react";
import Sheet from "react-modal-sheet";
import { useNavigate } from "react-router-dom";

import "../../css/screen1/btm_screen1.css"
import List1Screen2 from "../screen2/list1_scr2";

var a = window.innerHeight;
var snapPoints = [];
snapPoints.push(a*0.5, a*0.2, 0, 0);

export default function BtmScreen1() {
  

 
  const ref = React.useRef();
  var navigate = useNavigate();
  const snapDefault = () => ref.current?.snapTo(1);
  function navigateToScreen2 (height) {
    if(height===a/2) {
      navigate("/screen2");
    }
  }

  return (
    <div>
      <Sheet
      isOpen={"true"}
      snapPoints={snapPoints}
      onClose={snapDefault}
      ref={ref}
      initialSnap={1}
      onSnap={i=>{
        console.log(i);
        navigateToScreen2(snapPoints[i]);
        
      }}
      >
        <Sheet.Container style={{borderRadius: "15px 15px 0 0"}}>
          <Sheet.Header />
          <Sheet.Content>
            <List1Screen2/>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </div>
  );
}
