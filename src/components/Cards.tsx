import { Box } from '@chakra-ui/react';
import { Container, Row, Col } from 'reactstrap';

export default function Cards() {

    return (
        <>
            <Container>
                <Row>
                    <Col xs="12" sm="4">
                        <Box
                            className="shadow-lg py-3 box-size"
                            mt="5.25rem"
                            boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
                            borderRadius="1.37rem"
                        >
                            <div className="mx-3 text-center">
                                <svg className='svg-align my-3' width="30" height="30" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z"
                                        fill="#ff1100" />
                                </svg>

                                <b>Bling</b>
                                <p>
                                    Showcase your NFTs by Blinging the NFTS in Your Digital Gallery. Simply connect your Digital Wallet and start sharing your NFT's. <br /><br /> If you have it Bling it !!
                                </p>


                            </div>
                        </Box>
                    </Col>
                    <Col xs="12" sm="4">
                        <Box
                            className="shadow-lg py-3 box-size"
                            mt="5.25rem"
                            boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
                            borderRadius="1.37rem"
                        >
                            <div className="mx-3 text-center">
                                <svg className='svg-align my-3' width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10 8.9c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1ZM10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0Zm2.2 12.2L4 16l3.8-8.2L16 4l-3.8 8.2Z"
                                        fill="#77db7c" fillRule="evenodd" className="fill-000000"></path>
                                </svg>
                                <b>Explore</b>
                                <p>
                                    Connect with people, build influence, and create compelling NFTs that are
                                    distinctly yours.
                                    <br /><br />Explore the world of NFT's by following freinds, celeberties or just
                                    about anyone !
                                </p>
                            </div>
                        </Box>
                    </Col>
                    <Col xs="12" sm="4">
                        <Box
                            className="shadow-lg py-3 box-size"
                            mt="5.25rem"
                            boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
                            borderRadius="1.37rem"
                        >
                            <div className="mx-3 text-center ">
                                <svg className='svg-align my-3' width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.393 2.994a.5.5 0 0 0-.011-.912L12.4.785a1 1 0 0 0-.8 0L2.531 4.728a.5.5 0 0 0 .007.92l3.555 1.481a.5.5 0 0 0 .4-.008ZM13.25 22.494a.5.5 0 0 0 .707.455l8.957-4.071a1 1 0 0 0 .586-.911V7.212a.5.5 0 0 0-.707-.456l-9.25 4.205a.5.5 0 0 0-.293.455Zm4.9-9.236a.5.5 0 0 1 .707 0l1.5 1.5a.5.5 0 0 1-.353.853h-.75v2a.75.75 0 1 1-1.5 0v-2H17a.5.5 0 0 1-.354-.853ZM7.927 9.519a.5.5 0 0 0-.469.045.5.5 0 0 0-.223.416v1.631a.75.75 0 0 1-1.5 0V8.939a.5.5 0 0 0-.308-.462L1.192 6.712a.5.5 0 0 0-.692.462v10.771a1 1 0 0 0 .615.923l9.943 4.142a.5.5 0 0 0 .469-.045.5.5 0 0 0 .223-.416v-11.1a.5.5 0 0 0-.308-.462ZM12.286 9.71a.5.5 0 0 0 .4-.007l8.864-4.029a.5.5 0 0 0-.008-.914l-3.093-1.345a.5.5 0 0 0-.41 0L9.2 7.518a.5.5 0 0 0 .018.915Z"
                                        fill="#f7b551" className="fill-000000"></path>
                                </svg>
                                <b>Mint</b>
                                <p>Don't have NFTs ? Don't worry. Simply connect your Digital Wallet and start
                                    posting. Every post will be Minted
                                    into your own NFT for free.
                                </p>
                            </div>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
