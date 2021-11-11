import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Services from "../Services/Services/Services";
import Works from "../Works/Works";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Works></Works>
      <ClientReview></ClientReview>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Home;
