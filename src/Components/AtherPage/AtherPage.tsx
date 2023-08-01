import React, { useState } from "react";

function AtherPage() {
  const emojis = [
    "😀",
    "😂",
    "😍",
    "🥹",
    "🥰",
    "😛",
    "🤪",
    "🤨",
    "😏",
    "🥺",
    "😤",
    "😡",
    "🤬",
    "🥶",
    "😱",
    "🤔",
    "🫢",
    "😐",
    "😮",
    "😵",
    "🤨",
    "😴",
    "🙄",
    "🤑",
    "👽",
    "❤️",
    "💞",
    "♋️",
  ];

  const [currentEmoji, setCurrentEmoji] = useState("");
  const getRandomEmoji = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    setCurrentEmoji(randomEmoji);
  };

  return (
    <div className="flex">
      <section>
        <div className='row'>
          <div className='column'>
            <div className='card'>
              <div className='cover item-a'>
                <h1>west</h1>
                <button className='onck'> onclick </button>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='cover item-b'>
                <h1>East</h1>
                <button className='onck2'> onclick</button>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='cover item-c'>
                <h1>Gold</h1>
                <button className='onck3'> onclick</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[4rem] ml-[70rem]">
        <div className='conainer'>
          <h2>Random Emoji</h2>
          <p id='emoji-container'>{currentEmoji}</p>
          <button onClick={getRandomEmoji}>Generate</button>
          <div className='circle1'></div>
          <div className='circle2'></div>
        </div>
      </div>
    </div>
  );
}

export default AtherPage;
