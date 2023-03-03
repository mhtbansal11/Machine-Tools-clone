import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./HomePage.module.css";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "../Components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductData } from "../Redux/AppReducer/action";
import { Link } from "react-router-dom";
import Sidebar1_H from "../Components/Sidebar1_H";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

const slides = [
  {
    url: "https://images4.alphacoders.com/114/1145045.png",
    alt: "1",
  },
  {
    url: "https://www.wightmanbuilding.com.au/wp-content/uploads/2017/02/construction-tools-dark-background.jpg",
    alt: "2",
  },
  {
    url: "https://cdn.wallpapersafari.com/68/6/XW2bnA.jpeg",
    alt: "3",
  },
  {
    url: "https://wallpaperaccess.com/full/2578393.jpg",
    alt: "4",
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 5000);
  }, [current, setCurrent]);

  const productData = useSelector((store) => store.appReducer);
  // console.log(store)
  const { payload } = productData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  return (
    // API done
    <div>
      <Navbar />
    <div style={{ display: "flex" , rowGap:"20px"}}>
      <div className={styles.sidebar} style={{ marginTop:"100px" , height:"100vh"}}>
        {/* SIDEBAR 1 */}
        <Sidebar1_H />
      </div>
      <div style={{ width: "75%", backgroundColor: "white", margin: "2%", marginLeft:"5%" }}>
        <div className={styles.slider}>
          <IoIosArrowBack className="arrow left" onClick={prevSlide} />
          {slides?.map(
            (item, index) =>
              index === current && (
                <div key={index}>
                  <img src={item.url} alt={item.alt} />
                </div>
              )
          )}
          <IoIosArrowForward className="arrow right" onClick={nextSlide} />
        </div>

        {/* offers */}
        <div>
          <img
            width="100%"
            src="https://static3.industrybuying.com/homepage/1652437509PowerHouse-Strip-Banner%20(1).png"
            alt="offer"
          />
        </div>

        {/* productPage scroll */}

        <Box m={5} mt={30} w="100%" textAlign="left">
          <Heading textAlign={"left"}>Products</Heading>
          <Grid
            className={styles.scrollBar}
            width="100%"
            gap={4}
            templateColumns="repeat(44, 1fr)"
            // templateRows="repeat(2,1fr)"
            overflowX={"scroll"}
          >
            {payload.map((singlePro) => {
              return (
                <GridItem
                  w="100%"
                  key={singlePro.id}
                  borderColor={"black"}
                  className={styles.main_div}
                >
                  <Link to={`/products/${singlePro.id}`}>
                    <ProductCard data={singlePro} />
                  </Link>
                </GridItem>
              );
            })}
          </Grid>
        </Box>

        {/* Category 1 */}

        <div className={styles.categories}>
          <Heading textAlign={"left"} mb={"5"}>
            Agriculture Garden & Landscaping
          </Heading>
          <Carousel className={styles.carousel}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                padding: "2%",
              }}
            >
              <div
                style={{
                  border: "2px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <Link to={`/products`}>
                  <img
                    src="https://static1.industrybuying.com/category_small/2022/11/grain-processing-machine-16292-1669116640479.webp"
                    alt="Grain Processing Machine"
                  />
                  <p>Grain Processing Machine</p>
                </Link>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Tillers and Cultivator "
                />
                <p>Tillers and Cultivator </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/brush-cutter-and-accessories-2387-1669114282645.webp"
                  alt="Brush Cutter and Accessories "
                />
                <p>Brush Cutter and Accessories</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/chaff-cutter-6234-1669114298515.webp"
                  alt="Chaff Cutter "
                />
                <p>Chaff Cutter</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/sprayers-15330-1669116165557.webp"
                  alt="Sprayers"
                />
                <p>Sprayers </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/chain-saw-15367-1669116180849.webp"
                  alt="Chain Saw"
                />
                <p>Chain Saw</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/water-pump-sets-16281-1669116634678.webp"
                  alt="Water Pump Sets "
                />
                <p>Water Pump Sets </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/lawn-mower-15410-1669116201052.webp"
                  alt="Lawn Mower"
                />
                <p>Lawn Mower </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/earth-auger-2442-1669114287178.webp"
                  alt="Earth Auger "
                />
                <p>Earth Auger </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/seed-planter-14148-1669114315344.webp"
                  alt="Seed Planter  "
                />
                <p>Seed Planter </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/garden-hand-tools-15358-1669116176395.webp"
                  alt="Garden Hand Tools "
                />
                <p>Garden Hand Tools </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/fertilizer-and-pest-control-17609-1669117293595.webp"
                  alt="Fertilizer and Pest Control "
                />
                <p>Fertilizer and Pest Control</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/fogging-machine-5081-1669114308393.webp"
                  alt="Fogging Machine "
                />
                <p>Fogging Machine </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/garden-hoe-6208-1669114297610.webp"
                  alt="Garden Hoe "
                />
                <p>Garden Hoe </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/harvester-2752-1669114305296.webp"
                  alt="Harvester "
                />
                <p>Harvester</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/garden-roller-16653-1669116802734.webp"
                  alt="Garden Roller"
                />
                <p>Garden Roller </p>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Category 2 */}

        <div className={styles.categories}>
          <Heading textAlign={"left"} mb={"5"}>
            Power Tools
          </Heading>
          <Carousel className={styles.carousel}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                padding: "2%",
              }}
            >
              <div
                style={{
                  border: "2px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/saws-910-1669115445304.webp"
                  alt="Saws "
                />
                <p>Saws </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/cordless-power-tools-16332-1669116657070.webp"
                  alt="Cordless Power Tools "
                />
                <p>Cordless Power Tools </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/sander-polisher-891-1669115438866.webp"
                  alt="Sander Polisher "
                />
                <p>Sander Polisher </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/electrical-screwdriver-4991-1669115433135.webp"
                  alt="Electrical Screwdriver "
                />
                <p>Electrical Screwdriver </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/grinders-890-1669115438175.webp"
                  alt="Grinders"
                />
                <p>Grinders</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/hot-air-guns-888-1669115437216.webp"
                  alt="Hot Air Guns "
                />
                <p>Hot Air Guns </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/impact-driver-885-1669115435479.webp"
                  alt="Impact Driver "
                />
                <p>Impact Driver </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/magnetic-core-drilling-machine-1881-1669115446340.webp"
                  alt="Magnetic Core Drilling Machine "
                />
                <p>Magnetic Core Drilling Machine </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/painting-tools-14370-1669115457177.webp"
                  alt="Painting Tools"
                />
                <p>Painting Tools</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/power-tool-accessories-4109-1669115447320.webp"
                  alt="Power Tool Accessories "
                />
                <p>Power Tool Accessories </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/screw-drivers-893-1669115440023.webp"
                  alt="Screw Drivers"
                />
                <p>Screw Drivers</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2016/06/Shears_and_Nibblers.jpg"
                  alt="Shears and Nibbler "
                />
                <p>Shears and Nibbler </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/spares-14348-1669115453491.webp"
                  alt="Spares "
                />
                <p>Spares </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/electric-nailer-stapler-2450-1669115433667.webp"
                  alt="Electric Nailer & Stapler "
                />
                <p>Electric Nailer & Stapler </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/speciality-tools-14367-1669115460977.webp"
                  alt="Speciality Tools"
                />
                <p>Speciality Tools</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/power-tools-combo-17585-1669117281319.webp"
                  alt="Power Tools Combo "
                />
                <p>Power Tools Combo </p>
              </div>
            </div>
          </Carousel>
        </div>

        {/* category 3 */}

        <div className={styles.categories}>
          <Heading textAlign={"left"} mb={"5"}>
            Testing and Measuring Instruments
          </Heading>
          <Carousel className={styles.carousel}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                padding: "2%",
              }}
            >
              <div
                style={{
                  border: "2px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/electrical-power-testing-14434-1669114222422.webp"
                  alt="Electrical Power Testing"
                />
                <p>Electrical Power Testing</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/non-electrical-properties-testing-14466-1669114209964.webp"
                  alt="Non Electrical Properties Testing "
                />
                <p>Non Electrical Properties Testing </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/dimension-measurement-15424-1669116208457.webp"
                  alt="Dimension Measurement "
                />
                <p>Dimension Measurement </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/pressure-vaccum-gauge-2096-1669114262294.webp"
                  alt="Pressure & Vaccum Gauge "
                />
                <p>Pressure & Vaccum Gauge </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/temperature-humidity-measuring-2210-1669114269047.webp"
                  alt="Temperature & Humidity Measuring"
                />
                <p>Temperature & Humidity Measuring</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/weighing-scales-and-systems-14472-1669114251600.webp"
                  alt="Weighing Scales and Systems "
                />
                <p>Weighing Scales and Systems </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/flow-meters-6127-1669114187344.webp"
                  alt="Flow Meter"
                />
                <p>Flow Meter</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/process-monitoring-14481-1669114255542.webp"
                  alt="Process Monitoring"
                />
                <p>Process Monitoring</p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/air-quality-measuring-2273-1669114273234.webp"
                  alt="Air Quality & Measuring "
                />
                <p>Air Quality & Measuring </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/electronic-testing-14454-1669114201084.webp"
                  alt="Electronic Testing"
                />
                <p>Electronic Testing</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/data-loggers-14504-1669114196104.webp"
                  alt="Data Loggers"
                />
                <p>Data Loggers</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/thermometers-15946-1669116469643.webp"
                  alt="Thermometers "
                />
                <p>Thermometers </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/automotive-testing-14271-1669114193183.webp"
                  alt="Automotive Testin"
                />
                <p>Automotive Testin</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/network-installation-instruments-14493-1669114248325.webp"
                  alt="Network Installation Instruments"
                />
                <p>Network Installation Instruments</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/measuring-tool-set-16623-1669116788886.webp"
                  alt="Measuring Tool Set "
                />
                <p>Measuring Tool Set </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/measuring-surveying-equipment--made-in-japan-17535-1669117254781.webp"
                  alt="Measuring & Surveying Equipment - Made In Japan"
                />
                <p>Measuring & Surveying Equipment - Made In Japan</p>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Category 4 */}
        <div className={styles.categories}>
          <Heading textAlign={"left"} mb={"5"}>
            IT & Electronics
          </Heading>
          <Carousel className={styles.carousel}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
                padding: "2%",
              }}
            >
              <div
                style={{
                  border: "2px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/network-components-3373-1669116018909.webp"
                  alt="Network Components"
                />
                <p>Network Components</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/label-printer-accessories-4184-1669116009294.webp"
                  alt="Label Printer & Accessories"
                />
                <p>Label Printer & Accessories</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/projectors-accessories-15138-1669116001225.webp"
                  alt="Projectors & Accessories "
                />
                <p>Projectors & Accessories </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/laptops-3920-1669115992384.webp"
                  alt="Laptops"
                />
                <p>Laptops</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/tillers-and-cultivator-15349-1669116172726.webp"
                  alt="Desktop"
                />
                <p>Desktop</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/monitors-3802-1669115984919.webp"
                  alt="Monitors"
                />
                <p>Monitors</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/printers-4146-1669115924163.webp"
                  alt="Printers"
                />
                <p>Printers</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/audio-17559-1669117266665.webp"
                  alt="Audio"
                />
                <p>Audio</p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "20px",
              }}
            >
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/computer-accessories-17557-1669117266029.webp"
                  alt="Computer Accessories"
                />
                <p>Computer Accessories</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/laptop-accessories-17561-1669117267851.webp"
                  alt="Laptop Accessories "
                />
                <p>Laptop Accessories </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/mobiles-accessories-17562-1669117268351.webp"
                  alt="Mobiles & Accessories"
                />
                <p>Mobiles & Accessories</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/camera-accessories-17575-1669117275595.webp"
                  alt="Camera & Accessories "
                />
                <p>Camera & Accessories </p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/communication-17571-1669117273343.webp"
                  alt="Communication"
                />
                <p>Communication</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/computer-components-17572-1669117274011.webp"
                  alt="Computer Components"
                />
                <p>Computer Components</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/gaming-17577-1669117276519.webp"
                  alt="Gaming"
                />
                <p>Gaming</p>
              </div>
              <div
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  padding: "5%",
                  backgroundColor: "white",
                }}
              >
                <img
                  src="https://static1.industrybuying.com/category_small/2022/11/point-of-sale-17576-1669117276067.webp"
                  alt="Point of Sale"
                />
                <p>Point of Sale</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
              
      
      
    </div>
    <div style={{ display: "flex" , rowGap:"20px"}}>
      <div style={{ marginTop:"50px" }}>
        {/* SIDEBAR 1 */}
        <Sidebar1_H />
      </div>
      <div style={{ width: "75%", backgroundColor: "white", margin: "2%", marginLeft:"5%" }}>
        <Footer  />
      </div>
    </div>
    </div>
    
  );
};

export default HomePage;
