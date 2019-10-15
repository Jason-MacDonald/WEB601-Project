import React from 'react';
import Vehicle from '../vehicle/vehicle';

import './vehicle-content.css';

class VehicleContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            data: 'test',
            make: props.make,
            model: props.model,
            body: props.body,
            transmission: props.transmission,
            minYear: props.minYear,
            maxYear: props.maxYear,
            minPrice: props.minPrice,
            maxPrice: props.maxPrice,
            minKms: 10, //props.minKms,
            maxKms: 10000000//props.maxKms
        })
    }

    componentDidMount() {
        // fetch('http://localhost:4200/api/vehicles')
        // '/vehicles/:make/:model/:body/:transmission/:minYear/:maxYear/:minPrice/:maxPrice/:minKMS/:maxKMS'
        fetch(`http://localhost:4200/api/vehicles/${this.state.make}/${this.state.model}/${this.state.body}/${this.state.transmission}/${this.state.minYear}/${this.state.maxYear}/${this.state.minPrice}/${this.state.maxPrice}/${this.state.minKms}/${this.state.maxKms}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render () {
        return (
            <div className='vehicle-content-main-div'>
                <div className="vehicles-wrapper">
                    <Vehicle id={0} dataFromParent={this.state.data}/>
                    <Vehicle id={1} dataFromParent={this.state.data}/>
                    <Vehicle id={2} dataFromParent={this.state.data}/>
                    <Vehicle id={3} dataFromParent={this.state.data}/>
                    <Vehicle id={4} dataFromParent={this.state.data}/>
                    <Vehicle id={5} dataFromParent={this.state.data}/>
                    <Vehicle id={6} dataFromParent={this.state.data}/>
                    <Vehicle id={7} dataFromParent={this.state.data}/>
                    <Vehicle id={8} dataFromParent={this.state.data}/>
                    <Vehicle id={9} dataFromParent={this.state.data}/>
                    <Vehicle id={10} dataFromParent={this.state.data}/>
                    <Vehicle id={11} dataFromParent={this.state.data}/>
                    <Vehicle id={12} dataFromParent={this.state.data}/>
                    <Vehicle id={13} dataFromParent={this.state.data}/>
                    <Vehicle id={14} dataFromParent={this.state.data}/>
                    <Vehicle id={15} dataFromParent={this.state.data}/>
                    <Vehicle id={16} dataFromParent={this.state.data}/>
                    <Vehicle id={17} dataFromParent={this.state.data}/>
                    <Vehicle id={18} dataFromParent={this.state.data}/>
                    <Vehicle id={19} dataFromParent={this.state.data}/>
                </div>
                <VehicleNav/>
            </div>
        )
    }     
}


class VehicleNav extends React.Component {
    render () {
        return (
            <div className="page-nav-wrapper">
                <button>First</button>
                <button>Back</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>Forward</button>
                <button>Last</button>
            </div>
        )
    }
}

export default VehicleContent;
