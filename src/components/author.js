import React from 'react';
import '../styles/author.scss'

const Author = ({author, handleUpdate, handleDelete, handleFirstNameChange, handleLastNameChange}) => (
    <div className="author">
        <form className="author__inner" onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="firstNameAuthor">First name</label>
                <input required className="form-control" id="firstNameAuthor" onChange={handleFirstNameChange} defaultValue={author.firstName}/>
                <label htmlFor="lastNameAuthor">Last name</label>
                <input required className="form-control" id="lastNameAuthor" onChange={handleLastNameChange} defaultValue={author.lastName}/>
                <label htmlFor="createdAtAuthor" className="col-form-label">Created at</label>
                <input type="text" readOnly className="form-control-plaintext" id="createdAtAuthor" value={new Date(author.createdAt).toLocaleString()}/>
            </div>
            <div className="author__buttons"> 
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
        </form> 
    </div> 
)

export default Author;