function NumberDisplay({ guessed }) {
   return (
      <div className="number-display">
         {guessed.map((digit, i) => (
            <div className="digit-box" key={i}>
               {digit !== null ? digit : ''}
            </div>
         ))}
      </div>
   );
}

export default NumberDisplay;