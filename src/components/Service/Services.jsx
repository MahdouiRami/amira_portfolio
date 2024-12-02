import React from "react";
import { TbPresentationAnalytics } from "react-icons/tb";
import { SiPowerbi } from "react-icons/si";
import { FiSmile } from "react-icons/fi";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Mes <span className="green">Services</span>
        </h4>
        <h1>
          Des services sur mesure pour optimiser vos talents et votre
          performance
        </h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={TbPresentationAnalytics}
            title={"Recrutement et Gestion des Talents"}
            disc={`Grâce à des techniques innovantes comme la PNL et l’analyse des métaprogrammes, j’identifie les candidats les plus adaptés. Expert en sourcing et chasse de talents, je vous aide à attirer des profils rares et stratégiques pour vos équipes.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={SiPowerbi}
            title={"Analyse des Données RH"}
            disc={`Je maîtrise des outils tels que Excel avancé, Power BI, et des logiciels RH comme Workday pour analyser vos données RH. Mes services incluent le suivi des performances, la création de tableaux de bord et l’évaluation des besoins en formation.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiSmile}
            title={"Bien-être au Travail"}
            disc={`Je conçois des programmes pour améliorer la qualité de vie au travail (QVT), prévenir les conflits et réduire les risques psychosociaux, garantissant un environnement de travail sain et motivant.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
