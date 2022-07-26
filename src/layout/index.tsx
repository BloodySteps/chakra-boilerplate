import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box as="main">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
