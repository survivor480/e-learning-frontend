import { useState, useRef, RefObject, ChangeEvent } from 'react';
import ReactQuill from 'react-quill';
import AddIcon from '@mui/icons-material/Add';

export default function TextEditor () {
  const [editorHtml, setEditorHtml] = useState<string>('');
  const [hovered, setHovered] = useState<boolean>(false);
  const quillRef: RefObject<ReactQuill> = useRef(null);
  const fileInputRef: RefObject<HTMLInputElement> = useRef(null);
  let toolbarSettings = { toolbar: false };
  let toolbarFormats = ['image'];

  const handleEditorChange = (html: string) => {
    setEditorHtml(html);
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const quill = quillRef.current?.getEditor();
        if (quill) {
          const range = quill.getSelection();
          if (range) {
            quill.insertEmbed(range.index, 'image', e.target?.result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className='relative p-[20px]' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className="rounded-[10px] relative border-[1px] border-[#64748b] bg-[#1e293b] overflow-none outline-0 focus:ring-0 focus:border-transparent !important">
        <ReactQuill
          ref={quillRef}
          value={editorHtml}
          onChange={handleEditorChange}
          modules={toolbarSettings}
          formats={toolbarFormats}
          bounds={'.app'}
          className='rounded-[10px] border-none outline-0 focus:ring-0'
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className='hidden'
          onChange={handleImageUpload}
        />
      </div>
      {hovered && (
        <button className='absolute top-[50%] right-[10px] translate-y-[-50%] z-[10] bg-[#475569] rounded-[5px]'
          onClick={handleAddImageClick}
          aria-label='Add Image'
        >
          <AddIcon />
        </button>
      )}
    </div>
  );
};
