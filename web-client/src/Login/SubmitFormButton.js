import React from "react";

function SubmitFormButton({writingOnButton, signInFunction}) {
  return (
    <button
        type="submit"
        onClick={signInFunction}
        className="btn bg-dark-red darken-on-hover w-100 text-white fw-600 py-2 mb-4"
    >
        {writingOnButton}        
    </button>
  );
}

export default SubmitFormButton;