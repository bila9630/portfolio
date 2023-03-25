import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title, Button, rem, Grid, Modal, List, Image, Badge, Group, Container, Center, Space, ActionIcon } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(300),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

    title: {
        fontFamily: `Greycliff CF ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },

    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
    },

    icon: {
        marginLeft: theme.spacing.md,
        marginTop: 3,
    },

}));

interface ArticleCardImageProps {
    image: string;
    title: string;
    category: string;
    hostedProjectLink?: string;
    githubLink?: string;
    projectImages?: string[];
    skills?: string[];
    about?: string[];
    learnings?: string[];
}

export function ArticleCardImage({
    image, title, category, hostedProjectLink,
    githubLink, projectImages, skills,
    about, learnings, }: ArticleCardImageProps) {

    const { classes } = useStyles();
    const [opened, { open, close }] = useDisclosure(false);
    const isMobile = useMediaQuery("(max-width: 50em)");

    return (
        <>
            <Paper
                shadow="md"
                p="xl"
                radius="md"
                sx={{ backgroundImage: `url(${image})` }}
                className={classes.card}
            >
                <div>
                    <Text className={classes.category} size="xs">
                        {category}
                    </Text>
                    <Title order={3} className={classes.title}>
                        {title}
                    </Title>
                </div>
                <Grid className={classes.buttonContainer}>
                    <Button onClick={open} variant="white" color="dark">
                        More info
                    </Button>
                    {/* only display hostedProjectLink when its given */}
                    {hostedProjectLink && (
                        <ActionIcon
                            component="a"
                            href={hostedProjectLink}
                            target="_blank"
                            rel="noreferrer"
                            variant={"transparent"}
                            color={"green"}
                            className={classes.icon}
                        >
                            <IconExternalLink />
                        </ActionIcon>
                    )}
                </Grid>
            </Paper>

            {/* Modal that opens when you click on Button */}
            <Modal opened={opened} onClose={close} size={"60%"} fullScreen={isMobile} title={"StyleSense"} centered>
                <Carousel mx="auto" withIndicators height={400}>
                    {projectImages && projectImages.map((item, index) => (
                        <Carousel.Slide key={index}>
                            <Image fit="contain" height={400} radius="md" src={item} alt="screenshot of project" />
                        </Carousel.Slide>
                    ))}
                </Carousel>
                
                {/* Skills as badges */}
                <Center mt={"md"}>
                    <Group spacing={"sm"}>
                        {skills && skills.map((item, index) => (
                            <Badge key={index}>{item}</Badge>
                        ))}
                    </Group>
                </Center>

                <Space mt={"2rem"} />
                <Grid>
                    <Grid.Col xs={12} lg={6}>
                        <Text mt={10} ta={"center"} fz="lg" fw={"bold"}>About the project</Text>
                        <Center>
                            <List mt={10}>
                                {about && about.map((item, index) => (
                                    <List.Item key={index}>{item}</List.Item>
                                ))}
                            </List>
                        </Center>
                    </Grid.Col>

                    <Grid.Col xs={12} lg={6}>
                        <Text mt={10} ta={"center"} fz="lg" fw={"bold"}>What I learned</Text>
                        <Center>
                            <List mt={10}>
                                {learnings && learnings.map((item, index) => (
                                    <List.Item key={index}>{item}</List.Item>
                                ))}
                            </List>
                        </Center>
                    </Grid.Col>
                </Grid>


                <Center mt={"2rem"} mb={"1rem"}>
                    <Group>
                        <Button
                            variant="filled"
                            size={"md"}
                            component="a"
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            href={githubLink}
                            leftIcon={<IconBrandGithub />}
                        >
                            Github
                        </Button>
                        {/* only display hostedProjectLink when its given */}
                        {hostedProjectLink && (
                            <Button
                                variant="gradient"
                                size={"md"}
                                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                                component="a"
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                href={hostedProjectLink}
                                leftIcon={<IconExternalLink />}
                            >
                                Check live project
                            </Button>
                        )}
                    </Group>
                </Center>
            </Modal>
        </>
    );
}