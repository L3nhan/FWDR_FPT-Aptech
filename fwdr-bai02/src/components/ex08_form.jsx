const GetForm = () => {
    return ( 
        <>
        <h1>Example 08: Form</h1>
            <div align="right">
                <form>
                    <input placeholder="Enter search here..." size={40}/>
                        <button>Search</button>
                </form>
            </div>
            <div>
                <table border={1} width="100%">
                    <caption><h1>Item List</h1></caption>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Function</th>
                    </tr>
                    <tr>
                        <td>RKSK-B</td>
                        <td>Rucksack Brown</td>
                        <td>450</td>
                        <td align="center">Edit | Delete</td>
                    </tr>
                </table>
            </div>
            <p />
            <hr align='left' width='50%' />
        </>
     );
}
 
export default GetForm;

