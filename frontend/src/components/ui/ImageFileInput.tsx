
interface InputProps {
  onFilesChange: (files: File[]) => void
}

export default function ImageFileInput({onFilesChange}: InputProps) {
  return (
      <label
        className="text-nowrap inline-flex w-min p-4 items-center font-bold text-white bg-[var(--accent-color)] rounded-2xl cursor-pointer hover:bg-[var(--primary-color)]"
        // htmlFor="photos"
      >
        Add photos
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const fileList = e.target.files;
            if (!fileList) {
              return
            }
            const files = [...fileList]
            onFilesChange(files)
          }}
          className="hidden"
        />
      </label>
  );
}
