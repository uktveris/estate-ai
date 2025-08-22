import AddListingForm from "@/components/AddListingForm";

export default function AddListingPage() {
  return (
    <div className="flex items-center flex-col justify-center h-full my-auto gap-4">
      <h1 className="text-4xl font-bold px-4 self-center">Add new property listing</h1>
      <AddListingForm />
    </div>
  )
}
