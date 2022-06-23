import { useState } from "react";
import { Modal } from "rsuite";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { Loading } from "./Loading";
import { useHandleUser } from "../context/HandleUserContext";

export const ModalAddUbicacion = ({ modalState, setModalState }) => {
  const [address, setAddress] = useState("");
  const { setCoordinates } = useHandleUser();

  const closeModal = () => {
    setModalState(false);
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latitude = results[0].geometry.location.lat();
    const longitude = results[0].geometry.location.lng();
    setCoordinates(latitude, longitude);
  };

  return (
    <Modal backdrop={true} open={modalState} onClose={closeModal}>
      <Modal.Header>
        <p className="text-xl">Añade tu ubicación</p>
      </Modal.Header>
      <Modal.Body>
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            getSuggestionItemProps,
            suggestions,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({ placeholder: "añade tu direccion" })}
                className="border-2 border-black w-full p-2 rounded-md focus:outline-none"
              />
              {loading ? (
                <div className="flex justify-center">
                  <Loading />
                </div>
              ) : null}
              {suggestions.map((suggestion) => {
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: suggestion.active
                        ? "bg-slate-300"
                        : "bg-white",
                    })}
                  >
                    <p>{suggestion.description}</p>
                  </div>
                );
              })}

              <button
                className="bg-[color:var(--dark-blue)] p-3 text-white mt-5 rounded-md
                hover:bg-slate-800"
              >
                Añadir
              </button>
            </div>
          )}
        </PlacesAutocomplete>
      </Modal.Body>
    </Modal>
  );
};
