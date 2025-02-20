import React from 'react'
import { useState,useEffect } from 'react'
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

   const [Gadgets, setGadgets] = useState([]);

   useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);



  return (
    <div>
        <h1 className="text-4xl font-extrabold text-center mb-10">Explore Cutting-Edge Gadgets</h1>
        {/* <p>{Gadgets.length}</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Gadgets.map((gadget) => (
          <Gadget gadget={gadget} key={gadget.product_id}></Gadget>
        ))}
      </div>
    </div>
  )
}

export default Gadgets