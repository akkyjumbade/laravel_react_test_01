import { useMatch, useNavigate } from '@tanstack/react-location'
import { Formik } from 'formik'
import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import Button from '../../components/atoms/Button'
import ImageInput from '../../components/atoms/ImageInput'
import TextInput from '../../components/atoms/TextInput'
import Form from '../../components/Form'
import Field from '../../components/Form/Field'
import FormContext, { FormConsumer } from '../../components/Form/FormContext'
import { http } from '../../utils'

const useDeleteAction = (url) => {
   const navigate = useNavigate()
   return useMutation(async (payload) => {
      if (!confirm('Seriously?')) {
         return false
      }
      const { data } = await http.post(url, { _method: 'DELETE' })
      return data
   }, {
      onSuccess({ data }) {
         toast(data?.message)
         navigate({
            to: '/users'
         })
      },
   })
}

export default function CreateUser() {
   let { data: initialValues = {} } = useMatch()
   const { mutate: deleteAction, isLoading: isDeleting } = useDeleteAction(`/api/users/${initialValues?.id}`)
   const navigate = useNavigate()
   async function onSubmit(values, action) {
      action.setSubmitting(true)
      try {
         let url = `/api/users`
         if (values.id) {
            values._method = 'PATCH'
            url = `/api/users/${values.id}`
         }
         const { data } = await http.post(url, values)
         if (data?.message) {
            toast(data?.message)
            setTimeout(() => {
               navigate({
                  to: '/users'
               })
            }, 600);
         }
      } catch (error) {
         action.setErrors(error.response?.data?.errors)
      } finally {
         action.setSubmitting(false)
      }
   }
   return (
      <>
      <Form initialValues={{ username: '' }}>
         <fieldset>
            <legend>{initialValues?.id ? 'Edit user' : 'Create user'}</legend>
            <Form.Consumer>
               {({ values, handleChange }) => (
                  <div>
                     {JSON.stringify({ values })}
                     <input vlaue={values.username} onChange={handleChange('username')} />
                  </div>
               )}
            </Form.Consumer>
            <Field label={'Name'} required={true} name={'username'} Component={TextInput} />
            <Field label={'Email'} required={true} name={'email'} Component={TextInput} />
            <Field label={'Phone number'} required={true} name={'phone_number'} Component={TextInput} />
            <Field label={'Password'} required={true} name={'password'} Component={TextInput} />
         </fieldset>
         <fieldset>
            <legend>{'Images'}</legend>
            <Field label={'Name'} required={true} name={'username'} Component={TextInput} />
            <Field label={'Email'} required={true} name={'email'} Component={TextInput} />
            <Field label={'Phone number'} required={true} name={'phone_number'} Component={TextInput} />
            <Field label={'Password'} required={true} name={'password'} Component={TextInput} />
         </fieldset>
         <fieldset>
            <legend>Images</legend>
            <Field label={'Thumbnail'} name={'image'} required={true} Component={ImageInput} />
         </fieldset>
         <fieldset>
            <legend>Address</legend>

         </fieldset>
      </Form>
      {/* <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={onSubmit}>
         {({ values, errors, handleSubmit, handleChange, isSubmitting }) => (
            <div >
               <fieldset>
                  <legend>{values?.id ? 'Edit user' : 'Create user'}</legend>
                  <Field label={'Name'} required={true} error={errors?.name}>
                     <TextInput value={values.name} onChange={handleChange('name')} />
                  </Field>
                  <Field label={'Email'} required={true} error={errors?.email}>
                     <TextInput type={'email'} value={values.email} onChange={handleChange('email')} />
                  </Field>
                  <Field label={'Phone number'} required={true} error={errors?.phone_number}>
                     <TextInput type={'tel'} value={values.phone_number} onChange={handleChange('phone_number')} />
                  </Field>
                  <Field label={'Password'} required={true} error={errors?.password}>
                     <TextInput type={'password'} value={values.password} onChange={handleChange('password')} />
                  </Field>
               </fieldset>
               <fieldset>
                  <legend>Images</legend>
                  <Field label={'Thumbnail'} required={true} error={errors?.address}>
                     <ImageInput maxSize={2018} />
                  </Field>
               </fieldset>
               <fieldset>
                  <legend>Address</legend>
                  <Field label={'Address'} required={true} error={errors?.address}>
                     <textarea value={values.address} onChange={handleChange('address')} />
                  </Field>
               </fieldset>
               <fieldset className='d-flex gap-3'>
                  <Button type='button' className='btn bg-gradient-primary' disabled={isSubmitting} onClick={handleSubmit}>Submit</Button>
                  {values?.id && (
                  <Button type='button' disabled={isDeleting} onClick={deleteAction}>
                     Delete
                  </Button>
                  )}
               </fieldset>
            </div>
         )}
      </Formik> */}
      </>
   )
}
