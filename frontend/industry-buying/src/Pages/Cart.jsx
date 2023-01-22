import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { TbDiscount2 } from "react-icons/tb";
// import {Input, InputGroup, InputRightElement} from "@chakra-ui/react"
import { NavbarCart } from "../Components/NavbarCart";
import { useDispatch, useSelector } from "react-redux";
import { getCartData, getCartItem } from "../Redux/CartReducer/action";
import { CartProduct } from "../Components/CartProduct";
import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaPencilAlt } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Cart = () => {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useSelector((store) => store.cartReducer.cart);

  let ans = data.map((el) => el.price * el.quantity);
  console.log(ans);

  let initialValue = 0;
  let sumWithInitial = ans.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  console.log(sumWithInitial);

  const handleCoupon = () => {
    sumWithInitial = sumWithInitial - 300;
  };

  useEffect(() => {
    dispatch(getCartItem());
  }, [dispatch, sumWithInitial]);

  return (
    <div className={styles.cartPage}>
      {/* -----------------------NAVBAR---------------------- */}
      <NavbarCart />
      <div className={styles.pageWrapper}>
        {/* -----------------------LEFT SIDE SECTION---------------------- */}
        <div className={styles.pageLeftside}>
          <div className={styles.cartTotalQuantity}>
            <div className={styles.myCartWrapper}>
              <p className={styles.myCartText}>My Cart</p>
              <span>({data.length} Items)</span>
            </div>
            <div className={styles.orderHeading}>
              <p className={styles.itemHeading}>Item</p>
              <p className={styles.quantityHeading}>Quantity</p>
              <p className={styles.priceHeading}>Price(Inclusive of GST)</p>
            </div>
          </div>
          <div className={styles.productCardWrapper}>
            {data.map((el) => (
              <CartProduct key={el.image} {...el} />
            ))}
          </div>
        </div>

        {/* ----------------------RIGHT SIDE--------------------- */}
        <div className={styles.pageRightside}>
          {/* ------------------PAYMENT SUMMARY-------------------- */}
          <div>
            <div className={styles.textSymbolWrapper}>
              <div>Payment Summary</div>
              <div>
                <HiOutlineCurrencyRupee />
              </div>
            </div>
            <p className={styles.shippingChargesText}>
              Estimate shipping charges
            </p>
            <Stack spacing={4}>
              <InputGroup w={"90%"} m="auto">
                <Input
                  variant="outline"
                  borderColor="gray"
                  placeholder="ENTER YOUR PINCODE"
                  _placeholder={{ color: "grey", fontSize: "14px" }}
                />
                <InputRightElement children={<FaPencilAlt />} color="grey" />
              </InputGroup>
            </Stack>
            <div className={styles.shippingPriceInfo}>
              <div>
                <p>Subtotal</p>
                <p>Rs. {sumWithInitial}</p>
              </div>

              <div className={styles.shippingChargesIconText}>
                <p>Shipping charges</p>
                <p>FREE</p>
              </div>
            </div>
            <div className={styles.totalPriceWrapper}>
              <p>Total Price</p>
              <p>Rs. {sumWithInitial}</p>
            </div>
            <div className={styles.shippingText}>
              <FaShippingFast />
              <p> Shipping charges applicable as per your pincode</p>
            </div>
          </div>

          {/* -------------------Partner Offers----------------------- */}
          <div>
            <div className={styles.textSymbolWrapper}>
              <div>Partner Offers</div>
              <div>
                <TbDiscount2 />
              </div>
            </div>
            <div className={styles.offerText}>
              Get GST invoice and save up to 28% on Business Purchases.
            </div>
          </div>

          <div>
            <div className={styles.textSymbolWrapper}>
              <div>Offers Available</div>
              <div>
                <TbDiscount2 />
              </div>
            </div>
            {/* <InputGroup size='sm'>
          <Input placeholder='Enter Coupon Code' focusBorderColor='black'/>
          <InputRightElement children={'Apply'} color="orange" bg="none" mr="4"/>
        </InputGroup> */}
            <Stack spacing={4} mt="8px">
              <InputGroup w={"90%"} m="auto">
                <Input
                  variant="outline"
                  borderColor="black"
                  placeholder="ENTER COUPON CODE"
                  focusBorderColor="crimson"
                  _placeholder={{ color: "grey", fontSize: "14px" }}
                />
                <InputRightElement children={"Apply"} color="#E45301" mr="4" />
              </InputGroup>
            </Stack>
            {/* <Box display={"flex"} w={"90%"} margin="auto" mt="8px" alignItems={"center"} justifyContent="space-between">
                  <Box>GREENSOUL300</Box>
                  <Button onClick={handleCoupon}>Apply</Button>
          </Box> */}

            <Box>
              {/* <Button onClick={onOpen}>Open Modal</Button> */}
              <Box
                w="90%"
                m="auto"
                mt="16px"
                _hover={{ background: "#FB8339" }}
                cursor="pointer"
              >
                <Button
                  w="100%"
                  bg={"#FB8339"}
                  color="white"
                  fontWeight={"bold"}
                  p="14px"
                  onClick={onOpen}
                >
                  PLACE ORDER
                </Button>
              </Box>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
                bg="white"
              >
                <ModalOverlay />
                <ModalContent bg="white" color={"black"}>
                  <ModalHeader>Order Successful</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text fontWeight="bold" mb="1rem">
                      Yay! Thank you for shopping
                      <Image
                        _hover={{ scale: 1 }}
                        w="60%"
                        m="auto"
                        src={
                          "https://i.gifer.com/origin/11/1184b4c0aa977f925dde58d2075772dd_w200.gif"
                        }
                      />
                    </Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>
                    <Link to={`/`}>
                      <Button variant="outline" color={"black"}>
                        Continue Shopping
                      </Button>
                    </Link>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};
