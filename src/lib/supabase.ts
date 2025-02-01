import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!!
);

const createId = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const supabaseUploadFile = async (
  file: File | string,
  bucket: 'profile' | 'book'
) => {
  const fileName = `img/${createId(6)}.jpg`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: '9000',
      upsert: false,
    });

  return {
    data,
    error,
    fileName,
  };
};

export const supabaseDeleteFile = async (
  fileName: string,
  bucket: 'profile' | 'book'
) => {
  const filePath = `img/${fileName}`;
  const { data, error } = await supabase.storage
    .from(bucket)
    .remove([filePath]);

  return {
    data,
    error,
  };
};
