import { AppNav } from "./AppNav";
import Footer from "./Footer";


export const ViewAllCustomer = () => {
  return (
    <div>
      <AppNav />
      <h2 className="bg-muted text-dark p-3 sticky-top">All customers list</h2>
       <Footer/>
    </div>
  );
};