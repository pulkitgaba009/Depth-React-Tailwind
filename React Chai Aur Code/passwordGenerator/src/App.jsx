import { useCallback, useEffect, useState ,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) {
      str += "0123456789";
    }
    if (isChar) {
      str += "!@#$%^&*()_+~-/<>";
    }

    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, isNumber, isChar, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(PasswordGenerator,[length,isChar,isNumber,setPassword])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-6 bg-gray-800 text-orange-400">
        <h1 className="text-2xl font-bold text-center mb-6">
          Password Generator
        </h1>

        {/* Password display */}
        <div className="flex shadow rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 bg-gray-700 text-white placeholder-gray-400"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClickCapture={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 px-4 text-white font-semibold"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm">
          {/* Length Slider */}
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">
              Length: <span className="text-white">{length}</span>
            </label>
            <input
              id="length"
              type="range"
              value={length}
              min={6}
              max={100}
              className="cursor-pointer w-40 accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Include Numbers */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="number"
              checked={isNumber}
              onChange={() => setIsNumber((prev) => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="number" className="cursor-pointer">
              Include Numbers
            </label>
          </div>

          {/* Include Symbols */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="char"
              checked={isChar}
              onChange={() => setIsChar((prev) => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="char" className="cursor-pointer">
              Include Symbols
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
