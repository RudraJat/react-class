import {useState} from 'react';
import Child from './Child';

const Parent =()=>{
    const [count, setcount] = useState(0);
    return(
        <Child count={count} setcount={setcount}/>
    )
}
export default Parent;