import React from "react"
import { Title, Text, Avatar, Container } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const HeroTitle = () => {
    return (
        <Container mx={"auto"}>
            <Avatar src={"duc.jpg"} size={120} alt="Duc" radius={60} mx={"auto"} />
            <Title order={1}>Viet Duc Kieu</Title>
            <Text>Business Information Systems Student</Text>
            <IconBrandLinkedin size={30} />
            <IconBrandGithub size={30} />
            <IconMail size={30} />
        </Container>
    )
}

export default HeroTitle