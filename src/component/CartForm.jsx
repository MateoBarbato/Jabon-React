import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";


const CartForm = ()=>{

    const [form, setForm] = useState(true);
     

    const { register, handleSubmit, setValue } = useForm();
    
    const onSubmit = (data)=>{
      setForm(false)
    }
    
    return <>
      {form
      ?<form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName",{required:true})} defaultValue={'Name'} />
      <input {...register("email",{required:true})} defaultValue={"mynameis@email.com"} />
      <input {...register("tel",{required:true})} defaultValue={"11-412-1**"}/>
      <input type="submit" />
      </form>
      :<h4>Tu id es :</h4>}
      </>
    ;
}

export default CartForm