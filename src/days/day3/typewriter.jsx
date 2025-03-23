import { useState, useEffect } from "react";

const Typeer = ({ texts, speed = 100, deleteSpeed = 50, pause = 1500 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];
    let timeout;

    if (!isDeleting) {
      // Typing effect
      if (text.length < currentText.length) {
        timeout = setTimeout(() => {
          setText(currentText.slice(0, text.length + 1));
        }, speed);
      } else {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // Deleting effect
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentText.slice(0, text.length - 1));
        }, deleteSpeed);
      } else {
        // Move to the next text
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, deleteSpeed, pause]);

  return (
    <span className="text-black text-4xl font-mono">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default function Typer({text}) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Typeer className = "text-5xl"
        texts={text}
        speed={50}
        deleteSpeed={50}
        pause={1500}
      />
    </div>
  );
}
