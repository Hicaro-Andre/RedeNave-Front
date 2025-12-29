import { storyblokInit, apiPlugin } from "@storyblok/react";

// Blocos do Storyblok
import HomeHero from "../components/HomePage/HomeHero";
import StatsSection from "../components/HomePage/StatsSection";
import AboutSection from "../components/HomePage/AboutSection";
import TrilhasAprendizagem from "../components/HomePage/TrilhasAprendizagem";
import HowItWorks from "../components/HomePage/HowItWorks";
import NextEvents from "../components/HomePage/NextEvents";
import TestimonialsSection from "../components/HomePage/TestimonialsSection";
import CallSection from "../components/HomePage/CallSection";



storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    HomeHero,
    StatsSection,
    AboutSection,
    TrilhasAprendizagem,
    HowItWorks,
    NextEvents,
    TestimonialsSection,
    CallSection,
  },
});
