import { useEffect, useState } from 'react';

export default function Typing(props) {
    const [text, setText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const words = ["data analyst", "BI analyst", "data storyteller", "problem solver"];
    const currentWord = words[wordIndex];
    
    useEffect(() => {
        const speed = isDeleting ? 150 : 150;

        const type = () => {
            if (textIndex === currentWord.length && !isDeleting) {
                // Start deletion after a delay when typing is complete
                setTimeout(() => {
                    setIsDeleting(true);
                }, 1500);
            }

            if (!isDeleting && textIndex < currentWord.length) {
                setText(prevText => prevText + currentWord[textIndex]);
                setTextIndex(prevIndex => prevIndex + 1);
            } else if (isDeleting && textIndex > 0) {
                setText(prevText => prevText.slice(0, -1));
                setTextIndex(prevIndex => prevIndex - 1);
            } else if (textIndex === 0 && isDeleting) {
                // Move to the next word and reset
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setText("");
            }
        };

        const timeout = setTimeout(() => {
            type();
        }, speed);

        return () => clearTimeout(timeout);
    }, [textIndex, isDeleting, currentWord,words.length]);

    return (<p {...props}>A {text}</p>);
}
