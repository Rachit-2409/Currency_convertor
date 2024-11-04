
import { useState } from 'react';
import './App.css'
import './Component/index.js'
import InputBox from './Component/InputBox.jsx';
import useCurrencyInfo from './Hooks/useCurrencyInfo.js';

function App() {
 
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("inr");
  const [to, setto] = useState("usd");
  const [convertedAmount, setconvertedAmount] = useState(0);
  const useCurrency = useCurrencyInfo(from);

  const options = Object.keys(useCurrency);


  const swap = () =>{
    setfrom(to);
    setto(from);
    setconvertedAmount(amount);
    setamount(convertedAmount)
  }

  const convert = () =>{
    setconvertedAmount(amount * useCurrency[to])
  }
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label='from'
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(Currency)=> setamount(amount)}
                        selectCurrecny={from}
                        onAmountChange={(amount)=>{setamount(amount)}}
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                    
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        onCurrencyChange={(Currency)=> setto(Currency)}
                        selectCurrecny={from}
                        
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert 
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
