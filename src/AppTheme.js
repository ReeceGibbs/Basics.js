import { Typography } from "@mui/material";
import { color, createTheme, fontFamily } from "@mui/system";
import { styled } from '@mui/material/styles';

//our custom theme
export const AppTheme = createTheme({
    palette: {
        primary: '#FF7F11',
        secondary: '#17BEBB',
        tertiary: '#DBF4A7',
        quaternary: '#637081',
        backgroud: '#FBF5F3',
    }, 
    typography: {
        fontFamily: [
            'Consolas',
            'Courier'
        ].join(','),
    }
});

//our custom typography element
export const CustomTypography = styled(Typography)(() => ({
    fontFamily: [
        'Consolas',
        'Courier'
    ].join(',')
}));
