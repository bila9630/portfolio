import { Container, Grid, Image, List, Space, Text } from '@mantine/core'
import React from 'react'

const About = () => {
    return (
        <Container size={1200} pos={"relative"}>
            <Text ta={"left"} fz={20} mt={30} mb={40}>
                Words about myself
            </Text>
            <Container maw={"80%"} fz={30}>
                <Text>
                    Hi, my name is Duc and I am currently a student at the Baden-Wuerttemberg
                    Cooperative State University (DHBW), studying Business Information Systems with a focus
                    on Data Science.
                </Text>
                <Space h={30} />
                <Text>
                    My main passion is building solutions that can positively impact people&apos;s
                    lives. In my free time, I love to explore the outdoors through activities such as hiking, biking and
                    camping.
                </Text>
                <Space h={30} />
                <Text>
                    Additionally, I enjoy participating in hackathons as a way to meet new people and to broaden
                    my horizons. I&apos;m always eager to learn and open to new opportunities, so feel free to contact me.
                </Text>
            </Container>
            <Space h={320} />
            {/* <Text>My Technology Stack:</Text>
            <List>
                <li>Python, Javascript, Typescript, Golang, SQL, HTML, CSS</li>
                <li>Frontend: React, Nextjs, Streamlit</li>
                <li>Backend: Nodejs, Express, Flask</li>
                <li>Database: Postgresql, Firebase</li>
                <li>DevOps: Github Actions, Docker, Kubernetes, Helm, AWS</li>
                <li>Data Science: Python, Pandas, Numpy, Sklearn, Keras</li>
            </List> */}
            {/* three images in the same row */}
            <Grid gutter={40} gutterXl={40}>
                <Grid.Col xs={12} md={4}>
                    <Image src={"nature1.jpg"} alt="Nature" />
                </Grid.Col>
                <Grid.Col xs={12} md={4}>
                    <Image src={"nature2.jpg"} alt="Nature" />
                </Grid.Col>
                <Grid.Col xs={12} md={4}>
                    <Image src={"nature3.jpg"} alt="Nature" />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default About