import NavBar from '../components/navbar/desktop';
import PerfilFormulario from '../components/perfilFormulario';
import Footer from '../components/footer/index';
import { useParams } from 'react-router-dom';


export default function BookViewPage() {

  return (
    <>
      <NavBar />
      <PerfilFormulario />
      <Footer />
    </>
  );
}







