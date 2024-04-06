import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/layouts/Header";
import { Hero } from "./Hero";
import { AboutUs } from "./AboutUs";
import { Brands } from "./Brands";
import { Services } from "./Services";
import { Gallery } from "./Gallery";
import { Contact } from "./Contact";
import { Footer } from "../../components/layouts/Footer";
import { Loader } from "../../components/Loader";
import NavigationContext from "../../contexts/NavigationContext";
import { Poster } from "./Poster";
import { Calender } from "./Calender";


export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);


  const scrollRefs = useContext(NavigationContext)

  const handleScrollToSections = (scrollRefs) => {
    if (scrollRefs.current) {
      scrollRefs.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <Header
              scrollRefs={scrollRefs}
              
            />
            {/* <Hero scrollRefs={scrollRefs} /> */}
            <AboutUs scrollref={scrollRefs.aboutUs} />
            <Brands />
            <Poster scrollRefs={scrollRefs} />
            <Services scrollref={scrollRefs.services} />
            <Gallery />
            <Calender/>
            <Contact scrollref={scrollRefs.contact} />
            <Footer
              scrollRefs={scrollRefs}
           
            />
          </>)
      }
    </>

  );
};
