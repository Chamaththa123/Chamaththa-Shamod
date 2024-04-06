import React, { useState, useEffect } from "react";

import logo from './../assets/images/logo.png'

export const Loader = () => {


  return (
    <div  style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
    }}>
    
        <img
          src={logo}
          className=" md:w-[400px] w-[88px] loading-image "
          alt=""
        />
    
    </div>
  );
};
