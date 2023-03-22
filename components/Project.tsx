import { Container, Grid, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'
import { ArticleCardImage } from './ArticleCardImage'

const Project = () => {

    return (
        <Container size={1100} pos={"relative"} mb={100}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <Text ta={"center"} fz={40} fw={800} mt={100} mb={40}>
                    Projects
                </Text>
            </motion.div>

            <Grid gutter={40} gutterXl={40}>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="StyleSense - Fashion classification app"
                        category="Data Science"
                        hostedProjectLink="https://bila9630-integrationsseminar-applicationstreamlit-app-a1fjrt.streamlit.app/"
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="Project Smoothie - Inventory management for smoothie shop"
                        category="Software Engineering"
                        hostedProjectLink="https://github.com/DHBW-Database-Project/Project-Smoothies"
                        githubLink="https://github.com/DHBW-Database-Project/Project-Smoothies"
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="SkillMatch - Staffing people to projects based on skills"
                        category="Software Engineering"
                        hostedProjectLink="https://code-and-create.vercel.app/"
                        githubLink="https://gitlab.com/gianlucageraci/code-and-create"
                        skills={["Firebase, React, Next.js, Mantine"]}
                        about={[
                            "The problem was that employees got staffed on projects that they don't like",
                            "A platform to connect people with projects based on their skills",
                            "Created during the Code and Create hackathon with Gianluca Geraci, Rebekka Roßberg, \
                            Johannes Pielmeier and Sandra Boucte"
                        ]}
                        learnings={[
                            "Learned to work with Scrum rapidly",
                            "Had a lot of fun working with the team",
                            "Achieved more than we expected"
                        ]}
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="News Classifier - Classify news articles into categories"
                        category="Data Science"
                        hostedProjectLink="https://bila9630-nlp-project-applicationstreamlit-app-w1i1j6.streamlit.app/"
                        githubLink="https://github.com/bila9630/NLP-Project"
                    />
                </Grid.Col>
            </Grid>
        </Container >

    )
}

export default Project