import { Container, Grid, Image, Space, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'

const About = () => {
    return (
        <Container size={1300} pos={"relative"}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 1 }}
            >

                <Text ta={"left"} fz={20} mt={30} mb={40}>
                    Words about myself
                </Text>
                <div style={{ width: "70%", fontSize: "2rem" }}>
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
                </div>
            </motion.div>

            <Space h={200} />
            {/* three images in the same row */}
            <Grid gutter={40} gutterXl={40}>
                <Grid.Col xs={12} md={4}>
                    <Image height={525} radius="lg" src={"/nature5.jpg"} alt="Photography of Heidelberg castle" />
                </Grid.Col>
                <Grid.Col xs={12} md={4} >
                    <Image height={525} radius="md" src={"/nature6.jpg"} alt="Photography of a Heidelberg old town" />
                </Grid.Col>
                <Grid.Col xs={12} md={4}>
                    <Image height={525} radius="md" src={"/nature4.jpg"} alt="Photography of Heidelberg nature" />
                </Grid.Col>
            </Grid>

        </Container>
    )
}

export default About