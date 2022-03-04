import DataTable from '../components/Table/DataTable'
import { useMutation, useQuery } from 'react-query'
import Table from '../components/Table'
import Toolbar from '../components/Toolbar'
// import Form from '../components/Form'
import { Formik, useFormik } from 'formik'
import { memo } from 'react'
import { Link, Outlet, useMatch, useNavigate } from '@tanstack/react-location'
import { http } from '../utils'
import Field from '../components/Form/Field'
import { toast } from 'react-toastify';


const Index = () => (
   <>
      <Toolbar title={'Users'} createAction={{ to: 'create' }} />
      <DataTable url={'/api/users'}>
         <DataTable.Field name={'id'} title={'ID'} />
         <DataTable.Field name={'name'} title={'Name'} Cell={cellProps => (
            <Link className='link-primary' to={`/users/edit/${cellProps.row.values?.id}`}>{cellProps.value}</Link>
         )} />
         <DataTable.Field name={'email'} title={'Email'} />
         <DataTable.Field name={'phone_number'} title={'Phone number'} />
         <DataTable.Field name={'address'} title={'Address'} />
         <DataTable.Field name={'created_at'} title={'Regd. at'} />
      </DataTable>
   </>
)

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

function CreateUser ({ ...props }) {
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
   // const form = useFormik({
   //    initialValues: {},
   //    url: '/api/users'
   // })
   return (
      <>
      <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={onSubmit}>
         {({ values, errors, handleSubmit, handleChange, isSubmitting }) => (
            <div className='card p-3'>
               <fieldset>
                  <legend>{values?.id ? 'Edit user' : 'Create user'}</legend>
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
               <fieldset>
                  <h5>Address</h5>
                  <Field label={'Address'} required={true} error={errors?.address}>
                     <textarea className='form-control' value={values.address} onChange={handleChange('address')} />
                  </Field>
               </fieldset>
               <fieldset className='d-flex gap-3'>
                  <button type='button' className='btn bg-gradient-primary' disabled={isSubmitting} onClick={handleSubmit}>Submit</button>
                  {values?.id && (
                  <button type='button' className='btn btn-outline-secondary' disabled={isDeleting} onClick={deleteAction}>Delete</button>
                  )}
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
