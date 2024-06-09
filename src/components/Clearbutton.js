const Clearbutton = ({ cells, setCells, setWinningMessage }) => {
    const handleClear = () => {
      setCells(["", "", "", "", "", "", "", "", ""]);
      setWinningMessage(null)
      console.log(cells);  // This will log the cells state before clearing
    };
  
    return (
      <div>
        <button type="button" className="btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    );
  };
  
  export default Clearbutton;