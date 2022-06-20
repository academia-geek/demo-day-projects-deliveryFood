import { useState } from "react";
import { Modal } from "rsuite";
import Aos from "aos";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import logo from "../assets/logo.png";

import "../styles/footer.css";

Aos.init({
  duration: 1000,
});

const ModalTerminosYCondiciones = ({ modalStateTerms, setModalStateTerms }) => {
  return (
    <Modal
      open={modalStateTerms}
      onClose={() => setModalStateTerms(false)}
      backdrop={true}
    >
      <Modal.Header>
        <h2 className="text-xl">TERMINOS Y CONDICIONES DE USO</h2>
      </Modal.Header>
      <Modal.Body>
        <p>
          El presente Política de Privacidad establece los términos en que
          delivery food usa y protege la información que es proporcionada por
          sus usuarios al momento de utilizar su sitio web. Esta compañía está
          comprometida con la seguridad de los datos de sus usuarios. Cuando le
          pedimos llenar los campos de información personal con la cual usted
          pueda ser identificado, lo hacemos asegurando que sólo se empleará de
          acuerdo con los términos de este documento. Sin embargo esta Política
          de Privacidad puede cambiar con el tiempo o ser actualizada por lo que
          le recomendamos y enfatizamos revisar continuamente esta página para
          asegurarse que está de acuerdo con dichos cambios.
        </p>
      </Modal.Body>
    </Modal>
  );
};

const ModalPoliticaYPrivacidad = ({ modalState, setModalState }) => {
  return (
    <Modal
      open={modalState}
      onClose={() => setModalState(false)}
      backdrop={true}
    >
      <Modal.Header>
        <h2 className="text-xl">POLÍTICA DE PRIVACIDAD</h2>
      </Modal.Header>
      <Modal.Body>
        <p>
          El presente Política de Privacidad establece los términos en que
          delivery food usa y protege la información que es proporcionada por
          sus usuarios al momento de utilizar su sitio web. Esta compañía está
          comprometida con la seguridad de los datos de sus usuarios. Cuando le
          pedimos llenar los campos de información personal con la cual usted
          pueda ser identificado, lo hacemos asegurando que sólo se empleará de
          acuerdo con los términos de este documento. Sin embargo esta Política
          de Privacidad puede cambiar con el tiempo o ser actualizada por lo que
          le recomendamos y enfatizamos revisar continuamente esta página para
          asegurarse que está de acuerdo con dichos cambios.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export const Footer = () => {
  const [modalTermsCond, setmodalTermsCond] = useState(false);
  const [modalPoliticPrivacy, setmodalPoliticPrivacy] = useState(false);

  const openModalTerminosCondiciones = () => {
    setmodalTermsCond(true);
  };

  const openModalPoliticPrivacy = () => {
    setmodalPoliticPrivacy(true);
  };

  return (
    <footer className="px-20 py-5 grid grid-cols-3 place-content-center sm:px-0">
      <div className="logo-footer flex items-center">
        <img src={logo} alt="logo" className="w-52" />
      </div>
      <div className="redes-sociales px-2">
        <h2 className="font-thin text-3xl text-center text-[color:var(--white)]">
          Nos puedes encontrar en
        </h2>
        <div className="footer-icons flex justify-evenly">
          <span>
            <FiInstagram className="text-5xl" />
          </span>
          <span>
            <FiTwitter className="text-5xl" />
          </span>
        </div>
      </div>
      <div className="sobre-nosotros-footer flex flex-col justify-center gap-2">
        <button
          className="text-center text-white text-lg"
          onClick={openModalTerminosCondiciones}
        >
          Terminos y Condiciones
        </button>
        <button
          className="text-center text-white text-lg"
          onClick={openModalPoliticPrivacy}
        >
          Politica y Privacidad
        </button>
      </div>
      {modalTermsCond && (
        <ModalTerminosYCondiciones
          modalStateTerms={modalTermsCond}
          setModalStateTerms={setmodalTermsCond}
        />
      )}
      {modalPoliticPrivacy && (
        <ModalPoliticaYPrivacidad
          modalState={modalPoliticPrivacy}
          setModalState={setmodalPoliticPrivacy}
        />
      )}
    </footer>
  );
};
