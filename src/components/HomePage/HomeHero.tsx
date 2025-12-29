import { Link } from "react-router-dom";
import fotobanner from "/src/assets/index/redemulheres.png";
import "/src/styles/home.css"

import { storyblokEditable } from "@storyblok/react";


type HomeHeroProps = {
  blok: {
    title: string;
    description: string;
    primary_button_text: String,
    secondary_button_text: String,
  };
};


export default function HomeHero({ blok }: HomeHeroProps) {

  return (
    <section  {...storyblokEditable(blok)}
      className="hero-section text-white text-center py-5">
      <div className="container py-5">
        <div className="row align-items-center">

          {/* Texto */}
          <div className="col-lg-6 text-lg-start">
            <h1 className="display-4 fw-bold mb-4 animate-fade-in">
              {blok.title}
            </h1>

            <p className="lead mb-4">
              {blok.description}
            </p>

            <div className="d-grid d-sm-flex gap-2">
              <Link to="/cadastro" className="btn btn-lg px-4">
                <i className="bi bi-person-plus"></i> {blok.primary_button_text}
              </Link>

              <a href="#sobre" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-info-circle"></i> {blok.secondary_button_text}
              </a>
            </div>
          </div>

          {/* Imagem */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <img
              src={fotobanner}
              alt="Mulheres empreendedoras"
              className="img-fluid"
              style={{ maxWidth: "70%", height: "auto" }}
            />
          </div>

        </div>
      </div>
    </section>

  );
}
