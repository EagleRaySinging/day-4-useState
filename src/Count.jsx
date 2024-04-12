import { useState } from "react";

export default function Count() {
  const [number, setNumber] = useState(0);

  const handleClick = (count) => {
    // if (number > 0) setNumber(number + count);
    // else {
    //   if (number === 0 && count === 1) setNumber(number + count);
    //   else alert("There is no more minus.");
    // }

    number > 0
      ? setNumber(number + count)
      : number === 0 && count === 1
      ? setNumber(number + count)
      : alert("There is no more minus.");
  };

  return (
    <div>
      <p>現在的數字是{number}</p>
      <button onClick={() => handleClick(1)} className="plus">
        加一
      </button>
      <button onClick={() => handleClick(-1)} className="minus">
        減一
      </button>
    </div>
  );
}
