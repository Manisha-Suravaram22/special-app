import { useState } from "react";
import "./App.css";

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [noStyle, setNoStyle] = useState({});

  const correctPassword = "KishoreManisha22"; // ❤️ change this

  const handleUnlock = () => {
    if (password === correctPassword) {
      setShowSurprise(true);

      setTimeout(() => {
        setShowSurprise(false);
        setIsUnlocked(true);
      }, 2500);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 600);
    }
  };

  const moveNoButton = () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    });
  };

  // 🔐 PASSWORD SCREEN
  if (!isUnlocked) {
    return (
      <div className="container">
        {showSurprise ? (
          <div className="popup">
            🎉 Surpriseeee my loveeee<br />
            Ummahhhhhhhh <br />
            💋💋💖
          </div>
        ) : (
          <>
            <h1>Enter Secret Password 🔐</h1>

            <input
              type="password"
              placeholder="Enter our secret..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={wrong ? "shake" : ""}
            />

            <button onClick={handleUnlock} className="unlock">
              Unlock ❤️
            </button>
          </>
        )}
      </div>
    );
  }

  // 💘 MAIN APP
  return (
    <div className="container">
      <h1>Happy Valentine’s Day ❤️</h1>
      <h2>2 Years of Us 💕</h2>

      {!yesClicked ? (
        <>
          <p>
            It’s been two years since we met,<br />
            and from the very first day,<br />
            you filled my world with love and care.<br />
            Thank you for coming into my life<br />
            and making it not just better —<br />
            but the very best.<br />
          </p>

          <p className="question">
            Will you still choose me… always? 💖
          </p>

          <div className="buttons">
            <button className="yes" onClick={() => setYesClicked(true)}>
              YES ❤️
            </button>

            <button
              className="no"
              style={noStyle}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
            >
              NO 🙈
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hearts">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i}>❤️</span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={`k${i}`}>💋</span>
            ))}
          </div>

          <p className="final">
            I know you choose me ❤️🙈<br /><br />

            Thank you for all that love,<br />
            the care, the patience, and the warmth you give me every single day 💕<br /><br />

            I love you so much ❤️💋<br />
            The way you care for me,<br />
            the way you love me,<br />
            the selfless love you show me —<br />
            it is truly the most beautiful thing in my life 🥹💖<br /><br />

            You and everything you do<br />
            make me fall in love with you<br />
            again and again,<br />
            every single day 💞✨<br /><br />

            I hope we stay like this till the very end,<br />
            holding hands, loving deeply,<br />
            making countless memories,<br />
            laughing, growing, and choosing each other<br />
            always and forever 💍❤️<br /><br />

            I choose you —<br />
            every time,<br />
            in every life I have 💖<br /><br />

            I love you so so so much my husband❤️
          </p>

        </>
      )}
    </div>
  );
}

export default App;
