// Animation constants for framer-motion
import { Variants, Transition } from "framer-motion";

const customEase = "easeOut";

export const ANIMATIONS = {
    // Container animations
    container: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8, ease: customEase } as Transition
    },

    // Slide animations
    slideUp: {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: customEase } as Transition
    },

    slideDown: {
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: customEase } as Transition
    },

    slideLeft: {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.6, ease: customEase } as Transition
    },

    slideRight: {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.6, ease: customEase } as Transition
    },

    // Scale animations
    scaleIn: {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, ease: customEase } as Transition
    },

    scaleInBounce: {
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { 
            duration: 0.6, 
            ease: customEase,
            scale: { type: "spring", damping: 15, stiffness: 300 }
        } as Transition
    },

    // Fade animations
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.4, ease: customEase } as Transition
    },

    fadeInUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: customEase } as Transition
    },

    // Stagger animations
    staggerContainer: {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    },

    staggerItem: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: customEase } as Transition
    },

    // Background animations
    backgroundFloat: {
        initial: { y: 0 },
        animate: { 
            y: [-10, 10, -10],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    },

    // Particle animations
    particleFloat: {
        initial: { y: 0, x: 0 },
        animate: {
            y: [-5, 5, -5],
            x: [-3, 3, -3],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    },

    // Cloud animations
    cloudFloat: {
        initial: { x: 0 },
        animate: {
            x: [-20, 20, -20],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    },

    // Hero image animation
    heroFloat: {
        initial: { y: 0, rotate: 0 },
        animate: {
            y: [-10, 10, -10],
            rotate: [-1, 1, -1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    },

    // Card animations
    cardHover: {
        whileHover: { 
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: { duration: 0.2 }
        }
    },

    // Feature animations
    featureIcon: {
        initial: { scale: 0, rotate: -180 },
        animate: { scale: 1, rotate: 0 },
        transition: { 
            duration: 0.5, 
            ease: customEase,
            delay: 0.3
        } as Transition
    },

    // Delayed animations
    delayedFadeIn: (delay: number) => ({
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay, ease: customEase } as Transition
    }),

    delayedSlideUp: (delay: number) => ({
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, delay, ease: customEase } as Transition
    }),

    delayedScaleIn: (delay: number) => ({
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 0.5, delay, ease: customEase } as Transition
    }),

    // Entrance animations with viewport detection
    viewport: {
        once: true,
        margin: "-100px"
    }
} as const;

// Variant collections for complex animations
export const VARIANTS: Record<string, Variants> = {
    // Container with staggered children
    staggerContainer: {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    },

    // Individual stagger items
    staggerChild: {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4, ease: customEase }
        }
    },

    // Background elements
    backgroundElements: {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: { duration: 1, ease: customEase }
        }
    },

    // Floating clouds
    floatingClouds: {
        initial: { opacity: 0, x: -100 },
        animate: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 1, ease: customEase }
        }
    },

    // Particles
    particles: {
        initial: { opacity: 0, scale: 0 },
        animate: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5, ease: customEase }
        }
    }
};
