import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {
    const data=[
        {
          id:1,
          img:"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
          isNew:true,
          title:"long Coat",
          oldPrice:19,
          price:12,
      
        },
        {
          id:2,
          img:"https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title:"long Coat",
          oldPrice:19,
          price:12,
      
        },
        {
          id:3,
          img:"https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title:"long Coat",
          oldPrice:19,
          price:12,
      
        },
        {
          id:4,
          img:"https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title:"long Coat",
          oldPrice:19,
          price:12,
      
        }
      ];
      function H(n){
         return (
            <Card 
            key={n.id} 
            id={n.id}
            img={n.img}
            img2={n.img2}
            isNew={n.isNew}
            title={n.title}
            oldPrice={n.oldPrice}
            price={n.price}
          
            />
         );
      }
  return (
    <div className='list'>
      {data.map(H)}
    </div>
  )
}

export default List;
