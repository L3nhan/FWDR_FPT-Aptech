/**
* + State:
*   - Manage data within a component,
*   - Can be updated using the setState function;
* + Props:
*   - Arguments that are passed into React components
*   - Pass data from a parent component to a child component,
*   - Cannot be changed within a component;
* 
*/
const TestProps = () => {
    const name = 'Vinfast VF3';
    const model = 'VF8 LUX Plus';

    //1. Hàm Cars dùng props, hàm Vinfast dùng tham số
    const Cars = (props) => {
        return <span>The car is {props.brand}!</span>;
    }
    const Vinfast = ({ model }) => {
        return <span>  {model} </span>;
    }

    //2. Giá trị trả về
    return (
        <>
            <h1>Example 05: Props</h1>
            <div>
                + <Cars brand={name} />
            </div>
            <div>
                + The car is Vinfast <Vinfast model={model} />
            </div>
            <p />
            <hr align='left' width='50%' />

        </>
    );

}

export default TestProps;