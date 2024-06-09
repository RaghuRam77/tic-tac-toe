const Clearbutton = ({ cells, setCells , setWinningMessage}) => {
    const handleClear = () => {
      setCells(["", "", "", "", "", "", "", "", ""]);
      setWinningMessage(null)
    };
  
    return (
      <div className="text-center mt-3">
        <button type="button" className="btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    );
  };
  
  export default Clearbutton;