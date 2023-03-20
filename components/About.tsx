import { Container, List, Space, Text } from '@mantine/core'
import React from 'react'

const About = () => {
    return (
        <Container size={900} pos={"relative"}>
            <Text ta={"center"} fz={40} fw={800} mt={30} mb={40}>
                About
            </Text>
            <Text>
                Hi, my name is Duc and I am currently a student at the Baden-Wuerttemberg
                Cooperative State University (DHBW), studying Business Information Systems with a focus
                on Data Science. My main passion is building solutions that can positively impact people&apos;s
                lives. In my free time, I love to explore the outdoors through activities such as hiking, biking and
                camping. Additionally, I enjoy participating in hackathons as a way to meet new people and to broaden
                my horizons. I&apos;m always eager to learn and open to new opportunities, so feel free to contact me.
            </Text>
            <Space h={30} />
            <Text>My Technology Stack:</Text>
            <List>
                <li>Python, Javascript, Typescript, Golang, SQL, HTML, CSS</li>
                <li>Frontend: React, Nextjs, Streamlit</li>
                <li>Backend: Nodejs, Express, Flask</li>
                <li>Database: Postgresql, Firebase</li>
                <li>DevOps: Github Actions, Docker, Kubernetes, Helm, AWS</li>
                <li>Data Science: Python, Pandas, Numpy, Sklearn, Keras</li>
            </List>
        </Container>
    )
}

export default About