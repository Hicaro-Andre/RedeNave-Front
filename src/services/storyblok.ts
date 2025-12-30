import { storyblokInit, apiPlugin } from "@storyblok/react";

// Blocos do Home
import HomeHero from "../components/HomePage/HomeHero";
import StatsSection from "../components/HomePage/StatsSection";
import AboutSection from "../components/HomePage/AboutSection";
import TrilhasAprendizagem from "../components/HomePage/TrilhasAprendizagem";
import HowItWorks from "../components/HomePage/HowItWorks";
import NextEvents from "../components/HomePage/NextEvents";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";
import CallSection from "../components/HomePage/CallSection";

// Blocos do Trilhas
import TrilhasHeader from "../components/Trilhas/TrilhasHeader";
import TrilhasFilter from "../components/Trilhas/TrilhasFilter";




storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],

  components: {

    //Home
    HomeHero,
    StatsSection,
    AboutSection,
    TrilhasAprendizagem,
    HowItWorks,
    NextEvents,
    TestimonialsSection,
    CallSection,


    //Trilhas
    TrilhasHeader,
    TrilhasFilter

  },
});
