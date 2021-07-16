import Footers from "./Footers";
import { Navigations } from "./Navigations";

export function MyAppHomePage() {
 

  return (
    
    <div>
      <Navigations/>
      <h2 className="bg-muted text-dark p-3 sticky-top">Home</h2>

      
      <Footers/>
    </div>
  );
}