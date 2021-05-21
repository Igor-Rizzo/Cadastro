import {Logo} from './../components/'
import { Container, Box, Input, Button, Text, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as yup from 'yup'


const validationSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Preenchimento Obrigatório'),
  password:yup.string().required('Preenchimento Obrigatório'),
  username : yup.string().required('Preenchimento Obrigatório')

})

export default function Home() {
  const formik = useFormik({
    onSubmit: () => { },
    validationSchema,
    initialValues: {
      email: '',
      username: '',
      password: ''
    }
  })

  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={ 4 } mt={8}>
        <Text>Crie e compartilhe sua agenda</Text>
      </Box>

      <Box>
        <FormControl id='email' p={4} isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id='password' p={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        
        <Box display="flex" flexDirection='row' alignItems="center">
          <Text p={4}>Scheduling.work/</Text>
          <FormControl id="username" p={4} isRequired>
            <Input type="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          </FormControl>
        </Box>
        <Box p={4}>
          <Button width="100%">Entrar</Button>
        </Box>

      </Box>

    </Container>
  )
}
