import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0"></MDBContainer>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "#2F3440" }}
      >
      - Meu Prestador WEB © 2022 Copyright
      </div>
    </MDBFooter>
  );
}
