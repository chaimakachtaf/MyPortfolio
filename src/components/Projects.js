import React from "react";

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <h2 className="section-title">Projets</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Panneau d'administration</h3>
          <h4>Midljob (Paris, France)</h4>
          <p>Technologies : Flutter, Dart, Supabase, PostgreSQL</p>
          <p>
            Gestion des utilisateurs, d’annonces d’emploi, des candidatures et
            des statistiques en temps réel.
          </p>
        </div>

        <div className="project-card">
          <h3>Application de gestion de cheminées</h3>
          <h4>Oumaima Bois (Casablanca, Maroc)</h4>
          <p>Technologies : Flutter, Firebase, Dart</p>
          <p>
            Développement d'une application mobile pour gérer et vendre des
            cheminées et habillages muraux.
          </p>
        </div>

        <div className="project-card">
          <h3>Application intégrée mobile et web</h3>
          <h4>Access Point (Taroudant, Maroc)</h4>
          <p>Technologies : Flutter, Dart, Laravel, Tailwind CSS, MySQL</p>
          <p>
            Intégration entre une application mobile et un site web e-commerce
            via des API RESTful.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
