


import { Button, Box } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react'
import InputField from '../components/InputField';
import { useLoginMutation } from '../generated/graphql';
import { toErrrorMap } from '../utils/toErrorMap';

export default function Login() {

    const [, login] = useLoginMutation();

    return (
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, { setErrors }) => {
             const response = await login(values);
            if (response.data?.login.errors) {
             setErrors(toErrrorMap(response.data?.login.errors));
            }
          }}
        >
          {({ isSubmitting }) => (
            
            <Box mt={8} mx="auto" maxW="800px" w="100%">
                <Box mx="auto" w="100%" my={5}>
                    <p>Wlcome back 😄 Login  Now Some Great Stuff waiting you 🔥</p>
                </Box>
              <Form>
                <InputField
                  label="Username"
                  name="username"
                  placeholder="Username"
                />
    
                <InputField
                  label="Password"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <Box mt={4}>
                  <Button
                    type="submit"
                    colorScheme="teal"
                    isLoading={isSubmitting}
                    variant="solid"
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            </Box>
          )}
        </Formik>
      );
  
}
