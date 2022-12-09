import { Box, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import logo from '../assets/icon.png'

import { Container, Row, Col } from 'reactstrap';

import Formik from './Form';

export default function Mint() {

  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col>
            <Box
              className="custom_margin_top custom_box shadow-lg py-4"
              mx="auto"
              mt="5.25rem"
              boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
              borderRadius="1.37rem"
            >
              <div className="mx-5 ">
                <Image src={logo} height={90} />
                <Text
                  className="form_heading"
                  fontWeight="800"
                >
                  Mint your NFT
                </Text>
                <Formik />
                
              </div>
            </Box>
          </Col>
        </Row>
      </Container>
    </>
  );
}
