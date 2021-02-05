//  for React 16.8+ it heps to scroll to top the linked page 

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();/* useLocation, it's a hook, current location: pathname */

   // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}