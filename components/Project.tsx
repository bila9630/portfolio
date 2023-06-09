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
                                "A platform to connect people with projects based on their preferences and skills",
                                "Login data -> email: teamlead@web.de, password: RandomPassword123!",
                                "Created during the Code and Create hackathon with Gianluca Geraci, Rebekka Roßberg, \
                                Johannes Pielmeier and Sandra Boucte"
                            ]}
                            learnings={[
                                "Learned to prioritize features and rapidly develop a prototype",
                                "Developed the ability to work effectively under time constraints",
                                "Had a lot of fun working with the team",
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
                                "Project work for the database course at DHBW",
                                "The goal was to create a web application for a smoothie shop to manage their inventory",
                                "The application was created with Thi Anh Vu and Lena Lavrikova"
                            ]}
                            learnings={[
                                "Acquired knowledge about database design and normalization",
                                "Learned to create database schemas and queries",
                                "Learned to utilize Docker Compose"
                            ]}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6}>
                        <ArticleCardImage
                            image="fashionBackground.png"
                            title="StyleSense - Fashion classification app"
                            shortTitle="StyleSense"
                            category="Data Science"
                            hostedProjectLink="https://bila9630-stylesense-applicationstreamlit-app-okes4r.streamlit.app/"
                            githubLink="https://github.com/bila9630/StyleSense"
                            projectImages={["clothes1.jpg", "clothes2.jpg"]}
                            skills={["Python", "Streamlit", "Pandas", "Sklearn", "Keras", "NLP", "CNN"]}
                            about={[
                                "Project work for the Integration seminar at DHBW",
                                "The goal was to create a web application for a fashion shop to classify their products into categories",
                                "The application was created with Sofie Pischl and Hannah Schult"
                            ]}
                            learnings={[
                                "Acquired knowledge about Computer Vision especially CNNs",
                                "Deployed the application with Streamlit",
                                "Learned to work with Scrum"
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
                                "Project work for the NLP course at DHBW",
                                "Classify news articles into categories",
                                "The application was created with Sofie, Hannah, Caro and Marvin"
                            ]}
                            learnings={[
                                "Acquired knowledge about Natural Language Processing, especially RNNs and Transformers",
                                "Gained experience with NLP tools and techniques such as preprocessing, word embedding \
                                and data augmentation",
                                "Learned to present the results of a project in a clear and concise way",

                            ]}
                        />
                    </Grid.Col>
                </Grid>

            </motion.div>
        </Container>

    )
}

export default Project