import { React, useEffect, useState } from "react";
import SpotifyProgressBar from "./Widgets/SpotifyProgressBar";
import Vibrant from "node-vibrant";

export default function Spotify({ data }) {
  const [listening, setListening] = useState(false);
  const [bgColor, setBgColor] = useState('#000');

  useEffect(() => {
    if (data) {
      setListening(true);

      const albumCoverUrl = data.item.album.images[0].url;
      Vibrant.from(albumCoverUrl).getPalette((err, palette) => {
        if (palette) {

          const vibrant = palette.Vibrant.hex;
          const lightVibrant = palette.LightVibrant.hex;
          const muted = palette.Muted.hex;
          const gradient = `linear-gradient(134deg, ${vibrant}, ${lightVibrant}, ${muted}), 100%`;

          setBgColor(gradient); 
        }
      });
      

    }
  }, [data]);

  return (
    <div className="flex py-2.5">
      {listening ? (
        <div className="text-2xl text-lime-600 w-full px-2.5">
          <p>Currently Online</p>
          <p className="pb-3 text-xl">Listening to:</p>
          <div className="flex flex-col box-content border-2 h-max pb-2 text-white rounded-lg" style={{ background: bgColor }}>
            <div className="flex flex-row items-center">
              <img
                className="ml-1 mt-1 lg:ml-2 lg:mt-2 rounded-md w-auto h-24 object-contain"
                src={data.item.album.images[0].url}
                alt="Album Img"
              />
              <div className="ml-2 mr-1">
                <p className="mobile-M:text-lg sm:text-xs lg:text-sm xl:text-base font-bold">
                  {data.item.name}
                </p>
                <p className="text-xs xs:text-[0.6rem] leading-4 lg:text-xs">
                  {data.item.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
            </div>
            <div className="flex mx-2">
              <SpotifyProgressBar data={data}/>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-2.5 text-2xl text-slate-400">
          <p>Currently Offline</p>
          <p className="text-lg">Probably in class</p>
        </div>
      )}
    </div>
  );
}
