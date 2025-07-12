const animations = `
  @keyframes infiniteScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  @keyframes infiniteScrollVertical {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }
  
  .animate-infinite-scroll {
    animation: infiniteScroll 25s linear infinite;
  }
  
  .animate-infinite-scroll:hover {
    animation-play-state: paused;
  }
  
  .animate-infinite-scroll-vertical {
    animation: infiniteScrollVertical 20s linear infinite;
  }
  
  .animate-infinite-scroll-vertical:hover {
    animation-play-state: paused;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .shimmer-effect {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    background-size: 200px 100%;
    animation: shimmer 2s infinite;
  }
`;

export default animations;
