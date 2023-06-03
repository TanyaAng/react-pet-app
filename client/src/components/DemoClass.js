import {Component} from 'react';

class DemoPage extends Component{
    constructor (props){
        super(props);
        this.state = {
            username: '',
            age: 18,
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        const {username, age} = this.state;

        console.log(username);
        console.log(age);

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
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.onChangeHandler}
                    />
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