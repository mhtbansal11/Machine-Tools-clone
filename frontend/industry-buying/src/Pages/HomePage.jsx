import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  return (
    // API done
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", backgroundColor: "grey" }}>
        {/* SIDEBAR 1 */}
      </div>
      <div style={{ width: "60%", backgroundColor: "white" }}>
        <div>
          <Carousel>
            <div>
              <img
                src="https://images4.alphacoders.com/114/1145045.png"
                alt="1"
              />
            </div>
            <div>
              <img
                src="https://www.wightmanbuilding.com.au/wp-content/uploads/2017/02/construction-tools-dark-background.jpg"
                alt="1"
              />
            </div>
            <div>
              <img
                src="https://cdn.wallpapersafari.com/68/6/XW2bnA.jpeg"
                alt="1"
              />
            </div>
            <div>
              <img 
                src="https://wallpaperaccess.com/full/2578393.jpg"
                alt="1" />
            </div>

            {/* <img style={{width:"100%"}} src="https://wallpapercave.com/wp/wp2515644.jpg" alt="1" /> */}
            {/* <img style={{width:"100%"}} src="https://cdn.wallpapersafari.com/52/82/LGnlIp.jpg" alt="1" /> */}
          </Carousel>
        </div>
        <div >
          <img
            width="100%"
            src="https://static3.industrybuying.com/homepage/1652437509PowerHouse-Strip-Banner%20(1).png"
            alt="offer"
          />
        </div>
        <div>
          <h1 style={{fontSize:25, textAlign:"left"}}>
            <b>Agriculture Garden & Landscaping</b>
          </h1>
          <Carousel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/grain-processing-machine-16292-1669116640479.webp"
                  alt="Grain Processing Machine"
                />
                <p>Grain Processing Machine</p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <h1 style={{fontSize:25, textAlign:"left"}}>
            <b>Agriculture Garden & Landscaping</b>
          </h1>
          <Carousel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/grain-processing-machine-16292-1669116640479.webp"
                  alt="Grain Processing Machine"
                />
                <p>Grain Processing Machine</p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <h1 style={{fontSize:25, textAlign:"left"}}>
            <b>Agriculture Garden & Landscaping</b>
          </h1>
          <Carousel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/grain-processing-machine-16292-1669116640479.webp"
                  alt="Grain Processing Machine"
                />
                <p>Grain Processing Machine</p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
          </Carousel>
        </div>
        <div>
          <h1 style={{fontSize:25, textAlign:"left"}}>
            <b>Agriculture Garden & Landscaping</b>
          </h1>
          <Carousel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/grain-processing-machine-16292-1669116640479.webp"
                  alt="Grain Processing Machine"
                />
                <p>Grain Processing Machine</p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }}>
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
