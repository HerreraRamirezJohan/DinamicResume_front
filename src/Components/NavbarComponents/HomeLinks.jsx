const HomeLinks = ({ handleScroll, toggleMenu }) => {
    return (
        <>
            <p
                onClick={() => { handleScroll('home'); toggleMenu(); }}
                className="text-white cursor-pointer text-xl capitalize p-4"
            >
                Home
            </p>
            <p
                onClick={() => { handleScroll('services'); toggleMenu(); }}
                className="text-white cursor-pointer text-xl capitalize p-4"
            >
                Services
            </p>
            <p
                onClick={() => { handleScroll('about'); toggleMenu(); }}
                className="text-white cursor-pointer text-xl capitalize p-4"
            >
                About Us
            </p>
        </>
    )
}

export default HomeLinks