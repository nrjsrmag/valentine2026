import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [noButtonBroken, setNoButtonBroken] = useState(false);
  const [hoverCount, setHoverCount] = useState(0);
  const [buttonPosition, setButtonPosition] = useState({ top: 'auto', left: 'auto' });
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getValentineDay = () => {
    const date = currentTime.getDate();
    const month = currentTime.getMonth() + 1; // February is month 1 (0-indexed)
    
    // Valentine's Week 2026 dates with custom messages
    if (month === 2) {
      switch (date) {
        case 7: return {
          title: '🌹 Rose Day',
          message: "Here's a rose. Please pretend it smells amazing and costs a lot of money 🌹🙃"
        };
        case 8: return {
          title: '💍 Propose Day',
          message: "I already proposed, you said yes, paperwork is done… but legally re-confirming anyway 💍😏"
        };
        case 9: return {
          title: '🍫 Chocolate Day',
          message: "I bought chocolates for you. If they mysteriously disappear, no further questions please 🍫😌"
        };
        case 10: return {
          title: '🧸 Teddy Day',
          message: "I'm your teddy. Warm, soft, and occasionally useless 🧸😎"
        };
        case 11: return {
          title: '🤝 Promise Day',
          message: "I promise to love you forever… and still ask 'what's for dinner?' every day 🤝😂"
        };
        case 12: return {
          title: '🤗 Hug Day',
          message: "Hugs available on demand. Refunds not accepted. Complaints ignored 🤗😏"
        };
        case 13: return {
          title: '💋 Kiss Day',
          message: "Kisses may be frequent, dramatic, and completely unnecessary… but happening anyway 💋😈"
        };
        case 14: return {
          title: '❤️ Valentine\'s Day',
          message: "Congratulations. You successfully married your Valentine. No returns, no exchanges ❤️😌"
        };
        default: return {
          title: '💕 Valentine Week',
          message: "Love is in the air! 💕"
        };
      }
    }
    return {
      title: '💕 Valentine Season',
      message: "Every day with you is Valentine's Day! 💕"
    };
  };

  const formatTimeIST = () => {
    return currentTime.toLocaleTimeString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDateIST = () => {
    return currentTime.toLocaleDateString('en-IN', {
      timeZone: 'Asia/Kolkata',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleYes = () => {
    navigate('/yes');
  };

  const handleNoHover = () => {
    if (hoverCount < 3) {
      // Move button to random position
      const randomTop = Math.floor(Math.random() * 60) + 10; // 10-70%
      const randomLeft = Math.floor(Math.random() * 60) + 10; // 10-70%
      setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
      setHoverCount(prev => prev + 1);
    } else {
      setNoButtonBroken(true);
    }
  };

  const handleNo = () => {
    // For touch/click devices, treat taps like a hover attempt
    handleNoHover();
  };

  return (
    <div className="home-container">
      <div className="hearts-bg">
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
        <div className="heart"></div>
      </div>
      
      <div className="content-card">
        <div className="datetime-section">
          <h2 className="valentine-day">{getValentineDay().title}</h2>
          <p className="date">{formatDateIST()}</p>
          <p className="time">{formatTimeIST()} IST</p>
          <p className="valentine-message">{getValentineDay().message}</p>
        </div>

        <div className="question-section">
          <h1 className="main-question">
            Will you be my Valentine? 💕
          </h1>
          <p className="subtitle">Choose wisely... 😊</p>
        </div>

        <div className="buttons-section">
          <button className="btn btn-yes" onClick={handleYes}>
            Yes! 💖
          </button>
          <button className="btn btn-absolutely" onClick={handleYes}>
            Absolutely! 🥰
          </button>
          <button 
            className={`btn btn-no ${noButtonBroken ? 'broken' : ''} ${hoverCount > 0 && hoverCount < 3 ? 'runaway' : ''}`}
            onClick={handleNoHover}
            onMouseEnter={handleNoHover}
            onPointerEnter={handleNoHover}
            onTouchStart={handleNoHover}
            style={hoverCount > 0 && hoverCount < 3 ? buttonPosition : {}}
          >
            {noButtonBroken ? 'Enough! Not Happening!' : 'No'}
          </button>
        </div>

        {noButtonBroken && (
          <div className="rejection-message">
            <p className="glitch">No! Not! Never! 😈</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
