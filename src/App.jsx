// src/App.jsx
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function App() {
  const headerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Timeline GSAP
    const tl = gsap.timeline()

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5") // Commence 0.5s avant la fin de l'animation précédente
  }, [])

  return (
    <section className="h-screen bg-slate-900 text-white p-52">
      <div ref={headerRef}>
        <h1 className="text-8xl font-bold">Mon Portfolio</h1>
      </div>
      
      <main ref={textRef}>
        <p className="text-xl text-gray-300">
          Bienvenue sur mon portfolio. Je suis un développeur web passionné 
          par la création d'expériences numériques uniques.
        </p>
      </main>
    </section>
  )
}

export default App