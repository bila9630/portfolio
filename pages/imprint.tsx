import { Container, Space, Text, Title } from '@mantine/core'
import { motion } from "framer-motion"
import React from 'react'


const Imprint = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Title order={1} mt={40} c="white">Imprint</Title>
            </motion.div>

            <Space h="xl" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Text>Viet Duc Kieu</Text>
                <Text>N6 8</Text>
                <Text>68161 Mannheim, Germany</Text>
                <Text mb={"xl"}>E-mail: duc.kieu@web.de</Text>
                <Text>All questions and concerns about data privacy can be directed by email to duc.kieu@web.de</Text>
                <Space h="xl" />
                <Title order={2}>Liability for contents</Title>
                <Space h="md" />
                <Text>As a service provider we are responsible according to § 7 Abs.1 TMG for our own contents on these pages according to the general laws. According to §§ 8 to 10 TMG, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general laws remain unaffected by this. However, liability in this respect is only possible from the time of knowledge of a concrete violation of the law. As soon as we become aware of such infringements, we will remove the content immediately.</Text>
                <Space h="md" />
                <Title order={2}>Liability for links</Title>
                <Space h="md" />
                <Text>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the contents of the linked pages. The linked pages were checked for possible legal infringements at the time of linking. Illegal contents were not recognisable at the time of linking. A permanent control of the contents of the linked pages is not reasonable without concrete evidence of an infringement. As soon as we become aware of any legal infringements, we will remove such links immediately.</Text>
                <Space h="md" />
                <Title order={2}>Copyright</Title>
                <Space h="md" />
                <Text>The contents and works on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution and any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. As soon as we become aware of any infringements, we will remove such content immediately.</Text>
                <Space h="md" />
                <Title order={2}>Data protection</Title>
                <Space h="md" />
                <Text>The use of our website is generally possible without providing personal data. Insofar as personal data (e.g. name, address or e-mail addresses) is collected on our pages, this is always done on a voluntary basis as far as possible. This data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (e.g. communication by e-mail) can be subject to security gaps. A complete protection of the data against access by third parties is not possible. The use of contact data published within the scope of the imprint obligation by third parties to send unsolicited advertising and information materials is hereby expressly prohibited. The operators of this website expressly reserve the right to take legal action against unsolicited mailing or e-mailing of spam and other similar advertising materials.</Text>
                <Space h="xl" />
            </motion.div>
        </Container>
    )
}

export default Imprint