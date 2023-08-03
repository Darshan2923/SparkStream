import React from 'react'
import { Container, Box, Text, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import SignUp from './Authentication/SignUp'
import Login from './Authentication/Login'

function Home() {
    return (
        <Container maxW='xl' centerContent className='home-container'>
            <Box
                m="40px 0 15px 0"
            >
                <Text
                    fontSize="4xl"
                    fontFamily="Space Grotesk"
                    color="white">SparkSense</Text>
            </Box>
            <Box bg='white' w='100%' p={4} borderRadius='lg' color='black' borderWidth='1px'>
                <Tabs variant='soft-rounded' colorScheme='blue'>
                    <TabList mb='1em'>
                        <Tab width='50%'>SignUp</Tab>
                        <Tab width="50%">Login</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <SignUp />
                        </TabPanel>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container >
    )
}

export default Home