'use client';

import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';

interface CustomUploadProps {
  form: any;
  name: string;
  initialImage?: string;
}

export function CustomUpload({
  form,
  name,
  initialImage = '',
}: CustomUploadProps) {
  const [previewImg, setPreviewImg] = useState(initialImage);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPreviewImg(URL.createObjectURL(e.target.files[0]));
      form.setValue(name, e.target.files[0]);
    }
  };

  const handleUploadFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
      {previewImg !== '' && (
        <div className='relative aspect-square w-48 h-48'>
          <Image
            src={previewImg}
            alt={previewImg}
            fill
            className='rounded-lg object-cover'
          />
        </div>
      )}
      <div
        className='py-16 px-10 border-2 cursor-pointer border-bluePrimary border-dashed w-max rounded-sm'
        onClick={handleUploadFile}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 text-bluePrimary mx-auto mb-2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>
        <div className='text-center'>
          <span className='text-bluePrimary font-medium'>
            Drag and drop files here
          </span>
        </div>
        <input
          ref={inputRef}
          type='file'
          className='hidden'
          onChange={handleFileChange}
          accept='image/png, image/jpeg, image/jpg'
        />
      </div>
    </div>
  );
}
