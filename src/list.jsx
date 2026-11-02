import React from 'react'

function list() {
    let tempData = ["Apple", "Banana", "Grapes", "Mango", "Kiwi"];

  return (
    <div>
       {
       (tempData.length == 0 ?(
        <h1>No DATA</h1>
    ):(
        tempData.map((item,i) => {
            if (i==1) {
                return <i>{item}</i>;
            } else {
                return <h1>{item}</h1>;
            }
        })
            
        ))
      }
    </div>
  );
}

export default list
