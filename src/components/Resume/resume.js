import React, { Button } from "react";
import pdf from "./Hayley-Wahlroos.pdf";

function Headshot() {
  return (
    <>
      <Button onClick={<a href = {pdf} target = "_blank" rel="noreferrer">Download Pdf</a>}>
        <FontAwesomeIcon icon={faFile} size="2x"></FontAwesomeIcon>
      </Button>
    </>
  );
}

export default Headshot;
