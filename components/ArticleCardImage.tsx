import { Carousel } from '@mantine/carousel';
import { createStyles, Paper, Text, Title, Button, rem, Grid, Modal, List, Image } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { IconExternalLink } from '@tabler/icons-react';

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
    projectImageLeft?: string;
    projectImageRight?: string;
    skills?: string[];
    about?: string[];
    learnings?: string[];
}

export function ArticleCardImage({
    image, title, category, hostedProjectLink,
    githubLink, projectImageLeft, projectImageRight,
    skills, about, learnings, }: ArticleCardImageProps) {

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
                        <a href={hostedProjectLink} target="_blank" rel="noreferrer">
                            <IconExternalLink className={classes.icon} />
                        </a>
                    )}
                </Grid>
            </Paper>

            {/* Modal that opens when you click on Button */}
            <Modal opened={opened} onClose={close} size={"70%"} fullScreen={isMobile} title={"StyleSense"} centered>
                <Carousel mx="auto" withIndicators height={400}>
                    <Carousel.Slide>
                        <Image fit="contain" height={400} radius="md" src={projectImageLeft} alt="first screenshot of project" />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image fit="contain" height={400} radius="md" src={projectImageLeft} alt="second screenshot of project" />
                    </Carousel.Slide>
                </Carousel>
                {/* <Grid gutter={20}>
                    <Grid.Col xs={12} md={6}>
                        <Image miw={150} mah={400} src={projectImageLeft} alt="StyleSense website image" />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6}>
                        <Image miw={150} mah={400} src={projectImageRight} alt="StyleSense website image 2" />
                    </Grid.Col>
                </Grid> */}
                <Text>Skills Used</Text>
                <List>
                    <List.Item>{skills}</List.Item>
                </List>
                <Text>About</Text>
                <List>
                    {about && about.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                    ))}
                </List>
                <Text>What I learned</Text>
                <List>
                    {learnings && learnings.map((item, index) => (
                        <List.Item key={index}>{item}</List.Item>
                    ))}
                </List>
            </Modal>
        </>
    );
}