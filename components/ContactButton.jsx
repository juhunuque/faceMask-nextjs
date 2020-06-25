export default function ContactButton() {
  return (
    <div className="d-flex wa-chat-btn-fixed wa-splmn-chat-btn-offset align-items-center justify-content-center">
      <a href="https://api.whatsapp.com/send?phone=+50683069880" target="_blank">
        <div className="d-flex flex-row">
          <img className="wa-chat-btn-icon-cta-big"
               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
          <div className="wa-chat-button-cta-text">Contáctenos</div>
        </div>
      </a>
    </div>
  );
}
