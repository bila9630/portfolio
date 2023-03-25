import React from "react"
import { Text, Avatar, Container, createStyles, Center, Flex, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { motion } from "framer-motion";


const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: "relative",
        boxSizing: "border-box",
        minHeight: "100vh",
    },

    inner: {
        position: 'relative',
        paddingTop: 180,

        [BREAKPOINT]: {
            paddingBottom: 80,
            paddingTop: 80,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 60,
        fontWeight: 800,
        lineHeight: 1.1,
        marginTop: 30,
        marginBottom: 5,
        padding: 0,

        [BREAKPOINT]: {
            fontSize: 40,
            lineHeight: 1.2,
        },
    },

    description: {
        marginTop: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        color: theme.colors.dark[2],
        fontSize: 28,

        [BREAKPOINT]: {
            fontSize: 18,
        },
    },
}));

const HeroTitle = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Avatar src={"duc.jpg"} size={130} alt="Duc" radius={120} mx={"auto"} />
                </motion.div>
                <Center>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7, ease: "easeIn" }}
                        className={classes.title}
                    >
                        Duc Kieu
                    </motion.h1>
                </Center>
                <Center>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
                    >
                        <Text className={classes.description}>
                            Business Information Systems Student
                        </Text>

                        {/* Icons container */}
                        <Flex
                            mih={50}
                            gap="xl"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <ActionIcon
                                component="a"
                                href="https://www.linkedin.com/in/duc-kieu/"
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                variant={"transparent"}
                                color={"blue"}
                                size={"lg"}
                            >
                                <IconBrandLinkedin size={"2rem"} />
                            </ActionIcon>

                            <ActionIcon
                                component="a"
                                href="https://github.com/bila9630"
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                variant={"transparent"}
                                color={"blue"}
                                size={"lg"}
                            >
                                <IconBrandGithub size={"2rem"} />
                            </ActionIcon>

                            <ActionIcon
                                component="a"
                                href="mailto:duc.kieu.de"
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                                variant={"transparent"}
                                color={"blue"}
                                size={"lg"}
                            >
                                <IconMail size={"2rem"} />
                            </ActionIcon>
                        </Flex>
                    </motion.div>
                </Center>
            </Container>
        </div>
    )
}

export default HeroTitle