import { useState } from "react";
import "./Saudade.css";
import SaudadeCarousel from "./SaudadeCarousel";

function getRandomPosition() {
  // Limita o botão para não sair da tela (considerando 80% para garantir visibilidade)a
  const maxTop = 80; // porcentagem
  const maxLeft = 80;
  const top = Math.random() * maxTop;
  const left = Math.random() * maxLeft;
  return { top: `${top}%`, left: `${left}%` };
}

export default function Saudade() {
  const [nadaPos, setNadaPos] = useState({ top: "60%", left: "60%" });
  const [tela, setTela] = useState("saudade");

  if (tela === "resposta") {
    return (
      <div style={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
        <SaudadeCarousel />
        <div
          className="saudade-card"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
          }}
        >
          <h2>Eu também tô, meu amor! Sábado tô chegando 💖</h2>
          <button className="btn-muita" onClick={() => setTela("saudade")}>
            Voltar a tentar arriscar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh", width: "100vw" }}>
      <SaudadeCarousel />
      <div
        className="saudade-card"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
        }}
      >
        <h2>Nível de saudade do meu amorzaum GuiGui de Floripa</h2>
        <div className="button-container">
          <button className="btn-muita" onClick={() => setTela("resposta")}>
            Muita muita
          </button>
          <button
            className="btn-nada"
            style={{
              position: "absolute",
              top: nadaPos.top,
              left: nadaPos.left,
              minWidth: 100,
              minHeight: 40,
              maxWidth: "calc(100vw - 120px)",
              maxHeight: "calc(100vh - 60px)",
            }}
            onClick={() => setNadaPos(getRandomPosition())}
          >
            nenhuma
          </button>
        </div>
      </div>
    </div>
  );
}
