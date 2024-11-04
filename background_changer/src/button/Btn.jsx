import './Btn.css';
let Btn = ({bgcolor, color, fun}) => {
   return (
      <>
         <button style={{backgroundColor : bgcolor, color : color}} onClick={fun}>{bgcolor}</button>
      </>
   )
}

export default Btn;