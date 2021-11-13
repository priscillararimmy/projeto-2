import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Header } from "../Components/Header";

export const DefaultPage = ({ children }) => {
    return (
        <>
            <Header />
            <Box marginTop={2}>
                <Container>{children}</Container>
            </Box>
        </>
    )
}

