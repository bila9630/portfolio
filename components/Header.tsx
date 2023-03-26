import { Affix, Box, Center, Grid, rem, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks';

const Header = () => {
    const [scroll] = useWindowScroll();

    return (
        <Affix style={{ left: '50%', transform: 'translateX(-50%)' }} position={{ bottom: rem(40) }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Box
                        bg="#e5e4df"
                        c="#1a1917"
                        style={transitionStyles}
                    >
                        <Grid gutter={50}>
                            <Grid.Col span={4}>Linkedin</Grid.Col>
                            <Grid.Col span={4}>Github</Grid.Col>
                            <Grid.Col span={4}>Email</Grid.Col>
                        </Grid>
                    </Box>
                )}
            </Transition>
        </Affix>
    )
}

export default Header


{/* <Button
    leftIcon={<IconArrowUp size="1rem" />}
    style={transitionStyles}
    onClick={() => scrollTo({ y: 0 })}
    >
    Scroll to top
</Button> */}