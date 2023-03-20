import { Container, Space, Text } from '@mantine/core'
import React from 'react'

const About = () => {
    return (
        <Container size={700} pos={"relative"}>
            <Text ta={"center"} fz={40} fw={800} mt={30} mb={5}>
                About
            </Text>
            <Text mt={30}>
                Hi, I&apos;m Duc! Currently I&apos;m studying Business Information Systems
                with a focus on Data Science at the Baden-Wuerttemberg Cooperative State University (DHBW).
                I&apos;m passionate about building things that make a difference in people&apos;s
                lives. I&apos;m also a huge fan of the outdoors and love to go hiking, biking,
                and camping. I&apos;m always looking for new opportunities to learn and grow,
                so feel free to reach out!
            </Text>
            <Space h={30} />
            <Text>My Technology Stack:</Text>
            <ul>
                <li>Python, Javascript, Typescript, Golang, SQL, HTML, CSS</li>
                <li>Frontend: React, Nextjs, Streamlit</li>
                <li>Backend: Nodejs, Express, Flask</li>
                <li>Database: Postgresql, Firebase</li>
                <li>DevOps: Github Actions, Docker, Kubernetes, Helm, AWS</li>
                <li>Data Science: Python, Pandas, Numpy, Sklearn, Keras</li>
            </ul>
        </Container>
    )
}

export default About