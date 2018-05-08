import React from 'react';
import '../styles/user.scss'

const User = ({user, handleUpdate, handleDelete, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePassportNumberChange}) => (
    <div className="user">
        <form className="user__inner" onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="firstNameUser">First name</label>
                <input required className="form-control" id="firstNameUser" onChange={handleFirstNameChange} defaultValue={user.firstName}/>
                <label htmlFor="lastNameUser">Last name</label>
                <input required className="form-control" id="lastNameUser" onChange={handleLastNameChange} defaultValue={user.lastName}/>
                <label htmlFor="passportNumberUser">Passport number</label>
                <input required className="form-control" id="passportNumberUser" onChange={handlePassportNumberChange} defaultValue={user.passportNumber}/>
                <label htmlFor="emailUser">Email</label>
                <input required type="email" className="form-control" id="emailUser" onChange={handleEmailChange} defaultValue={user.email}/>
                <label htmlFor="createdAtUser" className="col-form-label">Created at</label>
                <input type="text" readOnly className="form-control-plaintext" id="createdAtUser" value={new Date(user.createdAt).toLocaleString()}/>
                <label htmlFor="usedBooksUser" className="col-form-label">Used books count</label>
                <input type="text" readOnly className="form-control-plaintext" id="usedBooksUser" value={user.usedBooksCount}/>
                <label htmlFor="currentBooksUser" className="col-form-label">Currently books in use</label>
                <input type="text" readOnly className="form-control-plaintext" id="currentBookssUser" value={user.currentBooksUsed}/>
            </div>
            <div className="user__buttons"> 
                <button type="submit" className="btn btn-primary">Update</button>
                <button type="button" onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
        </form> 
    </div> 
)

export default User;