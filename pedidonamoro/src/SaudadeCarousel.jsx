import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import img1 from "../public/foto1.jpeg";
import img2 from "../public/foto2.jpeg";
import img3 from "../public/foto3.jpeg";
import img4 from "../public/foto4.jpeg";
import img5 from "../public/foto5.jpeg";
import img6 from "../public/foto6.jpeg";

const imagens = [img1, img2, img3, img4, img5, img6];

export default function SaudadeCarousel() {
  return (
    <Carousel
      autoplay
      effect="fade"
      dots={false}
      style={{ width: "100vw", height: "100vh" }}
    >
      {imagens.map((img, idx) => (
        <div key={idx}>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
