import { styled, useStyletron } from 'styletron-react'
import React, { useState } from 'react';
import { Div, Anchor, Button, Row, Col, Image, Icon } from "atomize";
import Link from 'next/link'
import { useRouter } from 'next/router'
import SearchBar from '../../components/SearchBar'

const apikey = '3a85f7e1a4444ec1865efb39ef019313';
const headers = { 'X-API-Key': apikey }

const AppHeader = () => {
    const [css] = useStyletron()

    const router = useRouter()

    return (
        <header>
            <Div bgImg="../redbar.svg" bgPos="top left" bgSize="cover" bgRepeat="no-repeat">
                <Row>
                    <Col size="2">
                        <Div m={{ l: "1.5rem", t: "1.5rem" }}>
                            <Button m="1rem" h="auto" w="6rem" hoverShadow="4" p="0rem" bg="none" onClick={() => router.push("/")}>
                                <Image src="../clanbaseLogo.svg" />
                            </Button>
                        </Div>
                    </Col>
                    <Col size="6">
                        <Row transform="translate(0%, 100%)" maxW="50rem">
                            <Col>
                                <Link href="/2084197">
                                    <Anchor d="flex" flexDir="column" textSize="title" textAlign="center" textColor="white" hoverTextColor="black800" transform="translate(0%, 50%)">HOME</Anchor>
                                </Link>
                            </Col>
                            <Col>
                                <Link href="/4599535">
                                    <Anchor d="flex" flexDir="column" textSize="title" textAlign="center" textColor="white" hoverTextColor="black800">CLAN COMPARISON</Anchor>
                                </Link>
                            </Col>
                            <Col>
                                <Link href="/test-table">
                                    <Anchor d="flex" flexDir="column" textSize="title" textAlign="center" textColor="white" hoverTextColor="black800">TOURNAMENT BUILDER</Anchor>
                                </Link>
                            </Col>
                            <Col>
                                <Link href="/clan-page-example">
                                    <Anchor d="flex" flexDir="column" textSize="title" textAlign="center" textColor="white" hoverTextColor="black800" transform="translate(0%, 50%)">ABOUT</Anchor>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Div>
        </header>
    )
}

export default AppHeader