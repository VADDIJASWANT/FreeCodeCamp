
export default function Header(props){
   
    return(
    <div className="Header">
        <section className="Header-name">To-Do List</section>
        <section className="Header-Time">{props.date}</section>
    </div>
    )
}