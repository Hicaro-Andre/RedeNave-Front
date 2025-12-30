import { useState } from 'react'
import "../styles/trilhas.css"
import { StoryblokComponent, storyblokEditable, useStoryblok } from '@storyblok/react'

import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import LoadingSpinner from '../components/LoadingSpinner'

import ListaTrilhas from '../components/Trilhas/ListaTrilhas'



function Trilhas() {
  const story = useStoryblok("trails", {
    version: "draft",
  });

  if (!story || !story.content) {
    return <LoadingSpinner />;
  }

  const { body } = story.content;

  return (
    <>
      <Navbar />

      {/* Conteúdo gerenciado pelo CMS */}
      {body?.map((blok: any) => (
        <div key={blok._uid} {...storyblokEditable(blok)}>
          <StoryblokComponent blok={blok} />
        </div>
      ))}

      <ListaTrilhas />
      <Footer />
    </>
  )
}

export default Trilhas
