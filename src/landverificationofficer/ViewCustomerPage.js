import { Navigations } from "./Navigations";
import { Footers } from "./Footers";

export function ViewCustomerPage() {
  
  return (
    <div>
      <Navigations/>

      <h2 className="bg-muted text-dark p-3 sticky-top">Customer List</h2>

      
      <Footers/>
    </div>
  );
}