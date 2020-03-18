import React from "react"

function videoBox (props){
    return(
        <div>
            <iframe src="" width="800" height="400"></iframe>
            <h4>{props.video}</h4>
        </div>
    )
}
export default videoBox
