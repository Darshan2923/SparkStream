import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false);

    const submitHandler = () => { };

    return (
        <div className='login-container'>
            <VStack spacing='5px'>
                <FormControl id='email' isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter Your Email...'
                        onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl id='password' isRequired>
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