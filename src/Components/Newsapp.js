// import React, { useEffect, useState } from "react";
// import Card from "./Card";

// const Newsapp = () => {
//   const [search, setSearch] = useState("india");
//   const [newsData, setNewsData] = useState(null);
//   const API_KEY = "cc801acca5fd466abcd8bf4be2a4fc2d";

//   const getData = async () => {
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
//     );
//     const jsonData = await response.json();
//     console.log(jsonData.articles);
//     let dt = jsonData.articles.slice(0, 10);
//     setNewsData(dt);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleInput = (e) => {
//     console.log(e.target.value);
//     setSearch(e.target.value);
//   };
//   const userInput = (event) => {
//     setSearch(event.target.value);
//   };

//   return (
//     <div>
//       <nav>
//         <div>
//           <h1 className="h1">News24.</h1>
//         </div>
//         <ul style={{ display: "flex", gap: "10px" }}>
//           {/* <a
//             style={{
//               fontWeight: 600,
//               fontSize: "20px",
//               alignItems: "center",
//               color: "#f0f0f0",
//               fontFamily: "Times New Roman",
//             }}
//           >
//             All News Trending at News24.
//           </a> */}
//         </ul>
//         <div className="searchBar">
//           <input
//             type="text"
//             placeholder="Search News"
//             value={search}
//             onChange={handleInput}
//           />
//           <button onClick={getData}>Search</button>
//         </div>
//       </nav>
//       <div>
//         <p className="head">Stay Update with News24.</p>
//       </div>
//       {/* <div className='categoryBtn'>
//             <button onClick={userInput} value="sports">Sports</button>
//             <button onClick={userInput} value="politics">Politics</button>
//             <button onClick={userInput} value="entertainment">Entertainment</button>
//             <button onClick={userInput} value="health">Health</button>
//             <button onClick={userInput} value="fitness">Fitness</button>
//         </div> */}

//       <div>{newsData ? <Card data={newsData} /> : null}</div>
//     </div>
//   );
// };

// export default Newsapp;

import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "a1f248778fd7431aaec3afb2d7fcbd39";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    let dt = jsonData.articles.slice(0, 10);
    setNewsData(dt);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1 className="h1">News24.</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      {/* React Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {newsData &&
          newsData.slice(0, 5).map((news, index) => (
            <div key={index}>
              <img src={news.urlToImage} alt={news.title} />
              <p className="legend">{news.title}</p>
            </div>
          ))}
      </Carousel>

      <div>
        <p className="head">Stay Updated with News24.</p>
      </div>

      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};

export default Newsapp;
