import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './YesPage.css';

function YesPage() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const getPhotoForToday = () => {
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    
    // For February 9-14, use the date as photo name
    if (month === 2 && date >= 9 && date <= 14) {
      return `${date}.jpeg`;
    }
    return null;
  };

  const photoName = getPhotoForToday();

  return (
    <div className="yes-container">
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>

      <div className="yes-content">
        <h1 className="success-title">🎉 Best Decision Ever! 🎉</h1>
        
        <div className="meme-section">
          <div className="meme-card">
            <p className="meme-text top">WHEN SHE SAYS YES</p>
            <div className="meme-image-container">
              <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXFjaHlnZzIzd3k1NjVlbWUxeXJ2bHgyMmV0ampyNjdjN2Nxb3U3YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0MYt5jPR6QX5pnqM/giphy.gif" 
                alt="Celebration GIF" 
                className="meme-gif"
              />
            </div>
            <p className="meme-text bottom">BEST. DAY. EVER.</p>
          </div>
        </div>

        <div className="photo-section">
          <h2 className="photo-title">Two gareeb in love 💕</h2>
          <div className="photo-frame">
            {photoName ? (
              <img 
                src={`/src/assets/${photoName}`} 
                alt="Our Special Memory" 
                className="couple-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div className="photo-placeholder" style={{ display: photoName ? 'none' : 'flex' }}>
              <p className="photo-note">
                📸 Add today's photo in:<br />
                <code>src/assets/{photoName || '9.jpeg, 10.jpeg, etc.'}</code>
              </p>
              <p className="heart-emoji">❤️</p>
            </div>
          </div>
        </div>

        <div className="message-section">
          <p className="love-message">
            "You make every day feel like Valentine's Day! 💝"
          </p>
          <p className="subtitle-message">
            I'm the luckiest person in the world to have you! 
          </p>
        </div>

        <button className="btn-back" onClick={() => navigate('/')}>
          💕 Visit Again Tomorrow
        </button>
      </div>
    </div>
  );
}

export default YesPage;
