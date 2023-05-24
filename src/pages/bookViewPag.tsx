import NavBar from '../components/navbar/desktop';
import BookAbout from "../components/bookAbout";
import Footer from '../components/footer/index';

export default function BookViewPage(){
    return(
      <>
        <NavBar />
        <BookAbout />
        <Footer />
      </>  
    );
}