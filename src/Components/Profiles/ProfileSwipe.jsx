import React, { useState } from "react";
import { CardSwiper } from "react-card-rotate-swiper";
import { useSelector } from "react-redux";
// import Create from "./Create";
import Pictures from "./Carousel";
import "../assets/profiles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Swipe = () => {
  let state = useSelector((state) => state);

  const handleSwipe = (d) => {
    //fill this your callback
  };

  let body = document.querySelector("body");
  body.style.background =
    "url('https://images.pexels.com/photos/6775241/pexels-photo-6775241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')";
  body.style.maxHeight = "1000vh";

  console.log(state);
  console.log(window.screen.availWidth, window.screen.availHeight);

  const mobile = {
    display: "flex",
    flexDirection: "column",
  };

  const web = {
    marginTop: "1vh",
    marginLeft: "1vw",
    marginRight: "20vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div
      style={
        window.screen.availHeight > 1000 && window.screen.availHeight > 700
          ? web
          : mobile
      }
    >
      <div
        style={{
          backgroundColor: "rgba(255, 200, 221, 0.8)",
          padding: "1%",
          width: "90%",
          overflow: "scroll",
          height: "80vh",
          marginLeft: "2vw",
        }}
      >
        {/* <Create token={state.token}/> */}
        <CardSwiper
          onSwipe={handleSwipe}
          className={"swiper"}
          contents={
            <div>
              <Pictures />
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos, officia iste? Asperiores id explicabo in delectus
                debitis! Eligendi dignissimos repellendus sit officiis provident
                dicta, ipsa deleniti quo earum! Culpa, explicabo iste. Neque
                culpa nesciunt pariatur numquam reiciendis quia adipisci vero
                laudantium quis incidunt. Velit obcaecati, fugiat accusantium
                quam fuga architecto, placeat temporibus quas consectetur maxime
                voluptatibus natus facere? Recusandae eaque nulla non repellat
                adipisci similique sapiente, possimus dolores soluta laborum
                fugit, veniam eligendi totam veritatis unde facilis architecto
                explicabo laboriosam dignissimos ipsa voluptates necessitatibus.
                Nisi nulla repellendus veritatis dolorum? Labore quae quibusdam
                vero, expedita earum delectus voluptatum deleniti rem
              </p>
            </div>
          }
        />
        
      </div>
      <div>Div that shall be containing the messages</div>
    </div>
  );
};

export default Swipe;
