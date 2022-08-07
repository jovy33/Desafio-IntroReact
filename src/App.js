import React from 'react';
import Header from "./components/Header";
import CardCarta from "./components/Card";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header title="Galeria de Imagenes con React" />
      <CardCarta
        src="https://cdn.pixabay.com/photo/2022/07/18/19/57/dog-7330712_960_720.jpg"
        title="Perro"
        descripcion="El animal mas fiel del mundo."
      />
      <CardCarta
        src="https://cdn.pixabay.com/photo/2022/06/14/00/22/mountain-7260827_960_720.jpg"
        title="Montañas"
        descripcion="Hermoso lugar para descanzar en medio de la naturaleza."
      />
      <CardCarta
        src="https://cdn.pixabay.com/photo/2020/04/30/03/26/rufous-5111261_960_720.jpg"
        title="Colibrí"
        descripcion="El ave mas libre volando por los aires."
      />
      <Footer textoFooter="Estas son algunas bellezas de nuestro Planeta Tierra" />
    </div>
  );
}

export default App;
