import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const searchRef = useRef(null);

    const toggleHamburger = () => {
        setHamburgerActive(!hamburgerActive);
        setSearchActive(false);
    };

    const handelOnSearch = () => {
        setSearchActive(true);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchActive(false);
        }
    };

    useEffect(() => {
        if (searchActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchActive]);

    return (
        <header className={hamburgerActive ? "header active" : "header"}>
            <div className="h_cont">
                <div className="h_left">
                    <div className="h_id">
                        <Link to={"/"}>
                            <img src="/logo/marvel_logo.png" alt="로고" />
                        </Link>
                    </div>
                </div>
                <div className="h_right">
                    <ul className="h_menu">
                        <li>
                            <p>Login</p>
                        </li>
                        <li onClick={handelOnSearch}>
                            <img src="/icon/search.svg" alt="검색" />
                        </li>
                        <li>
                            <div
                                id="hamburger"
                                className={hamburgerActive ? "hamburger nav_btn active" : "hamburger nav_btn"}
                                onClick={toggleHamburger}
                            >
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={searchActive ? "search active" : "search"} ref={searchRef}>
                    <input type="text" placeholder="검색어를 입력해주세요" />
                </div>
            </div>
            <div className="gnb_box">
                <nav className="gnb">
                    <ul className="nav_transmission">
                        <li>
                            <h3>MARVEL</h3>
                        </li>
                        <li>
                            <a href="sub/hero.html">Hero</a>
                        </li>
                        <li>
                            <a href="sub/villain.html">Villain</a>
                        </li>
                        <li>
                            <a href="sub/comics.html">Marvel Comics</a>
                        </li>
                        <li>
                            <a href="sub/characters.html">Characters</a>
                        </li>
                    </ul>
                    <ul className="nav_leaflet">
                        <li>
                            <h3>CONTENTS</h3>
                        </li>
                        <li>
                            <a href="sub/introduction.html">New Introduction</a>
                        </li>
                        <li>
                            <a href="sub/movieDrama.html">Movie & Drama</a>
                        </li>
                        <li>
                            <a href="sub/news.html">News</a>
                        </li>
                        <li>
                            <Link to="/pages/sub/game">Marvel Game</Link>
                        </li>
                    </ul>
                    <ul className="nav_leaflet">
                        <li>
                            <h3>Universe</h3>
                        </li>
                        <li>
                            <a href="sub/universe.html">Marvel Cinematic Universe</a>
                        </li>
                    </ul>
                    <ul className="nav_leaflet">
                        <li>
                            <h3>Shop</h3>
                        </li>
                        <li>
                            <Link to="/pages/sub/toy">Toy & Collectibles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
