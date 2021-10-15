import './NumberSelector.css';

const NumberSelector = ({ className, refValue, defaultValue }) => {
  return (
    <div className={`number-container ${className}`}>
      <input
        type="number"
        className="number-input"
        ref={refValue}
        defaultValue={defaultValue}
        min="0"
        max="99"
      />
    </div>
  );
};

export default NumberSelector;
