import React from 'react';

class MountingPhase extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                    title : 'Lifecycle Methods'
            }
            console.log('Inside React Component Constructor');
      }


    static getDerivedStateFromProps(props, state) {
            console.log('Inside React Component getDerivedStateFromProps');
            return null;
      }


    componentDidMount(){  
            console.log("Inside componentDidMount");
      }


    render() {
            console.log('Inside render method');
            return(
                <>
                    <h1>This is Mounting Phase</h1>
                </>
            )
    }          
}

export default MountingPhase