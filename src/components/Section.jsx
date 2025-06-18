import React, { useEffect, useState } from 'react'

const Section = () => {
const [data,setData] = useState([])

async function change() {
    let result = await fetch("https://fakestoreapi.com/products");
    let res = await result.json();
    console.log(res);
    setData(res);
}
useEffect(()=>{
    change();
},[])

  return (
    <section>
        {data.map((item)=>{
           <div key={item.key}>
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <p>{item.price}</p>
           </div> 
        })}
    </section>
  )
}

export default Section