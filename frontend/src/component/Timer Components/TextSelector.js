import './NumberSelector.css';

const TextSelector = ({ className, value }) => {
  return (
    <div className={`number-container ${className}`}>
      <input type="text" className="number-input" value={value} placeholder="Task...." />
    </div>
  );
};

export default TextSelector;
