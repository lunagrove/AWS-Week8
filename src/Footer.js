function Footer() {

    const d = new Date();
    const year = d.getFullYear();

    return (
        <footer>
            <p>&copy; {year} Stephanie Holmes</p>   
        </footer>
    );
}

export default Footer;