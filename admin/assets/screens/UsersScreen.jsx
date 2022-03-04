import DataTable from '../components/Table/DataTable'
import { useQuery } from 'react-query'
import Table from '../components/Table'
import Toolbar from '../components/Toolbar'
// import Form from '../components/Form'
import { Formik, useFormik } from 'formik'
import { memo } from 'react'
import { Outlet } from '@tanstack/react-location'
import { http } from '../utils'
import Field from '../components/Form/Field'

const Index = () => (
   <>
      <Toolbar title={'Users'} createAction={{ to: 'create' }} />
      <DataTable url={'/api/users'}>
         <DataTable.Field name={'id'} title={'ID'} />
         <DataTable.Field name={'name'} title={'Name'} />
         <DataTable.Field name={'email'} title={'Email'} />
         <DataTable.Field name={'phone_number'} title={'Phone number'} />
         <DataTable.Field name={'created_at'} title={'Regd. at'} />
      </DataTable>
   </>
)

function CreateUser () {
   async function onSubmit(values, action) {
      action.setSubmitting(true)
      try {
         const { data } = await http.post(`/api/users`, values)
      } catch (error) {
         action.setErrors(error.response?.data?.errors)
      } finally {
         action.setSubmitting(false)
      }
   }
   // const form = useFormik({
   //    initialValues: {},
   //    url: '/api/users'
   // })
   return (
      <>
      <Formik initialValues={{}} onSubmit={onSubmit}>
         {({ values, errors, handleSubmit, handleChange }) => (
            <div className='card p-3'>
               {JSON.stringify(values, errors)}
               <fieldset>
                  <legend>Create user</legend>
                  <Field label={'Name'} required={true} error={errors?.name}>
                     <input className='form-control' value={values.name} onChange={handleChange('name')} />
                  </Field>
                  <Field label={'Email'} required={true} error={errors?.email}>
                     <input type={'email'} className='form-control' value={values.email} onChange={handleChange('email')} />
                  </Field>
                  <Field label={'Phone number'} required={true} error={errors?.phone_number}>
                     <input type={'tel'} className='form-control' value={values.phone_number} onChange={handleChange('phone_number')} />
                  </Field>
                  <Field label={'Password'} required={true} error={errors?.password}>
                     <input type={'password'} className='form-control' value={values.password} onChange={handleChange('password')} />
                  </Field>
               </fieldset>
               <fieldset >
                  <button type='button' onClick={handleSubmit}>Submit</button>
               </fieldset>
            </div>
         )}
      </Formik>
      </>
   )
}

export default function UsersScreen(props) {
   return (
      <div>
         <Index />
         <Outlet />
      </div>
   )
}

UsersScreen.Create = memo(CreateUser)
