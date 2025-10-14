import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4" id="contact">
      <div className="container mx-auto flex justify-between items-center p-5">
        <div>
          <p>&copy; 2025 Digilock</p>
        </div>
        <div className="flex items-center">
          <div>
            <p className="mb-1">
              {" "}
              <a href="tel:+55-11-97450-6920">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
              </a>
              Whatsapp: +55 (11) 97450-6920
            </p>
            <p className="mb-0">
              <a href="digilock2023@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              </a>
              Email: digilock2023@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
