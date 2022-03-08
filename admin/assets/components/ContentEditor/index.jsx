import React, { Fragment, memo, useEffect, useRef } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorMenuBar from './EditorMenuBar';
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
// import {default as HistoryExt } from '@tiptap/extension-history'
import Placeholder from '@tiptap/extension-placeholder'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import StyledContentEditor from './StyledContentEditor';
import CustomTableCell from './extensions/CustomTableCell';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';


export default function ContentEditor (props){
   const { onChange } = props
   const editorRef = useRef()
   const editor = useEditor({
      extensions: [
         Document,
         Paragraph,
         Text,
         StarterKit,
         Highlight,
         Typography,
         Placeholder,
         Image,
         Dropcursor,
         Table.configure({
            resizable: true,
         }),
         TableRow,
         TableHeader,
         // Default TableCell
         // TableCell,
         // Custom TableCell with backgroundColor attribute
         CustomTableCell,
         // ImageExtension,
         // HistoryExt,
      ],
      content: '<p>Hello World! 🌎️</p>',
   })
   useEffect(() => {
      editor &&  editor.on('blur', ({ editor }) => {
         // The content has changed.
         const htmlContent = editorRef.current?.editorContentRef?.current?.innerHTML
         onChange && onChange({
            content: htmlContent
         })
      })
   }, [ editor, editorRef ])

   return (
      <StyledContentEditor>
         {editor && <EditorMenuBar editor={editor} />}
         <EditorContent ref={editorRef} editor={editor} />
      </StyledContentEditor>
   )
}

ContentEditor.propTypes = {
   // prop: PropTypes.string
}
ContentEditor.defaultProps = {
   // type: 'text'
}
