import React, {Component} from 'react';
import './Demo.css';

class DemoPage extends Component{
    constructor (props){
        super(props);
        this.state = {
            username: '',
            age: 18,
            bio: "Lorem ipsum",
            occupation: "eng",
            errors: {
                username: '',
                email:'',
            }
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.emailInput = React.createRef();
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        if (this.state.username.length<5){
            this.setState(state=>({errors: {...state.errors, username: "Your name should be at least 5 characters long!"}}))
        }

        if(!this.emailInput.current.value.includes('@')){
            this.setState(state => ({errors:{...state.errors, email:"Your email should contains @ sign"}}));
            this.emailInput.current.focus();
        } else {
            this.setState(state=> ({errors:{...state.errors, email:''}}))
        }
    }

    // onUsernameChangeHandler = (e) =>{
    //     this.setState({username:e.target.value});
    // }

    // onAgeChangeHandler = (e) => {
    //      this.setState({age:e.target.value});
    // }

    onChangeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    render (){
        return (
            <div>
                <h1>Demo Form</h1>
                <form >
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username" 
                        name="username"
                        value={this.state.username} 
                        onChange={this.onChangeHandler}
                    />
                    {this.state.errors.username &&
                    <div className={`input-validation`}>{this.state.errors.username}</div>
                    }
                    <input 
                        ref= {this.emailInput}
                        type="email"
                        id="email" 
                        name="email" 
                        placeholder='example@web.com'
                    />

                    {this.state.errors.email &&
                    <div className={`input-validation`}>{this.state.errors.email}</div>
                    }

                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.onChangeHandler}
                    />
                    <label htmlFor='bio'>Bio</label>
                    <textarea 
                        id="bio" 
                        value={this.state.bio}
                        onChange = {this.onChangeHandler}
                        /> 
                    
                    <label htmlFor='occupation'></label>
                    <select 
                        name="occupation" 
                        id="occupation" 
                        onChange={this.onChangeHandler}
                        value={this.state.occupation}
                    >
                        <option value='it'>IT</option>
                        <option value='eng'>Engineer</option>
                        <option value='arch'>Architect</option>
                    </select>
                    <input 
                        type="submit" 
                        value="Submit" 
                        onClick={this.onSubmitHandler.bind(this)}
                    />
                    <button>Click Me!</button>
                </form>
            </div>
        );
        }
   
}

export default DemoPage;