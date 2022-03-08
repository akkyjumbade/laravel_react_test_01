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
import ImageInput from '../components/atoms/ImageInput'
import Button from '../components/atoms/Button'
import TextInput from '../components/atoms/TextInput'
import ContentEditor from '../components/ContentEditor'


const Index = () => (
   <>
      <Toolbar title={'Products'} createAction={{ to: 'create' }} />
      <DataTable url={'/api/products'}>
         <DataTable.Field name={'id'} title={'ID'} hidden={true} visible={false} />
         <DataTable.Field name={'title'} title={'Title'} Cell={cellProps => (
            <Link className='link-primary' to={`/products/edit/${cellProps.row.values?.id}`}>{cellProps.value}</Link>
         )} />
         <DataTable.Field name={'qty'} title={'Qty'} />
         <DataTable.Field name={'price'} title={'Price'} />
         <DataTable.Field name={'stock'} title={'Stock'} />
         <DataTable.Field name={'created_at'} title={'Created at'} />
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
            to: '/products'
         })
      },
   })
}

function CreateProduct ({ ...props }) {
   let { data: initialValues = {} } = useMatch()
   const { mutate: deleteAction, isLoading: isDeleting } = useDeleteAction(`/api/products/${initialValues?.id}`)
   const navigate = useNavigate()
   async function onSubmit(values, action) {
      action.setSubmitting(true)
      try {
         let url = `/api/products`
         if (values.id) {
            values._method = 'PATCH'
            url = `/api/products/${values.id}`
         }
         const { data } = await http.post(url, values)
         if (data?.message) {
            toast(data?.message)
            setTimeout(() => {
               navigate({
                  to: '/products'
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
   //    url: '/api/products'
   // })
   return (
      <>
      <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={onSubmit}>
         {({ values, errors, handleSubmit, handleChange, isSubmitting }) => (
            <div className='card p-3'>
               <fieldset>
                  <legend>{values?.id ? 'Edit product' : 'Create product'}</legend>
                  <Field label={'Title'} required={true} error={errors?.title}>
                     <TextInput value={values.title} onChange={handleChange('title')} />
                  </Field>
                  <Field label={'Qty'} required={true} error={errors?.qty}>
                     <TextInput value={values.qty} onChange={handleChange('qty')} />
                  </Field>
                  <Field label={'Price'} required={true} error={errors?.price}>
                     <TextInput type={'number'} value={values.price} onChange={handleChange('price')} />
                  </Field>
                  <Field label={'Stock'} required={true} error={errors?.stock}>
                     <TextInput type={'number'} value={values.stock} onChange={handleChange('stock')} />
                  </Field>
               </fieldset>
               <fieldset>
                  <legend>Images</legend>
                  <Field label={'Thumbnail'} required={true} error={errors?.address}>
                     <ImageInput maxSize={2018} />
                  </Field>
               </fieldset>
               <fieldset>
                  <legend>Content</legend>
                  <Field label={'Thumbnail'} required={true} error={errors?.address}>
                     <ContentEditor />
                  </Field>
               </fieldset>
               <fieldset className='d-flex gap-3'>
                  <Button variant='primary' className='btn bg-gradient-primary' disabled={isSubmitting} onClick={handleSubmit}>Submit</Button>
                  {values?.id && (
                  <Button variant='primary' className='btn btn-outline-secondary' disabled={isDeleting} onClick={deleteAction}>Delete</Button>
                  )}
               </fieldset>
            </div>
         )}
      </Formik>
      </>
   )
}

export default function ProductsScreen(props) {
   return (
      <div>
         <Index />
         <Outlet />
      </div>
   )
}

ProductsScreen.Create = CreateProduct
