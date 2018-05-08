import React from 'react';
import '../styles/binding.scss'

const Binding = ({binding, handleUpdate, handleDelete}) => (
    <div className="binding">
        <form className="binding__inner" onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="bookNameBinding">Book</label>
                <input readOnly required className="form-control" id="bookNameBinding"  defaultValue={binding.book}/>
                <label htmlFor="userNameBinding">User</label>
                <input readOnly required className="form-control" id="userNameBinding"  defaultValue={binding.user}/>
                <label htmlFor="createdAtBinding" className="col-form-label">Created at</label>
                <input type="text" readOnly className="form-control-plaintext" id="createdAtBinding" value={new Date(binding.createdAt).toLocaleString()}/>
                <label htmlFor="finishedAtBinding" className="col-form-label">Finished at</label>
                <input type="text" readOnly className="form-control-plaintext" id="finishedAtBinding" value={binding.finishedAt? new Date(binding.finishedAt).toLocaleString() : undefined}/>
            </div>
            <div className="binding__buttons"> 
                <button type="submit" className="btn btn-success">Finish</button>
            </div>
        </form> 
    </div> 
)

export default Binding;