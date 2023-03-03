import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import {FiFacebook,FiTwitter} from "react-icons/fi";
import {FaPinterestP} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    
  return (
    <div>

    
      <Tabs isFitted variant="enclosed" bg="#222f3e">
        <TabList mb="1em"  fontWeight='semibold' color="white">
          <Tab color="#999999" fontSize="xl">Shop All Categories</Tab>
          <Tab color="#999999"  fontSize="xl">Shop All Brands</Tab>
        </TabList>


        <TabPanels bg="#222f3e" p="3">
          <TabPanel>
            <Box display="flex" textAlign='left'  fontSize='sm' color="#2e5b85" bg="#222f3e">
                <Box w="20%">
                    <p>LED Lights</p>
                    <p>Paints</p>
                    <p>Corporate Gifts</p>
                    <p>Geysers</p>
                    <p>Welding</p>
                    <p>Tooling and Cutting</p>
                </Box>
                <Box w="20%">
                    <p>Abrasives</p>
                    <p>Power Tools</p>
                    <p>Pumps </p>
                    <p>Safety</p>
                    <p>Bearings </p>
                    <p>Cleaning </p>
                </Box>
                <Box w="20%">
                    <p>Dimension Measurement</p>
                    <p>Electrical</p>
                    <p>Electronics & Robotics</p>
                    <p>Fasteners</p>
                    <p>Furniture, Hospitality and Food Service</p>
                    <p>Hand Tools</p>
                </Box>
                <Box w="20%">
                    <p>Hydraulics</p>
                    <p>IT & Electronics</p>
                    <p>Industrial Automation</p>
                    <p>Lab Supplies</p>
                    <p>Machinery</p>
                    <p>Machining Accessories</p>
                </Box>
                <Box w="20%">
                    <p>Medical Supplies & Equipment</p>
                    <p>Office Supplies</p>
                    <p>Plumbing</p>
                    <p>Pneumatics</p>
                    <p>Automotive Maintenance and Accessories</p>
                    <p>Security</p>
                </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box display="flex" textAlign='left'  fontSize='sm' color="#2e5b85" bg="#222f3e">
                <Box w="20%">
                    <p>Bosch</p>
                    <p>Divano</p>
                    <p>Regent</p>
                    <p>Havells</p>
                    <p>Vj Interior</p>
                    <p>Kirloskar</p>
                    <p>Crompton</p>
                    <p>Solar India</p>
                    <p>Karcher</p>
                    <p>Blue Star</p>
                </Box>
                <Box w="20%">
                    <p>Omron</p>
                    <p>Su-kam</p>
                    <p>Swift</p>
                    <p>Hp</p>
                    <p>Ceat</p>
                    <p>Aristo</p>
                    <p>Nilkamal</p>
                    <p>Black & Decker</p>
                    <p>Apollo</p>
                    <p>Godrej</p>

                </Box>
                <Box w="20%">
                    <p>Yking</p>
                    <p>Kisankraft</p>
                    <p>Oscar</p>
                    <p>Housefull</p>
                    <p>Makita</p>
                    <p>Resqtech</p>
                    <p>HikVision</p>
                    <p>Cranlik</p>
                    <p>Almonard</p>
                    <p>HTC</p>

                </Box>
                <Box w="20%">
                    <p>JCB</p>
                    <p>Hitachi</p>
                    <p>SKIL</p>
                    <p>Taparia</p>
                    <p>Dewalt</p>
                    <p>Ferm</p>
                    <p>Supreme</p>
                    <p>Techno</p>
                    <p>Canon</p>
                    <p>Mitutoyo</p>
                </Box>
                <Box w="20%">
                    <p>Stanley</p>
                    <p>Bridgestone</p>
                    <p>Insize</p>
                    <p>Tiger</p>
                    <p>HomePro</p>
                    <p>Karma</p>
                    <p>Hillson</p>
                    <p>Bilt</p>
                    <p>Goodyear</p>
                    <p>Cumi</p>

                </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box >
        <Box p="7" display="flex" color="#c4ccc6" bg="#121a22" justifyContent="space-evenly" alignItem="center" borderBottom="1px solid #999999" >
            <Box textAlign="left">
                <Heading color="white" fontSize="md">Company</Heading>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Careers</Text>
                <Text>Sell On Industrybuying</Text>
                <Text>Special offers</Text>
                <Text>Articles</Text>
            </Box>
            <Box textAlign="left" w="25%" >
                <Heading color="white" fontSize="md">Help</Heading>
                <Text>FAQs</Text>
                <Text>Report Infringement</Text>
                <Text>Cancellations & Returns</Text>
                <br />
                <Heading color="white" fontSize="md">Have a question or want to place an order?</Heading>
                <Box display="flex">
                    {/* <BsPhoneVibrate /> */}
                    <Image w="10%" h="10%" src="https://cdn3.iconfinder.com/data/icons/social-media-2-4/63/phone-vibrate-512.png" alt="phone" />
                    <Text>Helpline Number: Call: +91 8448449073 (Mon-Sun: 9am-6pm)</Text>
                </Box>
                
            </Box>
            <Box textAlign="left">
                <Heading color="white" fontSize="md">Connect with us:</Heading>
                <Box display="flex" justifyContent="space-between" mt="4" mb="6" >
                <FiFacebook size="30px" />
                <FiTwitter size="30px" />
                <FaPinterestP size="30px" />
                </Box>
                <Heading color="white" fontSize="md">Download Our APP!</Heading>
                <Box display="flex" justifyContent="space-between" mt="4"  >
                    <Image src="https://www.industrybuying.com/static/shipafreight/images/playstore.png" alt="" />
                    <Image src="https://www.industrybuying.com/static/shipafreight/images/ios-app.png" alt="" />
                    
                </Box>
            </Box>
            <Box color="white" >
                <Button bg="orange" >
                    
                    <Link to={`/login`} >Sign Up / Login</Link>
                </Button>
            </Box>
        </Box>
        
        <Box display="flex"  alignItems='center' justifyContent="center" bg="#121a22" pt="3" pb="3" >
            <Heading color="white" fontSize="xl" >Payment Options</Heading>
            <Box>
                <Image src="https://www.industrybuying.com/static/images/payment_options_min.png" alt="visa" />    
            </Box> 
        </Box>
        <Box>
            <Text p="3" bg="#222f3e" color="white">Copyright © industrybuying.com 2013-2022 All Right Reserved | Privacy Policy | Terms & Conditions</Text>
        </Box>
        <Box p="5">
            <Heading fontSize="xl" textAlign="left">Your trusted Partner to buy Business Supplies online</Heading>
            <Text textAlign="left">At Industrybuying.com, we are committed to offering the best online shopping experience to our customers. So be it exclusive prices on the top brands or an array of top notch products, you can order the top quality Industrial and Business Supplies at affordable prices online. Get exciting deals to empty your wish-list at the largest e-procurement platform and enjoy the best B2B e-commerce experience like never before. All top brands under a single roof, quality assured products and value for money offers make it the biggest B2B marketplace amongst all B2B suppliers. Avail best prices when you shop online at India’s leading B2B E-commerce Portal. Also, get the services of our best dealer and distributor network in top cities such as Delhi NCR, Mumbai, Chennai, Bengaluru, Kolkata, Chennai, Pune, Jaipur, Hyderabad and Ahmedabad.</Text>
        </Box>
        
      </Box>
    </div>
  );
};
export default Footer;
