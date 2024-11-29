import '../css/style.css';

const TestCSS = () => {
    const external = 'myStyle';
    const internal = {
        color: '#F60',
        fontStyle: 'italic'
    };
    
    return (
        <>
            <h1>Example 06: CSS</h1>
            <h3 style={internal}>This is internal Style</h3>
            <h3 className={external}>... And external Style over here!</h3>
            <p />
            <hr align='left' width='50%' />
        </>
    );

}

export default TestCSS;