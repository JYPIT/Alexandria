import { useParams } from "react-router-dom";

interface RouteParams {
  bookId: string;
}

function Book() {
  const { bookId } = useParams();
  return <h1>Book: {bookId}</h1>;
}

export default Book;
