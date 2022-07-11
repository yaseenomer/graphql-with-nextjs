import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useField } from "formik";
import React from "react";

export default function InputField(props) {

    const { label, name, type, id, placeholder, ...rest } = props;

    const [field, { error }] = useField(name);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input {...field} id={id && name} type={type ?? 'text'} placeholder={placeholder ?? ''}/>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null }
    </FormControl>
  );
}
