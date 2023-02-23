import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
        light: "#a8dadc",
        main: "#457b9d",
        dark: "#1d3557",
        contrastText: "#f5ebe0",
        },
        secondary:{
            main: "#6d6875",
        }
    },
    components: {
            TextField:{
                fontFamily: "Lato",
            },
            Button: {      
                fontFamily: "Lato",
            },
            Chip:{
                margin: 2, 
                backgroundColor:'#d6ccc2' 
            },
            MenuItem:{
                fontFamily: ["Lato"],
                fontWeight: '700'
            },
            BottomNavigationAction:{
                fontWeight: 700,
            },        
    },
});
;

export default theme;

