import { Card, CardMedia, Container, Stack } from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react'
import GetMarketplace from '../../components/Home/GetMarketplace'
import pic from '../../assets/5438785.jpg'
import AuthSection from '../../components/Home/AuthSection';
import PlayerSelectionSection from '../../components/SquadSelection/playeSelectionSection';
import "./HomePage.css"
import LeaderBoardSection from '../../components/LeaderBoardSection/LeaderBoardSection';

const HomePage = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Stack direction={'column'} display='flex'>
            <div className='home-card'>
                <div className='layout-wraper'>
                    <div className='image-container'></div>
                </div>
            </div>
            <Container maxWidth="lg" sx={{ mt: -6 }}>

                <TabContext value={value}
                >

                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                        TabIndicatorProps={{ sx: { display: 'none' } }}

                        sx={{
                            "& button": { borderRadius: '5px 5px 0px 0px ', backgroundColor: '#ff8d00', marginX: 0.5, color: 'rgb(12, 12, 73)', fontWeight: 700, textTransform: 'none', },
                            "& button.Mui-selected": { backgroundColor: 'white', color: 'rgb(12, 12, 73)', fontWeight: 700 },


                        }}>
                        <Tab label="Home" value="1" />
                        <Tab label="Squad Selection" value="2" />
                        <Tab label="Leader Board" value="3" />
                        <Tab label="MarketPlace" value="4" />

                    </TabList>

                    <TabPanel value="1"><AuthSection /></TabPanel>
                    <TabPanel value="2"><PlayerSelectionSection /></TabPanel>
                    <TabPanel value="3"><LeaderBoardSection /></TabPanel>
                    <TabPanel value="4"><GetMarketplace />  </TabPanel>
                </TabContext>

            </Container>

        </Stack>
    )
}

export default HomePage