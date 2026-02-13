import { useState } from 'react'

function App() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noStyle, setNoStyle] = useState({})

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100
    const y = Math.random() * 200 - 100

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`
    })
  }

  return (
    <div className="container">
      <h1>Happy Valentine’s Day ❤️</h1>
      <h2>2 Years of Us 💕</h2>

      {!yesClicked ? (
        <>
          <p className="message">
            <p>
              It’s been two years since we met,<br />
              and from the very first day,<br />
              you filled my world with love and care.<br />
              Thank you for coming into my life<br />
              and making it not just better —<br />
              but the very best.<br />

            </p>

          </p>

          <p className="question">
            Will you still choose me…
            always? 💖
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
          {/* Floating hearts & kisses */}
          <div className="hearts">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i}>❤️</span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={`k${i}`}>💋</span>
            ))}
          </div>

          <p className="final">
            I know you choose me. ❤️
            <br /><br />
            Thank you for all that love,
            <br />
            the care, the patience, and the warmth.
            <br /><br />
            I choose you —
            <br />
            every time,
            <br />
            in every life I have. 💍
            <br />
            I love you daaa❤️❤️
          </p>
        </>
      )}


    </div>
  )
}

export default App
