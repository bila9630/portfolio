import { Affix, Button, Container, Grid, rem, Text, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react'
import React from 'react'

const Header = () => {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <Affix position={{ bottom: rem(40), left: "46%" }}>
            <Transition transition="slide-up" mounted={scroll.y > 0}>
                {(transitionStyles) => (
                    <Grid>
                        <Button
                            leftIcon={<IconArrowUp size="1rem" />}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Scroll to top
                        </Button>
                    </Grid>
                )}
            </Transition>
        </Affix>
    )
}

export default Header