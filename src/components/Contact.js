import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialiser EmailJS avec votre clé publique
    emailjs.init("Dhh11DmnrNSy2NvzU"); // Remplacez par votre clé publique

    // Utiliser sendForm pour envoyer le formulaire via EmailJS
    emailjs
      .sendForm(
        "service_l8v543m", // Remplacez par votre Service ID EmailJS
        "template_4im0x4h", // Remplacez par votre Template ID EmailJS
        e.target // Le formulaire complet
      )
      .then(
        (result) => {
          setStatus("Message envoyé avec succès!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setStatus("Une erreur est survenue, veuillez réessayer.");
        }
      );
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Contactez-moi</h2>
        <div className="contact-grid">
          {/* Section gauche : Carte */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.499576442213!2d-7.623566824831424!3d33.58831033667908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7c9a25a123bd1%3A0xc7c20e0a2f90520!2sCasablanca%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1689173401924!5m2!1sfr!2sma"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              title="Casablanca Map"
            ></iframe>
          </div>

          {/* Section droite : Formulaire */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              {/* Ligne pour Nom et Téléphone */}
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Nom"
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  placeholder="Téléphone"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Email */}
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Message */}
              <div className="form-row">
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Votre message"
                  rows="6"
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {/* Bouton Envoyer */}
              <button type="submit" className="btn-submit">
                Envoyer
              </button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
