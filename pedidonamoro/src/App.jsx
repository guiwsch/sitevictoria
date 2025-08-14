import { useState, useEffect } from "react";
import "./Saudade.css";
import img1 from "../public/foto1.jpeg";
import img2 from "../public/foto2.jpeg";
import img3 from "../public/foto3.jpeg";
import img4 from "../public/foto4.jpeg";
import img5 from "../public/foto5.jpeg";
import img6 from "../public/foto6.jpeg";

const imagens = [img1, img2, img3, img4, img5, img6];

function getRandomPosition() {
  const top = Math.random() * 80;
  const left = Math.random() * 80;
  return { top: `${top}%`, left: `${left}%` };
}

export default function Saudade() {
  const [nadaPos, setNadaPos] = useState({ top: "60%", left: "60%" });
  const [tela, setTela] = useState("saudade");
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imagens.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const bgStyle = {
    backgroundImage: `url(${imagens[imgIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 0.8s ease",
    minHeight: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  if (tela === "resposta") {
    return (
      <div style={bgStyle}>
        <div className="saudade-card">
          <h2>Eu também tô, meu amor! Sábado tô chegando 💖</h2>
          <button className="btn-muita" onClick={() => setTela("saudade")}>
            Voltar a tentar arriscar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={bgStyle}>
      <div className="saudade-card">
        <h2>Nível de saudade do meu amorzaum GuiGui de Floripa</h2>
        <div className="button-container">
          <button className="btn-muita" onClick={() => setTela("resposta")}>
            Muita muita
          </button>
          <button
            className="btn-nada"
            style={
              nadaPos.top === "60%" && nadaPos.left === "60%"
                ? {} // Sem position absolute na posição inicial
                : {
                    position: "absolute",
                    top: nadaPos.top,
                    left: nadaPos.left,
                  }
            }
            onClick={() => setNadaPos(getRandomPosition())}
          >
            nenhuma
          </button>
        </div>
      </div>
    </div>
  );
}
