import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const submitHandler = async () => {
        setLoading(true);
        if (!email || !pass) {
            toast({
                title: "Please Select an Image!!!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: 'top',
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            };

            const { data } = await axios.post('/api/user/login', { email, pass }, config)
            toast({
                title: "Login Successful!!!",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: 'top',
            })
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            //After successful registration,user will be pushed to chats page
            navigate('/chats');
        } catch (e) {
            toast({
                title: "An error occured!!!",
                description: e.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'top',
            })
            setLoading(false);
            return;
        }

    };

    return (
        <div className='login-container'>
            <VStack spacing='5px'>
                <FormControl id='email2' isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter Your Email...'
                        onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl id='password2' isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            placeholder='Enter Your Password...'
                            onChange={(e) => setPass(e.target.value)} />
                        <InputRightElement width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={(e) => setShow(!show)}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button colorScheme='blue' marginBottom={'-2'} width='100%' style={{ marginTop: 15 }} onClick={submitHandler}>
                    Login
                </Button>
                <Button colorScheme='green' width='100%'
                    style={{ marginTop: 15 }}
                    onClick={() => {
                        setEmail("guest123@example.com");
                        setPass("123456789");

                    }}>
                    Get Guest User Credentials
                </Button>
            </VStack>
        </div>
    )
}

export default Login