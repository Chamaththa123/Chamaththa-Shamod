import React from "react";
import { InlineWidget } from "react-calendly";

export const Calender = () => {
  return (
    <div >
      <InlineWidget url="https://calendly.com/shamodchamaththa/30min" styles={{overflow:'-moz-hidden-unscrollable',height:'1000px'}}/>
    </div>
  )
}
