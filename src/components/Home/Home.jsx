import { Box, Text, Stack, Flex, Image, Link, Heading, Center } from "@chakra-ui/react";

const Home = () => {
    
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
                <Flex bgColor={"pink"} maxH={"max-content"} direction={"row"} gap={"0px"} h={"100px"} p={"0px 100px 0px 100px"}>
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
                
                <Flex bgColor={"pink"} h={"250px"} w={"100%"}>
                    <Center borderBottom={"gray"} border={"5px"}>
                        <Heading as='h2' size='md'></Heading>
                    </Center>
                </Flex>
            </Stack>
        </>
    )
}

export default Home;