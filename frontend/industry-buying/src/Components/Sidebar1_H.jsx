import styles from "./Sidebar1_H.module.css";
// import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';
import {
  GiDrill,
  GiWindpump,
  GiWinterGloves,
  GiVacuumCleaner,
} from 'react-icons/gi'
import {
  CiForkAndKnife,
} from 'react-icons/ci'
import {
  FaBoxOpen,
  FaIndustry,
  FaCarAlt,
  FaTools,
} from 'react-icons/fa'
import {
  BsPlugFill,
  BsSpeedometer,
  BsLaptop,
} from 'react-icons/bs'
import {
  BiBed,
} from 'react-icons/bi'

  
const LinkItems = [
  { name: 'Agriculture Garden & Landscaping', icon: CiForkAndKnife},
  { name: 'Power Tools', icon: GiDrill },
  { name: 'Office Supplies', icon: FaBoxOpen },
  { name: 'Material Handling and Packaging', icon: FaIndustry },
  { name: 'Pumps', icon: GiWindpump },
  { name: 'Automotive Maintenance and Accessories', icon: FaCarAlt },
  { name: 'Safety', icon: GiWinterGloves },
  { name: 'Cleaning', icon: GiVacuumCleaner },
  { name: 'Electrical', icon: BsPlugFill },
  { name: 'Hand tools', icon: FaTools },
  { name: 'Testing and Measuring Instruments', icon: BsSpeedometer },
  { name: 'IT & Electronics', icon: BsLaptop },
  { name: 'Furniture, Hospitality and Food Service', icon: BiBed },

];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block'}}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none'}} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 200 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.500')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w="19.5%"
      fontSize="small"
      pos="fixed"
      {...rest}>
     
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <div className={styles.sub}>
        <div>Hello</div>
      </div>
      <a className={styles.Categories} href="">See All Categories</a>
      <div className={styles.offer}>
        <div>
          <img src="https://static3.industrybuying.com/homepage/1650521467istockphoto-643063772-612x612%20(2).jpg" alt="offer" />
          <p id={styles.saleoffer}>SPECIAL <br /> OFFERS</p>
        </div>
        <div>
        <img src="https://static3.industrybuying.com/homepage/160918seller-area.png" alt="offer" />
        <p>SELLER HUB</p>
        </div>
        <div>
        <img src="https://static3.industrybuying.com/homepage/1566817756image.webp" alt="offer" />
        <p>BUY NOW PAY LATER</p>
        </div>
      </div>
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="2"
        mx="2"
        role="group"
        cursor="pointer"
        _hover={{
          bg:'#525d62',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />
    </Flex>
  );
};