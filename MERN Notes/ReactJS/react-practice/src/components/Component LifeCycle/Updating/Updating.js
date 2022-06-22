import React,{Component} from 'react';  
import Child from './Child';  

class UpdatingComponent extends Component{  

        constructor(props){  
                super(props);  
                this.state={  
                        value:'React Application'  
                }  
                this.changeState = this.changeState.bind(this);  
                console.log("Inside constructor");  
        }  

        static getDerivedStateFromProps(props,state){  
                console.log("Inside getDerivedStateFromProps");  
                return null;  
        }  

        componentDidMount(){  
                console.log("Inside componentDidMount");  
        }  

        shouldComponentUpdate(){  
                console.log("Inside shouldComponentUpdate");  
                return true;  
        }  

        getSnapshotBeforeUpdate(prevProps,prevState){  
                console.log("Inside getSnapshotBeforeUpdate");  
                return null;  
        }  

        componentDidUpdate(){  
                console.log("Inside componentDidUpdate");  
        }  

        changeState = () => {   
                this.setState({  
                        value : "React Application started"  
                })  
        }  

        render(){  
                console.log("Inside render");  
                return(  
                        <div>  
                                <div><h1>This is Updating Phase</h1></div>  
                                <button onClick={this.changeState}>Click Me</button>  
                                <Child />
                        </div>  
                );  
        }  
}  

export default UpdatingComponent; 