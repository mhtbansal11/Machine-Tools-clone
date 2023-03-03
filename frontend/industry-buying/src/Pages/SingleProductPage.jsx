import {
  Heading,
  SimpleGrid,
  Text,
  Button,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import Carousel from "../Components/ImageCarousel";
import { addProductData } from "../Redux/AppReducer/action";
import styles from "./SingleProductPage.module.css";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";

const SingleProductPage = () => {
  const { id } = useParams();
  const productData = useSelector((store) => store.appReducer.payload);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [currrentPro, setCurrentPro] = useState([]);

  const addToBag = () => {
    dispatch(addProductData(currrentPro));
    console.log("Done")
  };

  useEffect(() => {
    if (id) {
      const product = productData.filter((item) => item.id === Number(id));
      const pro = product[0];
      console.log(pro);
      pro && setCurrentPro(pro);
    }
  }, [id]);

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar />

      <div style={{ display: "flex", margin: "2%", marginTop:"100px" }}>
        {/* div for side bar */}
        <div className={styles.parent_single}>
          <div>
            <SimpleGrid
              columns={{ base: 1, sm: 1, md: 2 }}
              className="single-div"
            >
              <img className={styles.single_div_img} src={currrentPro.image} />

              <div
                style={{
                  lineHeight: "30px",
                  marginLeft: "5%",
                  marginRight: "5%",
                }}
              >
                <Heading as="h4">
                  <b>{currrentPro.title}</b>
                </Heading>

                <Text fontSize="lg">
                  by<b> {currrentPro.brand}</b>
                </Text>

                <Text fontSize="lg">
                  Discount Upto <b>{currrentPro.discount} % </b>
                </Text>

                <Text fontSize="lg">Rs. {currrentPro.price}/Piece </Text>

                <div>
                  <ul>
                    <Text fontSize="lg" text-align="left">
                      <b> Features</b>
                    </Text>
                    <li>Brand Name : {currrentPro.brand} </li>
                    <li>Machine Size : 800 (L) x 300 (W) x 1130 (H) mm </li>
                    <li>Spindle Speed : 1400-1600 RPM</li>
                    <li>Type of Product : Rice Mill Machine</li>
                    <li>
                      Production Capacity : Rice ≥165-200 kg/hour, Millet
                      ≥120-150 kg/hour
                    </li>
                  </ul>
                  <Button
                    onClick={handleClickScroll}
                    colorScheme={"blue"}
                    variant="outline"
                  >
                    MORE DETAILS
                  </Button>
                </div>

                <div>
                  <Text color="blue" underline="true">
                    More Agripro Grain Processing Machine More Grain Processing
                    Machine
                  </Text>
                </div>
              </div>
            </SimpleGrid>
          </div>
        </div>

        {/* div for but now */}
        <div style={{ width: "30%", marginLeft: "2%" }}>
          {/* <AddToBag item={currrentPro} addToBag={addToBag} /> */}
          <div className={styles.buy_now}>
            <div>
              {console.log(currrentPro.price)}
              <Heading>Rs. {currrentPro.price}/Piece</Heading>(GST inclusive
              price)
              <br></br>
              <Text>Rs.10,000 (GST extra)</Text>
            </div>

            <div>
              <p>Get customized price</p>
              <hr></hr>

              <div style={{ margin: "2%" }}>
                {/* <Button onClick={addToBag}>ADD TO CART</Button> */}
                <>
                  <Button
                    colorScheme="red"
                    variant={"outline"}
                    onClick={onOpen}
                  >
                    ADD TO CART
                  </Button>

                  <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                  >
                    <AlertDialogOverlay>
                      <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                          Product is adding to cart....
                        </AlertDialogHeader>

                        <AlertDialogBody>Are you sure?</AlertDialogBody>

                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            CANCEL
                          </Button>
                          <Button
                            colorScheme="red"
                            onClick={()=>{addToBag();
                              {onClose()}
                              }}
                            ml={3}
                          >
                            ADD
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialogOverlay>
                  </AlertDialog>
                </>
                <br></br>
                <br></br>
                <Button colorScheme={"black"} variant="outline">
                  BUY NOW
                </Button>
              </div>
            </div>

            <Text color={"blue"}>Sell this item on industrybuying</Text>
            <Text color="blue">Need help? Call on +91 844844907</Text>
          </div>
          <div style={{ margin: "5%" }}>
            <Box bg="yellow.100" display="flex">
              <Text>
                Flat Rs.100 Off on Orders Above Rs.2000 only on App orders.
              </Text>
              <Box>Use Code : APP100</Box>
            </Box>
          </div>
        </div>
      </div>

      <div
        id="section-1"
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "15%",
        }}
      >
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div
        style={{
          width: "90%",
          height: "content-fit",
          padding: "3%",
          margin: "auto",
        }}
      >
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
