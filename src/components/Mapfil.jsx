
const arr=[1,2,3,4,5,6,7,8,9,10];
const Mapfil =(n)=>{
    const even=arr.filter((n)=> n%2===0);
    const double=even.map((n)=> n*2);
    return double;
}
export default Mapfil;