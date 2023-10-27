import { FC } from 'react'

interface LettersProps {
    letterClass: string,
    strArray: string[]; 
    idx: number
}

const AnimatedLetters: FC<LettersProps> = ({ letterClass, strArray, idx }) => {
    return (
      <span>
        {strArray.map((char, i) => (
          <span
            key={char + i}
            className={`inline-block opacity-0 animate-bounce-in duration-1000 delay-1000 min-w-10 ${letterClass} hover:animate-rubber-band hover:text-yellow-400 _${i + idx}`}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };
  
  export default AnimatedLetters;