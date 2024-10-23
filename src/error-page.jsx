import { Stack, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";


export const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <Stack dir={"column"} gap={5} alignItems={"center"}>
            <Heading as={"h1"}>Oops!</Heading>
            <Text>Sorry, an unxepected error has occured.</Text>
            <Text color={"gray"}>
                <i>{error.statusText || error.message}</i>
            </Text>
        </Stack>
    );
}
