import React, { Component } from 'react';  

class LifecycleChild extends Component{ 

        constructor(props){  
                super(props);  
                this.state={  
                        value:'React Application'  
                }  
                console.log("Inside child constructor");  
        }  

        static getDerivedStateFromProps(props,state){  
                console.log("Inside child getDerivedStateFromProps");  
                return null;  
        }  

        componentDidMount(){  
                console.log("Inside child componentDidMount");  
         }  

        shouldComponentUpdate(){  
                console.log("Inside child shouldComponentUpdate");  
                return true;  
        }  

        getSnapshotBeforeUpdate(prevProps,prevState){  
                console.log("inside child getSnapshotBeforeUpdate");  
                return null;  
        }  

        componentDidUpdate(){  
                console.log("Inside child componentDidUpdate");  
        }  

        render(){  
                console.log("Inside child render");  
                return <div/>  
        }  
}  

export default LifecycleChild;