// import React from 'react'
import { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import { toast } from 'react-toastify'

const List = (url) => {

  const [list,setList] = useState([]);

  const featchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success) {
      setList(response.data.data)
    }
    else 
    {
      toast.error("error")
    }
  }
  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await featchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else
    {
      toast.error("Error");
    }
  }


  useEffect(()=> {
    featchList();
  },[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
        <div className="list-table">
          <div className="list-table-formate title">
            <b>Image</b>
            <b>Name</b>
            <b>category</b>
            <b>Price</b>
            <b>Action</b>

          </div>
          {list.map((item, index) =>{
            return (
              <div key={index} className='list-table-formate'>
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p onClick={()=>removeFood(item._id)} className='cursor'>x</p>
              </div>
            )

          })}
        </div>
    </div>
  )
}

export default List
