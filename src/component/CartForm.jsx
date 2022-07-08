import React from 'react'
import { useForm } from "react-hook-form";


const CartForm = ({onSubmit})=>{

    const { register, handleSubmit } = useForm();
    
    return <>
      <section className='cartformcontainer'>
        <form className='cartform-form' onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName",{required:true})} defaultValue={'Name'} />
        <input {...register("email",{required:true})} defaultValue={"mynameis@email.com"} />
        <input {...register("tel",{required:true})} defaultValue={"11-412-1**"}/>
        <input type="submit" />
        </form>
      </section>
     </>
}


export default CartForm