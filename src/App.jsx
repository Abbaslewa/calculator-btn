
import {  useState } from "react"
const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  
  const calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput('Error');
    }
  };
  const clearInput = () => {
    setInput('');
  };

  return (
    <div className="w-80 mx-auto mt-10 p-4 bg-gray-500 rounded-lg shadow-lg ">
      <input
        type="text"
        value={input}
        readOnly
        className="w-full text-right p-20 text-2xl bg-gray-600 text-white rounded mb-4"
      />
      
      <div className="grid grid-cols-4 gap-4 text-white ">
        <button onClick={() => handleClick('1')} className="btn hover:bg-black rounded-2xl">1</button>
        <button onClick={() => handleClick('2')} className="btn hover:bg-black rounded-2xl">2</button>
        <button onClick={() => handleClick('3')} className="btn hover:bg-black rounded-2xl ">3</button>
        <button onClick={() => handleClick('+')} className="btn p-1 text-black bg-yellow-500 rounded-lg">+</button>

        <button onClick={() => handleClick('4')} className="btn hover:bg-black rounded-2xl">4</button>
        <button onClick={() => handleClick('5')} className="btn hover:bg-black rounded-2xl">5</button>
        <button onClick={() => handleClick('6')} className="btn hover:bg-black rounded-2xl">6</button>
        <button onClick={() => handleClick('-')} className="btn p-1 bg-yellow-500 text-black rounded-lg">-</button>

        <button onClick={() => handleClick('7')} className="btn hover:bg-black rounded-2xl">7</button>
        <button onClick={() => handleClick('8')} className="btn hover:bg-black rounded-2xl">8</button>
        <button onClick={() => handleClick('9')} className="btn hover:bg-black rounded-2xl">9</button>
        <button onClick={() => handleClick('*')} className="btn p-1 bg-yellow-500 rounded-lg text-black">*</button>

        <button onClick={clearInput} className="btn bg-red-500 p-1 rounded-lg">C</button>
        <button onClick={() => handleClick('0')} className="btn hover:bg-black rounded-2xl">0</button>
        <button onClick={() => handleClick('%')} className="btn text-black bg-yellow-500 rounded-lg ">%</button>
        <button onClick={() => handleClick('/')} className="btn text-black bg-yellow-400 rounded-lg">/</button>

        <button onClick={calculate} className="col-span-4 btn bg-green-500 p-3 rounded-lg">=</button>
      </div>
    </div>
  );
};

export default Calculator;
