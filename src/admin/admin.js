import { Carousel } from "react-bootstrap";
import { AppNav } from "./AppNav";
import Footer from "./Footer";


export function admin() {
 

  return (
    
    <div>
      <AppNav/>
      <h2 className="bg-muted text-dark p-3 sticky-top">admin</h2>

      
    <Footer/>
    </div>
  );
}