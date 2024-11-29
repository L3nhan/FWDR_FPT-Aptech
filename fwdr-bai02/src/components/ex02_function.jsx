const TestFunction = () => {
    function MyMethod(){    //const MyMethod = () => {
        return "Component (as a function)";
    }
    return (
        <>
            <h1>Example 02: Function</h1>
            <h3> <MyMethod /> </h3>
            <p />
            <hr align='left' width='50%' />
        </>
    );
}

export default TestFunction;