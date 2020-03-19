import React from "react"
import "../utils/css/components/theme.scss"

function Scroll(props) {
  return (
    <div>
      <svg
        id="scroll"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="37"
        viewBox="0 0 18 37"
      >
        <title>Scroll down</title>
        <g fill={props.text}>
          <g transform="translate(-232 -236)translate(233 237)">
            <rect
              class="stroke"
              width="16"
              height="25"
              rx="7.2"
              style="stroke-width:2;"
            />
            <rect class="fill" x="7" y="4" width="2" height="5" rx="1" />

            <polyline
              class="stroke"
              points="5 33 8 36 11 33"
              style="stroke-linejoin:round;"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}
export default Scroll
