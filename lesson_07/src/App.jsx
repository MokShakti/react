import AppRoutes from './routes/AppRoutes';
import Header from "./components/Navbar/Header";
import './styles/globals.scss'

export default function App() {
   return (
      <>
         <Header />
         <AppRoutes />
      </>
   );
}
