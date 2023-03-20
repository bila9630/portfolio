import React from "react"
import { Title, Text, Avatar, Container } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { motion } from "framer-motion";

const HeroTitle = () => {
    return (
        <Container mx={"auto"}>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Avatar src={"duc.jpg"} size={120} alt="Duc" radius={60} mx={"auto"} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeIn" }}
            >
                <Title order={1}>Viet Duc Kieu</Title>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Text>
                    Business Information Systems Student
                </Text>
                <div>
                    <IconBrandLinkedin size={30} />
                    <IconBrandGithub size={30} />
                    <IconMail size={30} />
                </div>
            </motion.div>
        </Container>
    )
}

export default HeroTitle