import Child2 from "../childs/child2";
function Child1(props){
    return(
        <>
        <h1>I am child one</h1>
        <h1>{props.c1}</h1>
        <Child2 c2="from child1 to child2" />
        </>
    )
}
export default Child1;