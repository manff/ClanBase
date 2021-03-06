import { styled, useStyletron } from 'styletron-react'
import DefaultTemplate from '../components/DefaultLayout'
import InfoBox from '../components/InfoBox'
import SearchBar from '../components/SearchBar'
import LoginButton from '../components/LoginButton'
import { useRouter } from 'next/router'
import { Container, Button, Text, Row, Col, Image, Div } from "atomize";

// statically styled component
const Title = styled('h1', {
  color: 'red',
  fontSize: '82px',
})

// dynamically styled component
const SubTitle = styled('h2', ({ $size }) => ({
  color: 'blue',
  fontSize: `${$size}px`,
}))

export default function Home() {
  // an alternative hook based API
  const [css] = useStyletron()

  const router = useRouter()

  return (
    <DefaultTemplate>
      <Div h="100vh" bgImg="../destinybackground.png" bgPos="top" bgSize="auto" bgRepeat="no-repeat" m={{l: "-0.5rem", r: "-0.5rem"}}>
        <Div h="100vh" bgImg="../destinyimage1.png" bgPos="center" bgSize="auto" bgRepeat="no-repeat">
          <Container>
            <Row d="flex" flexDir="column" align="center">
              <Text textSize="title" textAlign="center" textWeight="500" textColor="white" m={{t: "3rem", b: "0rem"}}>
                WELCOME TO
              </Text>
              <Text textSize="display3" textAlign="center" textWeight="700" textColor="white" m={{t: "0rem", b: "0rem"}}>
                CLANBASE
              </Text>
              <Text textSize="title" textAlign="center" textColor="white" m={{t: "0rem", b: "2rem"}}>
                THE HOME BASE FOR ALL DESTINY CLANS
              </Text>
            </Row>
            <Row d="flex" flexDir="column" align="space-around">
              <SearchBar/>
            </Row>
            <Row d="flex" flexDir="column" align="center" m={{t: "2rem", b: "0rem"}}>
              <Button m="1rem" bg="none" rounded="md">
                <Image src="signin.png" alt="sign in" transform="translate(0%, 18%)"/>
                <Text textSize="display1" textAlign="center" textColor="white" pos="absolute">SIGN IN</Text>
              </Button>
            </Row>
            <Row d="flex" flexDir="column" align="center">
              <Row>
                <Text textSize="display1" textAlign="center" textColor="white">Connect With Us</Text>
              </Row>
              <Row>
                <Button m="1rem" h="2.5rem" w="2.5rem" p="0rem" shadow="5" bg="none" onClick={() => location.assign("https://twitter.com/clanbasedev")}>
                  <Image src="twitter.svg" alt="twitter"/>
                </Button>
                <Button m="1rem" h="2.5rem" w="2.5rem" p="0.5rem" shadow="5" bg="#5865F2" onClick={() => location.assign("https://discord.gg/WDQC97ybAV")}>
                  <Image src="discord.svg" alt="discord"/>
                </Button>
                <Button m="1rem" h="2.5rem" w="2.5rem" p="0.5rem" shadow="5" bg="#FF424D" onClick={() => location.assign("https://www.patreon.com/clanbase")}>
                  <Image src="patreon.png" alt="patreon"/>
                </Button>
              </Row>
              <Row>
                <LoginButton/>
              </Row>
            </Row>
          </Container>
        </Div>
      </Div>
    </DefaultTemplate>
  )
}