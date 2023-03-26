import { Container, Grid, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import React from 'react'
import { ArticleCardImage } from './ArticleCardImage'

const Project = () => {

    return (
        <Container size={1200} pos={"relative"} mt={200} mb={100}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.2, once: true }}
                transition={{ duration: 1 }}
            >

                <Text ta={"center"} fz={40} fw={800} mt={100} mb={40}>
                    Projects
                </Text>

                <Grid gutter={40} gutterXl={40}>
                    <Grid.Col xs={12} md={6}>
                        <ArticleCardImage
                            image="work.png"
                            title="SkillMatch - Match professionals with relevant projects"
                            shortTitle="SkillMatch"
                            category="Software Engineering"
                            hostedProjectLink="https://skill-match.vercel.app/"
                            githubLink="https://github.com/bila9630/SkillMatch"
                            projectImages={["codeAndCreate.png", "codeAndCreate2.png"]}
                            skills={["Javascript", "Typescript", "Firebase", "React.js", "Next.js", "Mantine"]}
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
                            image="coffee.png"
                            title="Project Smoothie - Inventory management app"
                            shortTitle="Project Smoothie"
                            category="Software Engineering"
                            githubLink="https://github.com/DHBW-Database-Project/Project-Smoothies"
                            projectImages={["projectSmoothie1.png", "projectSmoothie2.png"]}
                            skills={["Postgresql", "Flask", "React.js", "React Material UI", "Docker", "Github Actions"]}
                            about={[
                                "It was a project for the DHBW Database course",
                                "The goal was to create a web application for a smoothie shop to manage their inventory",
                                "The application was created with Thi Anh Vu and Lena Lavrikova"
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
                            image="fashionBackground.png"
                            title="StyleSense - Fashion classification app"
                            shortTitle="StyleSense"
                            category="Data Science"
                            hostedProjectLink="https://bila9630-integrationsseminar-applicationstreamlit-app-a1fjrt.streamlit.app/"
                            githubLink="https://github.com/bila9630/StyleSense"
                            projectImages={["", ""]}
                            skills={["Python", "Streamlit", "Pandas", "Sklearn", "Keras", "NLP", "CNN"]}
                            about={[
                                "It was a project for the DHBW Integrationsseminar course",
                                "The goal was to create a web application for a fashion shop to classify their products into categories",
                                "The application was created with Sofie Pischl and Hannah Schult"
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
                            image="bookshopBackground.png"
                            title="News Classifier - Classify news articles into categories"
                            shortTitle="News Classifier"
                            category="Data Science"
                            hostedProjectLink="https://bila9630-nlp-project-applicationstreamlit-app-w1i1j6.streamlit.app/"
                            githubLink="https://github.com/bila9630/NLP-Project"
                            projectImages={["raving1.png", "raving2.png"]}
                            skills={["Python", "Streamlit", "Pandas", "Sklearn", "Keras", "NLP", "RNN"]}
                            about={[
                                "Classify news articles into categories",
                                "Used a dataset from Kaggle",
                                "Project work for the NLP course at DHBW"
                            ]}
                            learnings={[
                                "Learned to work with Scrum rapidly",
                                "Had a lot of fun working with the team",
                                "Achieved more than we expected"
                            ]}
                        />
                    </Grid.Col>
                </Grid>

            </motion.div>
        </Container>

    )
}

export default Project