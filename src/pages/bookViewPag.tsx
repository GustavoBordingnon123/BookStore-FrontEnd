import NavBar from '../components/navbar/desktop';
import BookAbout from "../components/bookAbout";
import Footer from '../components/footer/index';
import React from 'react';

export default function BookViewPage(){

  return(
    <>
      <NavBar />
      <BookAbout />
      <Footer />
    </>  
  );
}