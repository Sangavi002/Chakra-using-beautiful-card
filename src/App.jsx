import {Box,Image,Center,Heading,Button,Flex} from '@chakra-ui/react'

function App() {
  return(
    <>
    <center>
    <Heading color={{base:'tomato',sm: 'black',md: 'green', lg: 'tomato'}}>Vijay</Heading>
    </center>
    <Flex justifyContent='center' alignItems='center'>
    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' padding='30px 30px' mt={30}>
      <center>
      <Image src="./images.jpeg" alt="vijay"  borderRadius='full'boxSize='150px' />
      <Heading> Vijay</Heading>
      <p style={{marginTop: '5px'}}>@actor_vijay</p>
      <Box mt={7} color='grey' letterSpacing='.3px' fontWeight='500'>
        <p>Actor, Singer, Songwriter and artist.</p>
        <p>or</p>
        <p style={{color: '#4b9de2'}}>#tag</p>
        <p>me in your posts.</p>
      </Box>
      <Box mt={10}>
        <Button mr={3}>#ART</Button>
        <Button mr={3}>#PHOTOGRAPHY</Button>
        <Button>#MUSIC</Button>
      </Box>
      <Box mt={10} display='flex' >
      <Box mr={3} padding='10px 40px' rounded='xl' w='50%' borderRadius='30px' bg='#edf2f6 '>Message</Box>
      <Box mr={3}  boxShadow='0 20px 25px rgba(75, 157, 226, 0.5)' rounded='xl'bg='#4b9de2 ' w='50%' padding='10px 28px' borderRadius='30px'color='white'>Follow</Box>
      </Box>
      </center>
    </Box>
    </Flex>
    
    </>
  )
}

export default App
