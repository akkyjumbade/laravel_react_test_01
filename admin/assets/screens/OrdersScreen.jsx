import DataTable from '../components/Table/DataTable'
import { useMutation, useQuery } from 'react-query'
import Table from '../components/Table'
import Toolbar from '../components/Toolbar'
// import Form from '../components/Form'
import { FieldArray, Formik, useFormik } from 'formik'
import { memo } from 'react'
import { Link, Outlet, useMatch, useNavigate } from '@tanstack/react-location'
import { http } from '../utils'
import Field from '../components/Form/Field'
import { toast } from 'react-toastify';


const Index = () => (
   <>
      <Toolbar title={'Orders'} createAction={{ to: 'create' }} />
      <DataTable url={'/api/orders'}>
         {/* <DataTable.Field name={'id'} title={'ID'} /> */}
         <DataTable.Field name={'id'} title={'Order ID'} Cell={cellProps => (
            <Link className='link-primary' to={`/orders/edit/${cellProps.row.values?.id}`}>{cellProps.value}</Link>
         )} />
         <DataTable.Field name={'user.name'} title={'Customer'} />
         <DataTable.Field name={'user.email'} title={'Customer email'} />
         <DataTable.Field name={'user.phone_number'} title={'Customer phone'} />
         <DataTable.Field name={'items'} title={'Items'} Cell={cellProps => (
            <ol>
               {cellProps.value?.map(row => (
                  <li>
                     <div>
                        {row?.product?.title}
                     </div>
                     <div>
                        {row?.price} x {row?.qty}
                     </div>
                  </li>
               ))}
            </ol>
         )} />
         <DataTable.Field name={'subtotal'} title={'Subtotal'} />
         <DataTable.Field name={'total'} title={'Total'} />
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
            to: '/orders'
         })
      },
   })
}

const MultipleFields = ({ values = [], }) => {
   return (
      <div>

      </div>
   )
}

function CreateOrder ({ ...props }) {
   let { data: initialValues = {} } = useMatch()
   const { data: users, isLoading: isLoadingUsers } = useQuery(['/api/users'])
   const { data: products, isLoading: isLoadingProducts } = useQuery(['/api/products'])

   const { mutate: deleteAction, isLoading: isDeleting } = useDeleteAction(`/api/orders/${initialValues?.id}`)
   const navigate = useNavigate()
   async function onSubmit(values, action) {
      action.setSubmitting(true)
      try {
         let url = `/api/orders`
         if (values.id) {
            values._method = 'PATCH'
            url = `/api/orders/${values.id}`
         }
         const { data } = await http.post(url, values)
         if (data?.message) {
            toast(data?.message)
            setTimeout(() => {
               navigate({
                  to: '/orders'
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
      <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={onSubmit}>
         {({ values, errors, handleSubmit, handleChange, isSubmitting }) => (
            <div className='card p-3'>
               <fieldset>
                  <legend>{values?.id ? 'Edit order' : 'Create order'}</legend>
                  <Field label={'Customer'} required={true} error={errors?.user_id}>
                     <select className='form-control' value={values.user_id} onChange={handleChange('user_id')}>
                        <option value="">Choose</option>
                        {users?.data?.map(user => (
                           <option key={`option_${user.id}`} value={user.id}>{user.name}</option>
                        ))}
                     </select>
                  </Field>
                  {/* {JSON.stringify({values, errors})} */}
                  <Field label={'Products'} required={true} error={errors?.items}>
                     <FieldArray name='items' render={arrayHelpers => (
                        <div>
                           <table className='w-full table table-bordered table-sm'>
                              {values.items?.map((_row, _rowIndex) => (
                              <tr key={`fieldset_${_rowIndex}`}>
                                 <td>
                                    <Field label={'Product'} required={true} error={errors && errors[`items.${_rowIndex}.product_id`]}>
                                       <select className='form-control' value={values.items[_rowIndex]?.product_id} onChange={handleChange(`items[${_rowIndex}].product_id`)}>
                                          <option value="">Choose</option>
                                          {products?.data?.map(_item => (
                                             <option key={`product_${_item.id}`} value={_item.id}>{_item.title}</option>
                                          ))}
                                       </select>
                                    </Field>
                                 </td>
                                 {/* <td>
                                    <Field label={'Price'} required={true} error={errors && errors[`items.${_rowIndex}.price`]}>
                                       <input style={{ width: '150px' }} type={'number'} className='form-control' disabled value={products?.data?.find(r => r.id === values.items[_rowIndex]?.item_id)?.price} onChange={handleChange(`items[${_rowIndex}].price`)} />
                                    </Field>
                                 </td> */}
                                 <td>
                                    <Field label={'Qty'} required={true} error={errors && errors[`items.${_rowIndex}.qty`]}>
                                       <input style={{ width: '100px' }} type={'number'} className='form-control' value={values.items[_rowIndex]?.qty} onChange={handleChange(`items[${_rowIndex}].qty`)} />
                                    </Field>
                                 </td>
                                 <td>
                                    <div>
                                    <button type="button" className='btn btn-outline-danger mt-2 btn-sm ' onClick={() => arrayHelpers.push({  })} >
                                       Remove
                                    </button>
                                    </div>
                                 </td>
                              </tr>
                              ))}
                           </table>
                           <button type="button" className='btn btn-secondary btn-sm ' onClick={() => arrayHelpers.push({  })} >
                              +
                           </button>
                        </div>
                     )} />
                  </Field>

                  <Field label={'Total'} required={true} error={errors?.total}>
                     <input type={'number'} className='form-control' value={values.total} onChange={handleChange('total')} />
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

export default function OrdersScreen(props) {
   return (
      <div>
         <Index />
         <Outlet />
      </div>
   )
}

OrdersScreen.Create = CreateOrder
