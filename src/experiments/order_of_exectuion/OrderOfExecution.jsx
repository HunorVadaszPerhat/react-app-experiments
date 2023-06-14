import React, {useEffect, useState} from 'react'

/*
https://www.youtube.com/watch?v=CFxA5GmDIbU
*/

const OrderOfExecution = () => {
    // cannot access before initialization - FAIR AND SQUARE >D 
    //console.log('Entered OrderOfExecution Component', count);

    const a = 0;
    const b = null;

    const [value, setValue] = useState(a);
    const [count, setCount] = useState(0);


    const Function1 = () => {
        console.log('Function1', a.length)
    };

    const Funcion2 = () => {
        console.log('Function2')
    };

    const Funcion3 = () => {
        console.log('Function3')
    };

    const Function4 = () => {
        console.log('Function4')
    };

    console.log('---------------------------------------------------')
    function functionB() {
        console.log('reading length of variable b', b.length);
    }

    const functionC = () => {
        return(
            <>
                {b.length}
            </>
        );
    };


    console.log('before useEffect - every render', count);
    // called at every render
    useEffect(() => {
        console.log('from useEffect - every render ', count)
    })
    console.log('after useEffect - every render ', count);


    console.log('before useEffect - first render ', count);
    // called only at first render
    // componentDidMount()
    useEffect(() => {
        console.log('from useEffect - first render ', count)
    },[])
    console.log('after useEffect - first render ', count);

    console.log('before useEffect - first render+cleanup ', count);
    // called only at first render
    // componentDidMount()
    useEffect(() => {
        console.log('from useEffect - first render+cleanup', count)
        // componentWillUnmount()
        return () => {
            console.log('cleanup')
        }
    },[])
    console.log('after useEffect - first render+cleanup', count);

    console.log('before useEffect - dependency array changes ', count);
    // called every time value(s) in dependency array changes
    // componentDidUpdate()
    useEffect(() => {
        console.log('from useEffect - dependency array changes ', count)
    }, [count])
    console.log('after useEffect - dependency array changes ', count);

    console.log('---------------------------------------------------')

    console.log('Before return() OrderOfExecution Component', count);

     return (
        <div>
            <h2>{count} likes</h2>
            {/* Reset count to its previous value + 1 */}
            <span onClick={() => setCount(count + 1)}>👍🏽 </span>
            {/* Reset count to its previous value - 1 */}
            <span onClick={() => setCount(count - 1)}>👎🏽 </span>
            <h3>Like or dislike to increase/decrease</h3>
            {/* {functionC}  Functions are not valid as a React child*/}
            {/*{functionC()} Uncaught TypeError: Cannot read properties of null (reading 'length') */}            </div>
    );
}

export default OrderOfExecution