import { useRef } from 'react'
import styled from "@emotion/styled"
import MediaGallery from "../MediaGallery"
import { Portal } from 'react-portal'
import { FileUpload } from '@mui/icons-material'

const StyledImageInput = styled.div`
   max-width: 500px;
   --preview-size: 144px;
   picture {
      display: flex;
      width: var(--preview-size);
      height: var(--preview-size);
      background: lightgray;
   }
`

export default function ImageInput(props) {
   const galleryRef = useRef()
   function openGalleryWindow() {
      galleryRef.current?.setIsOpened(true)
   }
   return (
      <StyledImageInput>
         <div onClick={openGalleryWindow} className="flex items-center cursor-pointer gap-4 p-4 w-full bg-white rounded-lg border border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <picture className="rounded-lg ">
               <img src="" alt="" />
            </picture>
            <div>
               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Drop or click to upload file here.</p>
               <div className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 md:flex flex-col ">
                  <span>Max file size: 2MB </span>
                  <span className="ml-3"> Aspect ration: 4/3</span>
               </div>
               <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Upload
                  <FileUpload />
               </a>
            </div>
         </div>
         <Portal>
            <MediaGallery ref={galleryRef} />
         </Portal>
      </StyledImageInput>
   )
}
