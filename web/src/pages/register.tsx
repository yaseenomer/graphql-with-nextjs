import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
import InputField from "../components/InputField";
import { useReqisterMutation } from "../generated/graphql";
import { toErrrorMap } from '../utils/toErrorMap';



export default function register() {
  const [, register] = useReqisterMutation();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={async (values, { setErrors }) => {
        const response = await register(values);
        if (response.data?.register.errors) {
          setErrors(toErrrorMap(response.data?.register.errors));
        }
      }}
    >
      {({ isSubmitting }) => (
        <Box mt={8} mx="auto" maxW="800px" w="100%">
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
                Submit
              </Button>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
}
