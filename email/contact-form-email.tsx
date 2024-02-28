import React from 'react'
import{
    Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail(
{  message, 
   senderEmail,
}: {message: string; senderEmail: string}) {
    return (
        <Html>
          <Head />
          <Preview>New message from your portfolio site</Preview>
          <Tailwind>
            <Body className="bg-gray-100 text-black">
              <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                  <h3 className="leading-tight text-gray-900">
                    You received the following message from the contact form
                  </h3>
                  <Text>{message}</Text>
                  <Hr />
                  <Text>The sender's email is: {senderEmail}</Text>
                </Section>
              </Container>
            </Body>
          </Tailwind>
        </Html>
      );
}
