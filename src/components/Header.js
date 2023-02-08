

function Header(props){
    return(
        <header>
            <h3>{props.title}</h3>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    )
}
export default Header;