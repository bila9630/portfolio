import { Container, Grid, Text } from '@mantine/core'
import React from 'react'
import { ArticleCardImage } from './ArticleCardImage'

const Project = () => {
    return (
        <Container size={900} pos={"relative"} mb={200}>
            <Text ta={"center"} fz={40} fw={800} mt={100} mb={40}>
                Project
            </Text>
            <Grid gutter={40} gutterXl={40}>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="StyleSense - Fashion Classification App"
                        category="Data Science"
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="StyleSense - Fashion Classification App"
                        category="Software Engineering"
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="StyleSense - Fashion Classification App"
                        category="Software Engineering"
                    />
                </Grid.Col>
                <Grid.Col xs={12} md={6}>
                    <ArticleCardImage
                        image="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                        title="StyleSense - Fashion Classification App"
                        category="Data Science"
                    />
                </Grid.Col>
            </Grid>
        </Container >

    )
}

export default Project