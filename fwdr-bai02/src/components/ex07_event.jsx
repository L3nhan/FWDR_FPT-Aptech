const TestEvent = () => {

    let myEvent = () => {
        alert("You click on me again!");
    }

    return ( 
        <>
            <h1>Example 07: Event</h1>
            <button type="button"
                    onClick = {() => { alert('This is Event testing!') }} 
            >
                Click Me!    
            </button>
            <br/>
            <button onClick = { myEvent }>
                Click Me Again!
            </button>
            <hr align='left' width='50%' />
        </>
     );
}
 
export default TestEvent;