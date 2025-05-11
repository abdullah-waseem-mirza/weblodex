"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { gsap } from "gsap"
import hellow1 from '../components/images/hello5.jpg'
import hellow7 from '../components/images/hello5.jpg'
import { Link } from "react-router-dom";
export default function Hero() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const rendererRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const imageMeshRef = useRef(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const targetMousePosition = useRef({ x: 0, y: 0 })

  const bgImageUrl = hellow7

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const initThree = async () => {
      const scene = new THREE.Scene()
      sceneRef.current = scene

      const camera = new THREE.PerspectiveCamera(
        50,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        1000
      )
      camera.position.z = 10
      cameraRef.current = camera

      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true,
      })
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      rendererRef.current = renderer

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(1, 1, 1)
      scene.add(directionalLight)

      const textureLoader = new THREE.TextureLoader()
      const loadTexture = (url) => {
        return new Promise((resolve) => {
          textureLoader.load(url, (texture) => {
            texture.minFilter = THREE.LinearFilter
            texture.magFilter = THREE.LinearFilter
            texture.generateMipmaps = false
            resolve(texture)
          })
        })
      }

      const texture = await loadTexture(hellow1)

      const geometry = new THREE.PlaneGeometry(16, 9)
      const material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: false,
        opacity: 1,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(0, 0, -1)
      scene.add(mesh)
      imageMeshRef.current = mesh

      gsap.from(mesh.position, {
        y: -5,
        z: -10,
        duration: 1.8,
        ease: "power3.out",
      })
      gsap.from(mesh.rotation, {
        x: Math.PI / 4,
        y: Math.PI / 6,
        duration: 1.8,
        ease: "power3.out",
      })

      setLoading(false)
    }

    initThree()

    const handleMouseMove = (event) => {
      targetMousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      }
    }

    const handleTouchMove = (event) => {
      if (event.touches && event.touches.length > 0) {
        const touch = event.touches[0]
        targetMousePosition.current = {
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
        }
      }
    }

    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current) return

      cameraRef.current.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      cameraRef.current.updateProjectionMatrix()

      rendererRef.current.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }

    const animate = () => {
      requestAnimationFrame(animate)

      mousePosition.current.x += (targetMousePosition.current.x - mousePosition.current.x) * 0.1
      mousePosition.current.y += (targetMousePosition.current.y - mousePosition.current.y) * 0.1

      if (imageMeshRef.current) {
        const { x, y } = mousePosition.current

        gsap.to(imageMeshRef.current.rotation, {
          x: y * 0.2,
          y: x * 0.2,
          duration: 0.3,
        })
        gsap.to(imageMeshRef.current.position, {
          x: x * 0.5,
          y: y * 0.5,
          duration: 0.3,
        })
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("resize", handleResize)

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)

      if (imageMeshRef.current) {
        imageMeshRef.current.geometry.dispose()
        if (imageMeshRef.current.material instanceof THREE.Material) {
          imageMeshRef.current.material.dispose()
        } else if (Array.isArray(imageMeshRef.current.material)) {
          imageMeshRef.current.material.forEach((material) => material.dispose())
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100dvh] overflow-hidden"
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white z-10">
          <div className="text-2xl">Loading...</div>
        </div>
      )}

      <div className="absolute inset-0 bg-black/30 z-[5]"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 pointer-events-none px-4 sm:px-6">
  <div className="text-center py-6 sm:py-10 rounded-xl max-w-4xl mx-auto">
    <h1 className="font-extrabold mb-4 text-transparent bg-gradient-to-r from-indigo-400 via-violet-500 to-pink-600 bg-clip-text drop-shadow-xl"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          lineHeight: 1.2,
        }}>
      Welcome to Weblodex
    </h1>

    <p className="mb-8 text-white drop-shadow-lg font-sans"
       style={{
         fontSize: 'clamp(1rem, 2.5vw, 1.75rem)',
         lineHeight: 1.6,
       }}>
      Explore limitless possibilities in the digital world.
    </p>

   
<Link to="/contact">
  <button
    className="mt-2 sm:mt-4 bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-105 pointer-events-auto text-sm sm:text-base shadow-md"
    style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
  >
    Get In Touch With Weblodex
  </button>
</Link>
  </div>
</div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white text-xs sm:text-sm opacity-70 pointer-events-none text-center px-2">
        Move your mouse or drag on touch to interact with the image
      </div>
    </div>
  )
}
