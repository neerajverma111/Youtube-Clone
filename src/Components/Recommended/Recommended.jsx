/* eslint-disable react/jsx-key */
import "./Recommended.css";

import { useEffect, useState } from "react";
import { API_KEY2, value_converter } from "../../data";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const Recommended = ({ categoryId }) => {
  const [apiData1, setApiData1] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY2}`;
  
    try {
      const response = await fetch(relatedVideo_url);
      if (!response.ok) {
        throw new Error("Failed fetching data");
      }
      const data = await response.json();
      setApiData1(data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  // const fetchData = async () => {
  //   const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY2}`;

  //   try {
  //     const response = await fetch(relatedVideo_url);
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     setApiData1(data.items);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData1.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
