export default function Footer(){
    return (
        <footer className="footer">
            <p>
                Para más información &nbsp;
                <a href="https://api.whatsapp.com/send?phone=+50683069880" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width={24} height={24}/>
                </a>
                &nbsp;
                <a href="https://www.facebook.com/Entre-Hilos-Agujas-640976396009031">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg" width={24} height={24}/>
                </a>
                <span className="footer__left">
                    Entre hilos & agujas
                </span>
            </p>
        </footer>
    )
}
