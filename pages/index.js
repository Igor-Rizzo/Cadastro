import {Logo} from './../components/'
import {Container, Box, Input, Button, Text, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container p={4} centerContent>
      <Logo />
      <Box p={ 4 } mt={8}>
        <Text>Crie e compartilhe sua agenda</Text>
      </Box>

      <Box>
        <FormControl id='email' p={4} isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl id='password' p={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        
        <Box display="flex" flexDirection='row' alignItems="center">
          <Text>Scheduling.work/</Text>
          <FormControl id="username" p={4} isRequired>
            <Input type="username"/>
          </FormControl>
        </Box>
        <Box p={4}>
          <Button width="100%">Entrar</Button>
        </Box>

      </Box>

    </Container>
  )
}
