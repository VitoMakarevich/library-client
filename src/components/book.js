import React from 'react';
import '../styles/book.scss'

const Book = ({book, handleUpdate, handleDelete, handleNameChange, handleDescriptionChange}) => (
    <div className="book">
        <form className="book__inner" onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="nameBook">Name</label>
                <input required className="form-control" id="nameBook" onChange={handleNameChange} defaultValue={book.name}/>
                <label htmlFor="descriptionBook">Description</label>
                <textarea required className="form-control" id="descriptionBook" onChange={handleDescriptionChange} defaultValue={book.description}/>
                <label htmlFor="authorBook" className="col-form-label">Author</label>
                <input type="text" readOnly className="form-control-plaintext" id="authorBook" value={book.author}/>
                <label htmlFor="usesCountBook" className="col-form-label">Uses count</label>
                <input type="text" readOnly className="form-control-plaintext" id="usesCountBook" value={book.usesCount}/>
                <label htmlFor="createdAtBook" className="col-form-label">Created at</label>
                <input type="text" readOnly className="form-control-plaintext" id="createdAtBook" value={new Date(book.createdAt).toLocaleString()}/>
            </div>
            <div className="book__buttons"> 
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
        </form> 
    </div> 
)

export default Book;