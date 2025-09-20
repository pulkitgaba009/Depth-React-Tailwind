function Navbar(){
    const links = [
        {
            title: "Guide",
            href : ""
        },
        {
            title: "Pricing",
            href : ""
        },
        {
            title: "Login",
            href : ""
        }
    ]
    
    return(
        <div className="navbar-root">
            <div className="logo">Fintech</div>
            <div className="links">
                {links.map((link,idx)=>(
                    <a className="link-items" key={idx} href={link.href}>{link.title}</a>
                ))}

                <button className="btn">Start free trial</button>
            </div>
        </div>
    )
}

export default Navbar;