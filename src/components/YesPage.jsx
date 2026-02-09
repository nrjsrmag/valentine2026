import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import photo9 from '../assets/9.jpg';
import photo10 from '../assets/10.jpg';
import photo11 from '../assets/11.jpg';
import photo12 from '../assets/12.jpg';
import photo13 from '../assets/13.jpg';
import photo14 from '../assets/14.jpg';
import './YesPage.css';

function YesPage() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const photosMap = {
    9: photo9,
    10: photo10,
    11: photo11,
    12: photo12,
    13: photo13,
    14: photo14,
  };

  const getPhotoForToday = () => {
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    if (month === 2 && date >= 9 && date <= 14) {
      return photosMap[date] || null;
    }
    return null;
  };

  const photo = getPhotoForToday();

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
            {photo ? (
              <img
                src={photo}
                alt="Our Special Memory"
                className="couple-photo"
              />
            ) : (
              <div className="photo-placeholder" style={{ display: 'flex' }}>
                <p className="photo-note">
                  📸 Add today's photo in:<br />
                  <code>src/assets/9.jpg</code> through <code>src/assets/14.jpg</code>
                </p>
                <p className="heart-emoji">❤️</p>
              </div>
            )}
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
