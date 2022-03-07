import { useMutation } from "react-query"
import { http } from "../../utils"

const useUploadGalleryQuery = () => useMutation(async payload => {
   const { data } = await http.post(`/api/attachments`, payload)
   return data
}, {
   onSuccess() {

   }
})


export default function FileuploadControl() {
   const { data, isLoading, mutate } = useUploadGalleryQuery()
   return (
      <div className="border border-dashed border-gray-500 relative">
         <input type="file" multiple="" className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50" />
         <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
            <h4>
               Drop files anywhere to upload
               <br />or
            </h4>
            <p className="">Select Files</p>
         </div>
      </div>
   )
}
