import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1F5CEF'
        },
        background: {
            default: '#F6F9FE'
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                style: {
                    backgroundColor: '#fff',
                },
                elevation: 2,
            }
        }
    }
});
