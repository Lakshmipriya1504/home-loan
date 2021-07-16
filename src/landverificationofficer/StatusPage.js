import Footers from "./Footers";
import { Navigations } from "./Navigations";

export function StatusPage() {
  

  return (
    <div>
       <Navigations/>
      <h2 className="bg-muted text-dark p-3 sticky-top">Status Detail</h2>

      <Footers/>
    </div>
   
  );
}