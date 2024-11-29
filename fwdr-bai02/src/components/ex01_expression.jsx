const TestExp = () => {
    const text     = "An Expression";
    const display  = <span> { text } </span>;

    return ( 
        <>
            <h1>Example 01: Expression</h1>
            <h3> { display } </h3>
            <p/>
            <hr align='left' width='50%'/>
        </>
     );
}
 
export default TestExp;