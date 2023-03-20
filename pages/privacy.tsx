import { Container, List, Space, Text, Title } from '@mantine/core'
import { motion } from "framer-motion"
import React from 'react'

const Privacy = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Title order={1} mt={40} c="white">Privacy Policy</Title>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <Text>We keep your private information private.</Text>
            </motion.div>

            <Space h="xl" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
            >
                <Text>Contact person:</Text>
                <Text>Viet Duc Kieu</Text>
                <Text>N6 8</Text>
                <Text>68161 Mannheim, Germany</Text>
                <Text mb={"xl"}>E-mail: duc.kieu@web.de</Text>
                <Text>
                    Your privacy is important to us. It is our policy to respect
                    your privacy and comply with any applicable law and regulation
                    regarding any personal information we may collect about you,
                    including across our website, https://duckieu.de/, and
                    other sites we own and operate.
                </Text>
                <Text>
                    Personal information is any information about you which can be used to
                    identify you. This includes information about you as a person (such as name,
                    address, and date of birth), your devices, payment details, and even information
                    about how you use a website or online service.
                </Text>
                <Text>
                    In the event our site contains links to third-party sites and services, please be aware that those sites and services have their own privacy policies. After following a link to any third-party content, you should read their posted privacy policy information about how they collect and use personal information. This Privacy Policy does not apply to any of your activities after you leave our site.
                </Text>
                <Space h="md" />
                <Text>This policy is effective as of 21 March 2023.</Text>
                <Space h="md" />
                <Text>Last updated: 21 March 2023</Text>
                <Space h="xl" />
                <Title order={2}>Information We Collect</Title>
                <Space h="xl" />
                <Text>Information we collect falls into one of two categories: “voluntarily provided” information and “automatically collected” information.</Text>
                <Text>“Voluntarily provided” information refers to any information you knowingly and actively provide us when using or participating in any of our services and promotions.</Text>
                <Text>“Automatically collected” information refers to any information automatically sent by your devices in the course of accessing our products and services.</Text>
                <Space h="md" />
                <Title order={3}>Log Data</Title>
                <Space h="md" />
                <Text>When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device&lsquo;s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details about your visit.</Text>
                <Text>Additionally, if you encounter certain errors while using the site, we may automatically collect data about the error and the circumstances surrounding its occurrence. This data may include technical details about your device, what you were trying to do when the error happened, and other technical information relating to the problem. You may or may not receive notice of such errors, even in the moment they occur, that they have occurred, or what the nature of the error is</Text>
                <Text>Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons.</Text>
                <Space h="md" />
                <Title order={3}>Device Data</Title>
                <Space h="md" />
                <Text>When you visit our website or interact with our services, we may automatically collect data about your device, such as:</Text>
                <List>
                    <List.Item>Device Type</List.Item>
                    <List.Item>Operating System</List.Item>
                </List>
                <Text>Data we collect can depend on the individual settings of your device and software. We recommend checking the policies of your device manufacturer or software provider to learn what information they make available to us.</Text>
                <Space h="md" />
                <Title order={3}>Personal Information</Title>
                <Space h="md" />
                <Text>We may ask for personal information — for example, when you subscribe to our newsletter or when you contact us — which may include one or more of the following:</Text>
                <List>
                    <List.Item>Name</List.Item>
                    <List.Item>Email</List.Item>
                    <List.Item>Social Media Profiles</List.Item>
                    <List.Item>Date of Birth</List.Item>
                    <List.Item>Location</List.Item>
                    <List.Item>Gender</List.Item>
                    <List.Item>Jobs you are interested in</List.Item>
                    <List.Item>Availability</List.Item>
                    <List.Item>Interests</List.Item>
                    <List.Item>Education (University, Degree, Program)</List.Item>
                    <List.Item>Past Work Experience</List.Item>
                </List>
                <Space h="md" />
                <Title order={3}>Transaction Data</Title>
                <Space h="md" />
                <Text>Transaction data refers to data that accumulates over the normal course of operation on our platform. This may include transaction records, stored files, user profiles, analytics data and other metrics, as well as other types of information, created or generated, as users interact with our services.</Text>
                <Space h="md" />
                <Title order={3}>Legitimate Reasons for Processing Your Personal Information</Title>
                <Space h="md" />
                <Text>We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.</Text>
                <Space h="md" />
                <Title order={3}>Collection and Use of Information</Title>
                <Space h="md" />
                <Text>We may collect personal information from you when you do any of the following on our website:</Text>
                <List>
                    <List.Item>Register for an account</List.Item>
                    <List.Item>Purchase a subscription/product</List.Item>
                    <List.Item>Enter any of our competitions, contests, sweepstakes, and surveys</List.Item>
                    <List.Item>Sign up to receive updates from us via email or social media channels</List.Item>
                    <List.Item>Use a mobile device or web browser to access our content</List.Item>
                    <List.Item>Contact us via email, social media, or on any similar technologies</List.Item>
                    <List.Item>When you mention us on social media</List.Item>
                </List>
                <Text>We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes:</Text>
                <List>
                    <List.Item>to provide you with our platform&lsquo;s core features and services</List.Item>
                    <List.Item>to enable you to customize or personalize your experience of our website</List.Item>
                    <List.Item>to contact and communicate with you</List.Item>
                    <List.Item>for analytics, market research, and business development, including to operate and improve our website, associated applications, and associated social media platforms</List.Item>
                    <List.Item>to enable you to access and use our website, associated applications, and associated social media platforms</List.Item>
                    <List.Item>to run competitions, sweepstakes, and/or offer additional benefits to you</List.Item>
                    <List.Item>for security and fraud prevention, and to ensure that our sites and apps are safe, secure, and used in line with our terms of use</List.Item>
                    <List.Item>for technical assessment, including to operate and improve our app, associated applications, and associated social media platforms</List.Item>
                </List>
                <Text>We may combine voluntarily provided and automatically collected personal information with general information or research data we receive from other trusted sources. For example, If you provide us with your location, we may combine this with general information about currency and language to provide you with an enhanced experience of our site and service.</Text>
                <Space h="md" />
                <Title order={3}>Security of Your Personal Information</Title>
                <Space h="md" />
                <Text>When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification.</Text>
                <Text>Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach.</Text>
                <Text>You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. For example, ensuring any passwords associated with accessing your personal information and accounts are secure and confidential.</Text>
                <Space h="md" />
                <Title order={3}>How Long We Keep Your Personal Information</Title>
                <Space h="md" />
                <Text>We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. For example, if you have provided us with personal information as part of creating an account with us, we may retain this information for the duration your account exists on our system. If your personal information is no longer required for this purpose, we will delete it or make it anonymous by removing all details that identify you.</Text>
                <Text>However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.</Text>
                <Space h="md" />
                <Title order={3}>Disclosure of Personal Information to Third Parties</Title>
                <Space h="md" />
                <Text>We may disclose personal information to:</Text>
                <List>
                    <List.Item>a parent, subsidiary, or affiliate of our company</List.Item>
                    <List.Item>third-party service providers for the purpose of enabling them to provide their services, including (without limitation) IT service providers, data storage, hosting and server providers, analytics, error loggers, debt collectors, maintenance or problem-solving providers, marketing providers, professional advisors, and payment systems operators</List.Item>
                    <List.Item>our employees, contractors, and/or related entities</List.Item>
                    <List.Item>our existing or potential agents or business partners</List.Item>
                    <List.Item>sponsors or promoters of any competition, sweepstakes, or promotion we run</List.Item>
                    <List.Item>credit reporting agencies, courts, tribunals, and regulatory authorities, in the event you fail to pay for goods or services we have provided to you</List.Item>
                    <List.Item>courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights</List.Item>
                    <List.Item>third parties, including agents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you. These third parties may be located in or outside of Australia</List.Item>
                    <List.Item>third parties to collect and process data</List.Item>
                    <List.Item>an entity that buys, or to which we transfer all or substantially all of our assets and business</List.Item>
                </List>
                <Text>Third parties we currently use include:</Text>
                <List>
                    <List.Item>Vercel</List.Item>
                </List>
                <Space h="md" />
                <Title order={3}>International Transfers of Personal Information</Title>
                <Space h="md" />
                <Text>The personal information we collect is stored and/or processed in Germany, or where we or our partners, affiliates, and third-party providers maintain facilities.</Text>
                <Text>The countries to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries: (i) we will perform those transfers in accordance with the requirements of applicable law; and (ii) we will protect the transferred personal information in accordance with this privacy policy.</Text>
                <Space h="md" />
                <Title order={3}>Your Rights and Controlling Your Personal Information</Title>
                <Space h="md" />
                <Text><Text component="span" fw={700}>Your choice:</Text> By providing personal information to us, you understand we will collect, hold, use, and disclose your personal information in accordance with this privacy policy. You do not have to provide personal information to us, however, if you do not, it may affect your use of our website or the products and/or services offered on or through it.</Text>
                <Text><Text component="span" fw={700}>Information from third parties:</Text> If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person’s consent to provide the personal information to us.</Text>
                <Text><Text component="span" fw={700}>Marketing permission:</Text> If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by contacting us using the details below.</Text>
                <Text><Text component="span" fw={700}>Access:</Text> You may request details of the personal information that we hold about you.</Text>
                <Text><Text component="span" fw={700}>Correction:</Text> If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date.</Text>
                <Text><Text component="span" fw={700}>Non-discrimination:</Text> We will not discriminate against you for exercising any of your rights over your personal information. Unless your personal information is required to provide you with a particular service or offer (for example processing transaction data), we will not deny you goods or services and/or charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties, or provide you with a different level or quality of goods or services.</Text>
                <Text><Text component="span" fw={700}>Notification of data breaches:</Text> We will comply with laws applicable to us in respect of any data breach.</Text>
                <Text><Text component="span" fw={700}>Complaints:</Text> If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.</Text>
                <Text><Text component="span" fw={700}>Unsubscribe:</Text> To unsubscribe from our email database or opt-out of communications (including marketing communications), please contact us using the details provided in this privacy policy, or opt-out using the opt-out facilities provided in the communication. We may need to request specific information from you to help us confirm your identity.</Text>
                <Space h="md" />
                <Title order={3}>Use of Cookies</Title>
                <Space h="md" />
                <Text>We use “cookies” to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.</Text>
                <Space h="md" />
                <Title order={3}>Business Transfers</Title>
                <Space h="md" />
                <Text>If we or our assets are acquired, or in the unlikely event that we go out of business or enter bankruptcy, we would include data, including your personal information, among the assets transferred to any parties who acquire us. You acknowledge that such transfers may occur, and that any parties who acquire us may, to the extent permitted by applicable law, continue to use your personal information according to this policy, which they will be required to assume as it is the basis for any ownership or use rights we have over such information.</Text>
                <Space h="md" />
                <Title order={3}>Limits of Our Policy</Title>
                <Space h="md" />
                <Text>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.</Text>
                <Space h="md" />
                <Title order={3}>Changes to This Policy</Title>
                <Space h="md" />
                <Text>At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy.</Text>
                <Text>If the changes are significant, or if required by applicable law, we will contact you (based on your selected preferences for communications from us) and all our registered users with the new details and links to the updated or changed policy.</Text>
                <Text>If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.</Text>
                <Space h="md" />
                <Title order={2}>Additional Disclosures for General Data Protection Regulation (GDPR) Compliance (EU)</Title>
                <Space h="md" />
                <Title order={3}>Data Controller / Data Processor</Title>
                <Space h="md" />
                <Text>The GDPR distinguishes between organizations that process personal information for their own purposes (known as “data controllers”) and organizations that process personal information on behalf of other organizations (known as “data processors”). We, Momentum, are a Data Controller with respect to the personal information you provide to us.</Text>
                <Space h="md" />
                <Title order={3}>Legal Bases for Processing Your Personal Information</Title>
                <Space h="md" />
                <Text>We will only collect and use your personal information when we have a legal right to do so. In which case, we will collect and use your personal information lawfully, fairly, and in a transparent manner. If we seek your consent to process your personal information, and you are under 16 years of age, we will seek your parent or legal guardian’s consent to process your personal information for that specific purpose.</Text>
                <Text>Our lawful bases depend on the services you use and how you use them. This means we only collect and use your information on the following grounds:</Text>
                <Space h="md" />
                <Title order={3}>Consent From You</Title>
                <Space h="md" />
                <Text>Where you give us consent to collect and use your personal information for a specific purpose. You may withdraw your consent at any time using the facilities we provide; however this will not affect any use of your information that has already taken place. You may consent to providing your name and contact details for the purpose of entering a giveaway or promotion. While you may withdraw your entry at any time, this will not affect any selection or judging that has already taken place. If you have any further enquiries about how to withdraw your consent, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.</Text>
                <Space h="md" />
                <Title order={3}>Performance of a Contract or Transaction</Title>
                <Space h="md" />
                <Text>Where you have entered into a contract or transaction with us, or in order to take preparatory steps prior to our entering into a contract or transaction with you. For example, if you purchase a product, service, or subscription from us, we may need to use your personal and payment information in order to process and deliver your order.</Text>
                <Space h="md" />
                <Title order={3}>Our Legitimate Interests</Title>
                <Space h="md" />
                <Text>Where we assess it is necessary for our legitimate interests, such as for us to provide, operate, improve and communicate our services. We consider our legitimate interests to include research and development, understanding our audience, marketing and promoting our services, measures taken to operate our services efficiently, marketing analysis, and measures taken to protect our legal rights and interests.</Text>
                <Space h="md" />
                <Title order={3}>Compliance with Law</Title>
                <Space h="md" />
                <Text>In some cases, we may have a legal obligation to use or keep your personal information. Such cases may include (but are not limited to) court orders, criminal investigations, government requests, and regulatory obligations. If you have any further enquiries about how we retain personal information in order to comply with the law, please feel free to enquire using the details provided in the Contact Us section of this privacy policy.</Text>
                <Space h="md" />
                <Title order={3}>International Transfers Outside of the European Economic Area (EEA)</Title>
                <Space h="md" />
                <Text>We will ensure that any transfer of personal information from countries in the European Economic Area (EEA) to countries outside the EEA will be protected by appropriate safeguards, for example by using standard data protection clauses approved by the European Commission, or the use of binding corporate rules or other legally accepted means.</Text>
                <Space h="md" />
                <Title order={3}>Your Rights and Controlling Your Personal Information</Title>
                <Space h="md" />
                <Text><Text component="span" fw={700}>Restrict:</Text> You have the right to request that we restrict the processing of your personal information if (i) you are concerned about the accuracy of your personal information; (ii) you believe your personal information has been unlawfully processed; (iii) you need us to maintain the personal information solely for the purpose of a legal claim; or (iv) we are in the process of considering your objection in relation to processing on the basis of legitimate interests.</Text>
                <Text><Text component="span" fw={700}>Objecting to processing:</Text> You have the right to object to processing of your personal information that is based on our legitimate interests or public interest. If this is done, we must provide compelling legitimate grounds for the processing which overrides your interests, rights, and freedoms, in order to proceed with the processing of your personal information.</Text>
                <Text><Text component="span" fw={700}>Data portability:</Text> You may have the right to request a copy of the personal information we hold about you. Where possible, we will provide this information in CSV format or other easily readable machine format. You may also have the right to request that we transfer this personal information to a third party.</Text>
                <Text><Text component="span" fw={700}>Deletion:</Text> You may have a right to request that we delete the personal information we hold about you at any time, and we will take reasonable steps to delete your personal information from our current records. If you ask us to delete your personal information, we will let you know how the deletion affects your use of our website or products and services. There may be exceptions to this right for specific legal reasons which, if applicable, we will set out for you in response to your request. If you terminate or delete your account, we will delete your personal information within 90 days of the deletion of your account. Please be aware that search engines and similar third parties may still retain copies of your personal information that has been made public at least once, like certain profile information and public comments, even after you have deleted the information from our services or deactivated your account.</Text>
                <Space h="xl" />
                <Title order={3}>Contact Us</Title>
                <Space h="md" />
                <Text>If you have any questions about this Privacy Policy, please contact us at: duc.kieu@web.de</Text>
                <Space h="xl" />
            </motion.div>
        </Container>
    )
}

export default Privacy