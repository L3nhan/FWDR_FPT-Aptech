const MyMethod = () => {
    /* 1. Khai báo mảng */
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];       //Mảng giá trị số
    const days = ['Tuesdat', 'Thursday', 'Satturday'];  //Mảng giá trị chuỗi
    
    /* 2. Dùng hàm JS reduce() */
    const total = nums.reduce( (sum, num) => { return sum + num; } );

    /* 3. Khai báo các hàm người dùng */
    //3.1. Hàm checkEven
    const checkEven = (num) => {
        if (num % 2 === 0) {
            return num;
        }
    }
    //3.2. Hàm checkOdd
    const checkOdd = (num) => {
        if (!checkEven(num)) {
            return num;
        }
    }
    //3.3. Hàm checkPrime
    const checkPrime = (num) => {
        for (let i = 2, n = Math.sqrt(num); i <= n; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }
    /* 4. Nội dung view */
    return (
        <>
            <h1>Tutorial 02: JavaScript Function</h1>
            <p />
            <hr align='left' width='50%' />
            {/* 4.1. Call total variable */}
            <h2>+ Example 1: Call total variable</h2>
            <div>
                <span>- Total of nums:</span> { total } <span>USD</span>
            </div>

            {/* 4.2. Call Js filter() Function */}
            <h2>+ Example 2: Call Js filter() Function</h2>

            <div>
                <span>- Even values: </span> {nums.filter(checkEven).join(", ")}
            </div>

            <div>
                <span>- Odd values: </span> {nums.filter(checkOdd).join(", ")}
            </div>

            <div>
                <span>- Prime values: </span> {nums.filter(checkPrime).join(", ")}
            </div>
            
            {/* 4.3. Call Js map() Function */}
            <h2>+ Example 3: Call Js map() Function</h2>

            <div>
                <span>- List all of nums values: </span> {nums.map((n) => { return n + ' ' })}
            </div>

            <div>
                <span>- My Schedule in school:</span>
                <ul> {days.map((day) => (
                    <li> {day} </li>
                ))}
                </ul>
            </div>
        </>
    );
}

export default MyMethod;

                                                                                                                                                                