import React from "react"
import Particles from 'react-tsparticles'

const ParticleBg = () => {
    return (
        <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 1.5,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // value: ["#F79548", "#F72119"],
              value: "#FFFFFF",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "top",
              enable: true,
              random: false,
              speed: 0.1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 0.5,
            },
          },
          detectRetina: true,
        }}
      />
    )
  }

export default ParticleBg