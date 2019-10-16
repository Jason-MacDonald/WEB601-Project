import React from 'react';

import './admin-delete-vehicle.css'

// This is a basic delete request handled directly in the delete vehicle form.
class DeleteVehicleForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('http://localhost:4200/api/vehicles/' + this.id.value, {method: 'delete',});
        // TODO: Another case of; can I not use the back end Server calls already created.
        console.log("Vehicle Deleted!")
    }

    // Form to delete a vehicle using the input id.
    // A more streamlined version of admin-add-vehicle form.
    render() {
        return (
            <div className='delete-vehicle-form-main-div'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Delete a Car</h2>
                    <input ref={(ref) => {this.id = ref}} type="text" id='id' placeholder="id..." name='id' required/>
                    <input className="submit" type="submit" id='submit' value="Delete Vehicle" />
                </form>
            </div>
        )
    }
}

export default DeleteVehicleForm;
