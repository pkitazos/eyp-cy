import {
  Title,
  WaveDivider,
  BookIcon,
  ConversationIcon,
  PenIcon,
  NetworkIcon,
  WhatWeDoCard,
} from "~/components";
import { wavePaths } from "~/data";

export default function AboutUs() {
  return (
    <>
      <head>
        <title>About Us</title>
      </head>
      <>
        <section className="page-margin mt-16 px-4">
          <div className="hide-left flex justify-center">
            <Title
              text="About Us"
              order="h1"
              underlineRotation="rotate-[190deg]"
            />
          </div>
          <p className="hide-left delay-card text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament (EYP) Cyprus is a non-partisan and
            non-governmental organisation, which aims to encourage independent
            thinking, personal initiative and intercultural encounters amongst
            the young people of Cyprus. EYP Cyprus is one of the 40 European
            organisations that operate as part of the pan-European network of
            EYP International. The organisation was founded in 2006 and over the
            years has organised over 100 events with more than 3,500 young
            people being involved in the activities and workings of the
            organisation.
          </p>
        </section>
        <section className="page-margin mt-32 px-4">
          <div className="hide-left">
            <div className="flex justify-center">
              <Title
                text="Our Mission"
                order="h2"
                underlineRotation="rotate-[190deg]"
              />
            </div>
            <p className="text-justify text-lg leading-relaxed md:text-xl">
              The European Youth Parliament is a peer-to-peer educational
              programme that brings together young people from across Europe to
              debate the pressing issues of our time. Our mission is to inspire
              and empower young Europeans to be open-minded, tolerant and active
              citizens.
            </p>
          </div>
        </section>
        <WaveDivider waveLayers={wavePaths.aboutTop} />
        <section className="page-padding max-h-max min-h-[60vh] bg-primary-600 pb-20 pt-8">
          <div className="flex justify-center">
            <Title
              text="What We Do"
              order="h2"
              variant="light"
              underlineRotation="rotate-[190deg]"
            />
          </div>
          <div className="hide-right flex flex-col flex-wrap justify-center gap-y-10 md:flex-row md:px-0 lg:-mx-16">
            <div className="delay-card flex flex-auto justify-center px-4 md:w-max">
              <WhatWeDoCard
                title="Open Forum for Youth"
                info="We provide a forum for young people to develop and express their opinions on European political and social issues in an open and welcoming environment."
                imageURL="/assets/what-we-do-1.jpg"
              >
                <BookIcon className="w-10 text-white" />
              </WhatWeDoCard>
            </div>
            <div className="delay-card flex flex-auto justify-center px-4 md:w-max">
              <WhatWeDoCard
                title="Intercultural Dialogue"
                info="Through the EYP international network, we support intercultural understanding and peacebuilding by connecting young Cypriots with other Europeans from different backgrounds to share ideas, opinions and practices."
                imageURL="/assets/what-we-do-2.jpg"
              >
                <ConversationIcon className="w-10 text-white" />
              </WhatWeDoCard>
            </div>
            <div className="delay-card flex flex-auto justify-center px-4 md:w-max">
              <WhatWeDoCard
                title="Skills Development"
                info="We present young people across Europe with diverse opportunities for personal growth and skills development through non-formal and peer-led educational activities."
                imageURL="/assets/what-we-do-3.jpg"
              >
                <PenIcon className="w-10 text-white" />
              </WhatWeDoCard>
            </div>
            <div className="delay-card flex flex-auto justify-center px-4 md:w-max">
              <WhatWeDoCard
                title="Network of Changemakers"
                info="We create a network of the next generation of diverse, young changemakers, equipped with the knowledge and skills needed to positively shape the world around them."
                imageURL="/assets/what-we-do-4.jpg"
              >
                <NetworkIcon className="w-10 text-white" />
              </WhatWeDoCard>
            </div>
          </div>
        </section>
        <WaveDivider waveLayers={wavePaths.aboutBottom} />
        <section className="page-margin mt-8 max-h-max min-h-[60vh] px-4 pb-16">
          <div className="hide-left">
            <div className="flex justify-center">
              <Title
                text="How we do What we do"
                order="h2"
                underlineRotation="rotate-[190deg]"
              />
            </div>
            <p className="text-justify text-lg leading-relaxed md:text-xl">
              With non-formal education at the heart of our activities, we
              provide young people with a non-partisan and independent forum to
              formulate and discuss their opinions about current issues both
              with each other and relevant policy makers - all while developing
              vital skills! Through a wide range of activities - from
              conferences, workshops, think tanks, trainings, panel discussions
              among others EYP Cyprus also provides young people with spaces to
              connect with each other and build intercultural understanding and
              friendships across Cyprus and Europe. With 15+ events annually,
              and 500+ participants at our activities each year, our
              organisation is growing and reaching more and more young people!
              And with EYP Cyprus being part of the wider EYP Network present in
              40+ countries in Europe, our members and alumni have the
              opportunity to join over 30,000 young people who take part in more
              than 500 EYP events organised across Europe every year.
            </p>
          </div>
        </section>
        <section className="page-margin mb-16 mt-8 max-h-max min-h-[60vh] px-4">
          <div className="hide-left">
            <div className="flex justify-center">
              <Title
                text="A Little More About Us"
                order="h2"
                underlineRotation="rotate-[190deg]"
              />
            </div>
            <p className="text-justify text-lg leading-relaxed md:text-xl">
              Our activities provide a unique educational experience to young
              people and allow them to develop transferable professional skills.
              Participants in our events have the opportunity to engage in
              discussions with other young people from Cyprus and all over
              Europe and exchange ideas on current socio-political issues.
              During 2020 and the pandemic, we focused on providing the youth
              with a platform to express their concerns, fears, and hopes, as
              well as ideas and views of the future. We therefore organised
              numerous events digitally or in a hybrid format that ultimately
              aimed to empower Cypriot youth and encourage them to be active
              citizens in their communities especially during this difficult
              time. EYP Cyprus is constantly seeking to expand, engage more
              young people in its activities, and furthering its impact!
            </p>
          </div>
        </section>
      </>{" "}
    </>
  );
}