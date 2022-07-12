import React from 'react'
import { useForm } from 'react-hook-form'

const CartForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return <>
      <section className='cartformcontainer'>
        <form className='cartform-form' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-errors">
        <input {...register('firstName', { required: true })} placeholder={'Name'} />
        {errors.firstName && <p>Name field is required</p>}
        </div>
        <div className="form-errors">
        <input {...register('email', { required: true })} placeholder={'mynameis@email.com'}/>
        {errors.email && <p>Email field is required</p>}
        </div>
        <div className="form-errors">
        <input {...register('tel', { required: true })} placeholder={'11-412-1**'}/>
        {errors.tel && <p>Tel field is required</p>}
        </div>
        <input type="submit" />
        </form>

      </section>
     </>
}
// defaultValue

export default CartForm
