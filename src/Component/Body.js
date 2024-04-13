import React,{ useEffect, useState } from 'react'
import ImageCard from './ImageCard';


export default function Body() {
    
    const[listOfLand,setListOfLand] =useState([]);
    useEffect(()=>{
        fetchData();
        }, [] );

        const fetchData = async () => {
            const data = await fetch(
              "https://prod-be.1acre.in/lands/?ordering=-updated_at&page=1&page_size=10"
            );
        
            const json = await data.json();
            setListOfLand(json.results);
            console.log(json.results);
        }
        
  return (
   listOfLand.map(landlist => <ImageCard landData={landlist} />)
  )
}
