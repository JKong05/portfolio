import { useEffect, useState } from 'react';

const SpotifyProgressBar = ({ data }) => {
  const [progress, setProgress] = useState(data.progress_ms);
  const duration = data.item.duration_ms;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 100);
    }, 100);

    if (progress >= duration) {
      clearInterval(interval); 
    }

    return () => clearInterval(interval);
  }, [progress, duration]);

  const progressPercentage = (progress / duration) * 100;

  return (
    <div className="w-full bg-gray-400 h-0.5 rounded-lg mt-2">
      <div
        className="bg-white h-0.5 rounded-lg"
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default SpotifyProgressBar;