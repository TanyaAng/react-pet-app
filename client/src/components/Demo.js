const DemoPage = () =>{
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);

    }

    const onUsernameChangeHandler = (e) =>{
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Demo Form</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={onUsernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age"/>
                <input type="submit" value="Submit"/>
                <button>Click Me!</button>
            </form>
        </div>
    );
}

export default DemoPage;