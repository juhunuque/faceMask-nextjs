import Link from "next/link";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

export default function Header() {
    return (
        <header className="header">
            <Link href="/">
                <h1 className="header__title">Entre Hilos & Agujas</h1>
            </Link>
            <LinkScroll
                className="header__summary snipcart-checkout snipcart-summary"
                to="contact"
                style={{textDecoration: "none"}}
                smooth={true}
                duration={500}
            >
                <span className="header__price snipcart-total-price">Contáctenos</span>
            </LinkScroll>
        </header>
    )
}
