import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../Components/Navbar/Navbar";


export const DefaultPage = ({ children }) => {

    return (
        <>
            <NavBar />
            <Box marginTop={2}>
                <Container>
                  {children}
                  </Container>
            </Box>
        </>
    )
}

