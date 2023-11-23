import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Stephen McCullough</title>
        <meta
          name="description"
          content="I’ve spoken at many events, some big, some small. I love sharing my ideas and experiences with others."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at many events, some big, some small."
        intro="I love sharing my ideas and experiences with others. Speaking is a skill that I’ve worked hard to develop over the years, and I’m always looking for new opportunities to share. I have recently resumed speaking at events as of October 2023, following a hiatus due to the pandemic and subsequent lockdowns. It's an exciting new chapter, and I'm eager to see where this journey takes me!"
      >
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="#"
              title="Leveraging AWS SageMaker for Scalable AI Deployment with Python: A Real-World Journey"
              description="I share my experiences of using AWS SageMaker to deploy a machine learning model to production (at scale). I will discuss the challenges I faced, the lessons I learned, and the solutions I found."
              event="PyCon Ireland 2023"
              cta=""
            />
            <Appearance
              href="#"
              title="From Family Room to Broadcasting Room: Building a Personalised Family TV Channel"
              description="How I pivoted from the family photo album to a broadcasting channel. This channel was custom-built to enrich my family interactions and share precious moments, even when we're miles apart."
              event="NIDC 2023"
              cta=""
            />
            <Appearance
              href="#"
              title="The Wire & Neo4j: A breakdown"
              description="Showing off the power of Neo4j and how it can be used to build a graph database using data from the TV show The Wire."
              event="Python Ireland 2019"
              cta=""
            />
            <Appearance
              href="#"
              title="Lightning Talk - What a Fat Ruby Dev thinks of Elixir - the unscripted version"
              description="A lightning talk about my experience with Elixir and Phoenix. I was asked to speak at the last minute, so I didn't have time to prepare a script."
              event="ElixirConf 2018"
              cta=""
            />
            <Appearance
              href="https://speakerdeck.com/swmcc/keeping-your-skills-sharp-in-an-ever-changing-industry"
              title="Keeping your skills sharp in an ever changing industry"
              description="I share my experience of Continuous Learning, and failing to learn!, over the last seventeen years, discussing what I have done wrong, and what I have done right."
              event="NIDevConf, June 2017"
              cta="View Slides"
            />
            <Appearance
              href="https://speakerdeck.com/swmcc/python-dot-ruby-dot-now-elixir-hipsters-assemble"
              title="Python.. Ruby.. Now Elixir? - Hipsters Assemble"
              description="The thoughts of a bad programmer on moving from a ruby and python background to Elixir"
              event="KatsConf, September 2016"
              cta="View Slides"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
