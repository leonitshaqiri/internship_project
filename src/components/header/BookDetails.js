import { Button, TextField } from "@mui/material";
import { useParams } from "react-router-dom";

const BookDetails = (props) => {
  const { bookId } = useParams();
  console.log(props);

  return (
    <div className="w-full flex flex-col items-center pb-10">
      {bookId}
      <h1>asdhahdahd</h1>
      <h1 className="text-2xl">Edit Book</h1>
      <div className="w-1/3 flex flex-col gap-y-3">
        <label>Book Name</label>
        <TextField className="w-full" />

        <label>Author</label>
        <TextField className="w-full" />

        <label>Description</label>
        <TextField className="w-full" />

        <label>Published Year</label>
        <TextField className="w-full" />

        <button className="w-full border hover:border-amber-300 hover:text-amber-300 rounded p-1 text-sm">
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
