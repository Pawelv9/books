import BookShow from './BookShow'

function BookList({ books }) {
  const renderedBooks = books.map((book) => {
    return <BookShow key={books.id} book={book}/>
  })

  return (
    <div className='book-list'>{renderedBooks}</div>
  )
}

export default BookList