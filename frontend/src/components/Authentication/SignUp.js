import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false);
    const [cpass, setCpass] = useState('');
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const postDetails = (pic) => {
        setLoading(true);
        if (pic === undefined) {
            toast({
                title: "Please Select an Image!!!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: 'top',
            });
            return;
        }
        if (pic.type === 'image/jpeg' || pic.type === 'image/png') {
            try {
                const data = new FormData();
                data.append("file", pic);
                data.append("upload_preset", "Sparksense");
                data.append("cloud_name", "dq7sszkls");
                fetch("https://api.cloudinary.com/v1_1/dq7sszkls/image/upload",
                    {
                        method: 'post',
                        body: data
                    }).then((res) => res.json()).then((data) => {
                        setPic(data.url.toString());
                        setLoading(false);
                        console.log(data.url.toString());
                    })
            } catch (error) {
                console.log(error);
            }
        }

        else {
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
    };

    const submitHandler = () => { };

    return (
        <div>
            <VStack spacing='5px'>
                <FormControl id='first-name' isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='Enter Your Name...'
                        onChange={(e) => setName(e.target.value)} />
                </FormControl>

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

                <FormControl id='cpassword' isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input
                            type={show ? "text" : "password"}
                            placeholder='Confirm Password...'
                            onChange={(e) => setCpass(e.target.value)} />
                        <InputRightElement width="4.5rem">
                            <Button h='1.75rem' size='sm' onClick={(e) => setShow(!show)}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id='pic'>
                    <FormLabel>Upload your picture</FormLabel>
                    <Input
                        type='file'
                        p={1.5}
                        accept='image/*'
                        onChange={(e) => postDetails(e.target.files[0])}
                    />
                </FormControl>

                <Button colorScheme='blue' width='100%' style={{ marginTop: 15 }} onClick={submitHandler} isLoading={loading}>
                    Sign Up
                </Button>

            </VStack>
        </div>
    )
}

export default SignUp