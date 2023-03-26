import { Box, Container, Grid, Image, Space, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    return (
        <Container size={1300} pos={"relative"}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 1 }}
            >

                <Text ta={"left"} fz={18} mt={30} mb={40}>
                    Words about myself
                </Text>
                <Box fz={{ base: "1rem", lg: "2rem" }} maw={{ base: "100%", lg: "70%" }}>
                    <Text>
                        Hi there, my name is Duc. I am currently pursuing a degree in Business Information Systems
                        through a {" "}
                        <Text
                            component="a"
                            td="underline"
                            href="https://www.dhbw-stuttgart.de/en/studying-at-dhbw-stuttgart/dual-study-concept/"
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            sx={{ cursor: "pointer" }}
                        >
                            dual study program
                        </Text>{" "} at DHBW with SAP as my partner company.
                    </Text>
                    <Space h={30} />
                    <Text>
                        As part of this program, I have the opportunity to participate in a three-month
                        internship-style phase each semester, where I work collaboratively with a
                        team and apply my theoretical knowledge to real-world scenarios.
                    </Text>
                    <Space h={30} />
                    <Text>
                        In my free time, I enjoy attending hackathons, not only for the free food but also for the chance
                        to explore new technologies and expand my knowledge base.
                    </Text>
                    <Space h={30} />
                    <Text>
                        When I&apos;m not developing things, you can find me cooking, riding bike and generally spending
                        time outdoors (but also playing video games and binging shows).
                    </Text>
                </Box>
            </motion.div>

            <Space h={200} />
            {/* three images in the same row */}
            <Grid gutter={40} gutterXl={40}>
                <Grid.Col xs={12} md={4}>
                    <Image
                        height={525}
                        radius="lg"
                        src={"/nature1.jpg"}
                        alt="Photography of Heidelberg castle"
                        imageProps={{ loading: "lazy" }}
                        withPlaceholder
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={4} >
                    <Image
                        height={525}
                        radius="md"
                        src={"/nature2.jpg"}
                        alt="Photography of a Heidelberg old town"
                        imageProps={{ loading: "lazy" }}
                        withPlaceholder
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={4}>
                    <Image
                        height={525}
                        radius="md"
                        src={"/nature3.jpg"}
                        alt="Photography of Heidelberg nature"
                        imageProps={{ loading: "lazy" }}
                        withPlaceholder
                    />
                </Grid.Col>
            </Grid>


        </Container>
    )
}

export default About