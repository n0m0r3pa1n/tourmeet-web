import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        secondary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        primary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        textPrimary: "#757ce8",
        button: {
            textColor: '#ffffff', // this should work
            textPrimary: '#ffffff' // or this if using `primary` style
        }
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                color: 'white'
            }
        },
    }
});
