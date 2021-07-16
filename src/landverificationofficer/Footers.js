import React from "react";
import { Navigations } from "./Navigations";

export function Footers() {
  return (
    <div>
      <Navigations/>
    <div className="footer">
      <footer class="py-3 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            ©️ Copyright. All Right Reserved
          </p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Footers;