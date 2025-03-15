
const SlidingText: React.FC = () => {
  return (
    <div className="sliding-text-wrapper">
      <div className="sliding-text-container move-right">
        <p className="sliding-text">
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
        </p>
        <p className="sliding-text">
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
        </p>
      </div>

      <div className="sliding-text-container move-left">
        <p className="sliding-text">
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
        </p>
        <p className="sliding-text">
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
          LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • LOREM IPSUM • 
        </p>
      </div>
    </div>
  );
};

export default SlidingText;
