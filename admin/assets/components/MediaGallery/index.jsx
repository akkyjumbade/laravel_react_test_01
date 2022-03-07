import { useState, useEffect, forwardRef } from 'react'
import styled from "@emotion/styled"
import { useMutation, useQuery } from 'react-query'
import Button from "../atoms/Button"
import FileuploadControl from "./FileuploadControl"
import MediaItem from "./MediaItem"
import { css } from '@emotion/react'

const GalleryStyle = styled.dialog`
   background: white;
   width: 100%;
   height: 65vh;
   position: fixed;
   left: 0;
   bottom: 0;
   ${props => {
      if(props.open) {
         return css`
            display: flex;
         `
      }
      return css`
         display: none;
      `
   }}
   flex-direction: column;
   padding: 0;
   main {
      flex: 1;
      overflow: auto;
      display: grid;
      padding: 1rem;
      // grid-template-columns: minmax(200px, 250px) 1fr;
      gap: 1rem;
      ol {
         margin: 1rem 0;
         display: grid;
         grid-template-columns: repeat(6, 1fr);
         gap: 1rem;
         li {
            figure {
               display: flex;
               align-items: center;
               flex-direction: column;
               picture {
                  max-width: 64px;
                  display: flex;
                  margin-bottom: 4px;
               }
               figcaption {
                  font-size: 13px;
               }
            }
         }
      }
   }
   footer {
      padding: 1rem;
   }
`
const useGalleryQuery = () => useQuery([ 'api/attachments', ], {
   retry: 3,
   enabled: false,
   placeholderData: () => ({
      data: (new Array(30)).fill({ title: 'file name', url: '//sdf', })
   })
})


function MediaGallery(props) {
   const { data, isLoading, } = useGalleryQuery()
   const [ isOpened, setIsOpened ] = useState(false)
   useEffect(() => {
      isOpened ? document.body.classList.add('dialog_opened') : document.body.classList.remove('dialog_opened')
   }, [ isOpened ])
   return (
      <GalleryStyle open={isOpened}>
         <header></header>
         <main>
            <aside>

            </aside>
            <div>
               <FileuploadControl />
               <ol>
                  {data?.data?.map((file, fileIndex) => (
                  <li key={`file_${fileIndex}`}>
                     <MediaItem file={file} />
                  </li>
                  ))}
               </ol>
               {JSON.stringify({ data, isLoading, })}
            </div>
         </main>
         <footer className={' bg-gray-100 border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800 flex items-center justify-between'}>
            <div>

            </div>
            <div>
                <Button onClick={() => setIsOpened(prev => !prev)}>Choose</Button>
            </div>
         </footer>
      </GalleryStyle>
   )
}
export default forwardRef((props ,ref) => (<MediaGallery ref={ref} {...props} />))
