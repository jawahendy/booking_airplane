// Theme constants and style configurations
export const THEME = {
    gradients: {
        sky: 'linear-gradient(135deg, #87CEEB 0%, #4A90E2 30%, #2E86AB 70%, #1e3a8a 100%)',
        desktopSky: 'linear-gradient(to bottom, #87CEEB 0%, #4A90E2 50%, #2E86AB 100%)',
        wave: 'linear-gradient(to top, rgba(30, 58, 138, 0.2) 0%, transparent 100%)',
        overlayBr: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(79, 70, 229, 0.2) 100%)',
        overlayTl: 'linear-gradient(to top left, rgba(34, 211, 238, 0.05) 0%, transparent 50%, rgba(59, 130, 246, 0.15) 100%)',
    },
    
    animations: {
        float: 'float 20s ease-in-out infinite',
        delays: ['0s', '1s', '2s', '3s', '0.5s', '1.5s', '2.5s'],
    },
    
    spacing: {
        mobile: {
            padding: 'p-4 xs:p-6 sm:p-8',
            paddingTop: 'pt-6 xs:pt-8 sm:pt-12',
            paddingBottom: 'pb-6 xs:pb-8 sm:pb-12',
            paddingY: 'py-4 xs:py-6 sm:py-8',
            minHeight: 'min-h-[280px] xs:min-h-[320px] sm:min-h-[400px]',
        },
        desktop: {
            padding: 'p-8',
        },
    },
    
    borderRadius: {
        card: 'rounded-2xl xs:rounded-3xl',
        desktop: 'rounded-3xl',
    },
    
    opacity: {
        clouds: ['opacity-60', 'opacity-50', 'opacity-40', 'opacity-30'],
        particles: ['opacity-70', 'opacity-60', 'opacity-80', 'opacity-50'],
    },
} as const;

export const BACKGROUND_PATTERN = {
    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
                     radial-gradient(circle at 75% 75%, rgba(135, 206, 235, 0.4) 0%, transparent 50%),
                     radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.2) 0%, transparent 50%)`,
    backgroundSize: '100px 100px, 150px 150px, 200px 200px',
    animation: THEME.animations.float,
} as const;
