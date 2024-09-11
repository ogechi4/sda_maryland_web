import React from "react";
import { Box, Text, Stack, Flex, Image, Link, Heading, Button, Wrap, Divider, Progress, Grid, GridItem } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
const Home = () => {
            const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
                },
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }
            ]
        };
    
    return (
        <>
            <Box direction={"column"} borderColor={"red.200"} border={"1px"} h={"100vh"} w={"100%"}>
                <Box h={"80%"}>
                    <Text fontSize={"large"}>
                        Carousel
                    </Text>
                </Box>
            </Box>
            <Stack spacing={5} direction={"column"}>
                <Flex bgColor={"#f9f1e6"} maxH={"max-content"} direction={"row"} gap={"0px"} h={"100px"} p={"0px 100px 0px 100px"}>
                    <Box w={"70%"} borderColor={"black"} border={"1px"} h={"inherit"}></Box>
                    <Box w={"30%"} borderColor={"black"} border={"1px"} h={"inherit"}> </Box>
                </Flex>
                <Stack direction={"row"} wrap={"wrap"} h={""} p={"0px 100px 0px 100px"} justifyContent={"space-between"}>
                {Array.from({ length: 3 }, (i) => 
                    <Stack border={"1px"} key={i} borderColor={"black"} h={"max-content"} w={"370px"} display={"flex"} flexDirection={"column"} spacing={3}>
                        <Image h={'200px'} w={"inherit"} objectFit={"cover"} src="" mb={"10px"}></Image>
                        <Heading as='h2' size='md' textTransform={"uppercase"}>Guided by the Holy Spirit</Heading>
                        <Text as={"p"}>May our good God guide into all truths and prosper you in all your way. Take a deeper closer walk daily</Text>
                        <Text fontSize={"12px"}>
                            <Link>view details →</Link>
                        </Text>
                    </Stack>
                )}
                </Stack>
                {/* Program events slider */}
                <Flex bgColor={"#f9f1e6"} h={"320px"} w={"100%"} direction={"column"} p={"0px 100px 0px 100px"} gap={"30px"}>  
                    <Flex direction={"column"} align={"center"} w={"80vw"} mt={"20px"}>
                        <Heading fontSize={"20px"} as={"h2"} _after={{content: `" "`, width: "30px", height: "5px", background:"#919191", display: "block", position: "relative", left: "40%", marginTop: "10px"}}>PROGRAMS & EVENTS</Heading>
                    </Flex>
                    <Box w={"100%"}>
                        <Slider {...settings}>
                            {Array.from({length: 10}, (x, i) => 
                                <Flex key={i} direction={"column"} width={"15px"} border={"1px"} borderColor={"black"}alignItems={"center"} gap={"10px"}>
                                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                        <Heading fontSize={"20px"} as={"h2"} mb={"5px"} _after={{content: `" "`, width: "30px", height: "5px", background:"#919191", display: "block", position: "relative", left: "40%", marginTop:"5px"}}>JULY 16</Heading>
                                    </Box>
                                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"10px"}>
                                        <Text fontSize={"18px"}>Weekly meeting & Prayer</Text>
                                        <Text as={"p"} size={"10px"}>Monday 07:00AM</Text>
                                        <Button borderColor={"#e7ad47"} variant={"solid"} rightIcon={<IoIosArrowRoundForward />} colorScheme={"yellow"} size={"lg"} mb={"20px"}>DETAILS</Button>
                                    </Box>
                                </Flex>
                            )}
                        </Slider>
                    </Box>
                </Flex>
                <Flex direction={"row"} p={"0px 100px 0px 100px"} w={"100%"}>
                    <Stack border={"1px"} borderColor={"black"} h={"max-content"} w={"75%"} display={"flex"} flexDirection={"column"}>
                        <Box border={"1px"} borderColor={"black"}>
                            <Flex direction={"column"}>
                                <Heading fontSize={"20px"} as={"h2"} _after={{content: `" "`, width: "30px", height: "5px", background:"#919191", display: "block", marginTop: "10px"}}>LATEST BULLETIN</Heading>
                            </Flex>
                        </Box>
                        {Array.from({ length: 2 }, (i) => 
                        <Flex border={"1px"} key={i} borderColor={"black"} h={"224px"} direction={"row"}>
                            <Box border={"1px"} borderColor={"black"} h={"inherit"} w={"40%"}>
                                <Image w={"100%"} h={"inherit"} src=""></Image>
                            </Box>
                            <Box display={"flex"} flexDirection={"column"} p={"0px 10px 0px 10px"} border={"1px"} borderColor={"black"} w={"60%"} gap={"15px"}>
                                <Heading as={"h2"} fontSize={"18px"}>Perseverance of the Saints</Heading>
                                <Wrap>
                                    <Text size={"12px"} as={"p"}>on 17th June 2014 by</Text>
                                    <Text color={"orange"}>Vincent Johnn</Text>
                                </Wrap>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, accusamus iusto quod at voluptas nisi exercitationem qui illo dolore. Mollitia fuga facere aut numquam iure possimus est debitis ullam...</Text>
                                <Button borderColor={"#e7ad47"} variant={"solid"} rightIcon={<IoIosArrowRoundForward />} colorScheme={"yellow"} size={"md"} mb={"20px"} w={"40%"}>DETAILS</Button>
                            </Box>
                        </Flex>
                        )}
                    </Stack>
                    <Stack border={"1px"} borderColor={"black"} borderRadius={8} h={"max-content"} w={"25%"} bgColor={"#f9f1e6"} p={5} textAlign={"center"}>
                        <Box>
                            <Flex direction={"column"}>
                                <Heading fontSize={"20px"} as={"h2"} _after={{content: `" "`, width: "30px", height: "5px", background:"#919191", display: "block", marginTop: "10px", position: "relative", left: "50%"}}>RECENT SERMONS</Heading>
                            </Flex>
                        </Box>
                        <Box>
                            <Image w={"100%"} h={"170px"} src=""></Image>
                        </Box>
                        {Array.from({length: 4}, (i) => 
                        <Box display={"flex"} key={i} flexDir={"row"} gap={2} w={"100%"} >
                            <Box><TriangleUpIcon transform={"rotate(90deg)"}/></Box>
                            <Box textAlign={"left"} w={"100%"} gap={"5px"}>
                                <Text size={"12px"}>Heavens and the earth</Text>
                                <Text size={"12px"}>24:15 mins</Text>
                                <Divider orietation="horizontal" w={"100%"} mt={"5px"}/>
                            </Box>
                        </Box>
                        )}
                    </Stack>
                </Flex>
                <Stack p={"0px 100px 0px 100px"} spacing={5}>
                    <Flex h={"300px"} border={"1px"} direction={"column"} alignItems={"center"}>
                        <Box display={"flex"} flexDirection={"column"} border={"1px"} w={"100%"} alignItems={"center"}>
                            <Heading fontSize={"20px"} as={"h2"} _after={{content: `" "`, width: "30px", height: "5px", background:"#919191", display: "block", marginTop: "10px", position: "relative", left: "50%"}}>GRACE OUTREACH</Heading>
                        </Box>
                        <Flex direction={"row"} border={"1px"} borderColor={"black"} width={"100%"} h={"100%"} mt={"20px"}>
                            <Box w={"30%"} border={"1px"} borderColor={"black"} h={"100%"}>
                                <Image w={"100%"} h={"inherit"} src=""/>
                            </Box>
                            <Box w={"70%"} p={"10px"}>
                                <Heading as={"h3"} fontSize={"28px"}>Help human trafficking survivors</Heading>
                                <Wrap>
                                    <Text>posted by</Text>
                                    <Text color={"orange"}> Steven</Text>
                                    <Text>on Aug 11 2014</Text>
                                </Wrap>
                                <Heading as={"h2"} fontSize={"40px"}>$6,500.00</Heading>
                                <Text>Pledged of $15000 goal</Text>
                                <Progress value={60} size={"lg"}/>
                                <Grid templateColumns={"repeat(6, 1fr)"} templateRows={"repeat(2, 1fr)"}>
                                    <GridItem colSpan={1} h={10}>
                                        <Heading as={"h2"} fontSize={"40px"}>24</Heading>
                                    </GridItem>
                                    <GridItem colStart={1} colEnd={1} h={10}>
                                        <Text>Backers</Text>
                                    </GridItem>
                                    <GridItem rowStart={1}>
                                        <Heading as={"h2"}>17</Heading>
                                    </GridItem>
                                    <GridItem colSpan={""}>
                                        <Text>days left</Text>
                                    </GridItem>
                                    <GridItem rowStart={1} colStart={5} colEnd={7} rowSpan={2} alignContent={"center"}>
                                        <Button colorScheme="orange" size={"lg"} textTransform={"uppercase"}>DONATE NOW</Button>
                                    </GridItem>
                                </Grid>
                            </Box>
                        </Flex>
                    </Flex>
                </Stack>
            </Stack>
        </>
    )
}

export default Home;