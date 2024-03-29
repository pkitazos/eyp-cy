import { Metadata } from "next";
import {
  dWhoWeAre1,
  dWhoWeAre3,
  dWhoWeAre2,
  events1,
  events2,
  events3,
  events4,
  testimonialElena,
  testimonialMaddie,
  testimonialTheo,
} from "~/assets";
import {
  Carousel,
  Container,
  ImageGrid,
  TestimonialCard,
  Title,
  UpcomingEventCard,
  WaveDivider,
} from "~/components";

const testimonials = [
  {
    name: "Theodoulos Hadjimatheou",
    description: `23, Member of EYP Cyprus since 2017, Engineering Student at the University of Cambridge`,
    quote: `EYP has changed my life literally. Theres a plethora of areas that I was unaware or indifferent to, that through EYP I now find fascinating. By discussing topics ranging from climate change to human medical gene-editing, I have become more aware of current issues around me. Beyond all these, the extent to which I personally develop in EYP keeps surprising me. Through taking on various roles of responsibility I learnt a lot, met amazing people from all over Europe and stepped out of my comfort zone.`,
    imageURL: testimonialTheo,
  },
  {
    name: "Elena Odysseos",
    description: `24, Member of EYP Cyprus since 2011, Graduate Engineer at Rolls Royce, UK`,
    quote: `Through my involvement in the organisation I have developed both organisational and leadership skills which are appreciated in any situation. Through EYP I have learned how to communicate effectively and how to work as part of a team It is without a doubt that EYP has shaped the way I work and conduct myself in a professional setting.`,
    imageURL: testimonialElena,
  },
  {
    name: "Maddie Theodoulou",
    description: "17, Member since 2020, High school student",
    quote: `Lockdown in 2020 was a peculiar time for all of us. Everything from work to school became digital. At the beginning I honestly couldn&apos;t see how doing things via Zoom could be in any way productive and certainly in no way enjoyable. Yet, having the opportunity to participate in the EYP Online Discussion Forum showed me otherwise. Even though the Online Discussion was only four hours, I had never felt that I had accomplished so many things. I was able to not only further my academic knowledge on a new current topic by having raw and fascinating discussions with my fellow delegates, but I was also given the chance to meet these new people. People all over Cyprus, who had been through the same situation as me, yet with completely different experiences. Having EYP organise such events, even in times of disarray, is something that I am truly thankful for.`,
    imageURL: testimonialMaddie,
  },
];

const upcomingEvents = [
  // {
  //   title: "Annual General Meeting",
  //   description: "Where members meet for an overview of the organisation's past year and upcoming plans. A once-a-year opportunity: fun reunions, intense debates and exciting elections all in one event!",
  //   date: "28/12/2023",
  //   imageURL: events4,
  // },
  // {
  //   title: "Pre-Selection Days",
  //   description: "A small-scale annual event welcoming diverse school delegations to a day of vibrant debate!",
  //   date: "01-03/03/2024",
  //   imageURL: events1,
  // },

  {
    title: "Discussion Forum",
    description: "Rountables & Panel discussion on the upcoming EU elections!",
    date: "30/03/2024",
    imageURL: events2,
    actionText: "Sign Up Now",
    actionURL:
      "https://docs.google.com/forms/d/1XzDQTFDot7hFkGjYk6wA9nc8W1WZCVw-AY5Vwokpgug/edit",
  },
  {
    title: "Days of EYP",
    description:
      "An outreach event for any individual aged 15-17, wishing to participate in an EYP Cyprus event. Join us for a day of Team-Building, Committee Work and General Assembly!",
    date: "05-07/04/2024",
    imageURL: events1,
  },
  {
    title: "8th Youth Summit",
    description:
      "A 3-day conference inviting  individuals from 17-25 years old, to come together, discuss current affairs, exchange ideas and debate. No prior experience needed!",
    date: "25-28/07/2024",
    imageURL: events3,
  },
  {
    title: "National Session",
    description:
      "EYP Cyprus' annual flagship event, welcoming over 200 participants to an intercultural space of interactive activities, productive dialogue and community!",
    date: "27/08/2024 - 31/08/2024",
    imageURL: events4,
  },
];

export const metadata: Metadata = {
  title: "EYP CY - Home",
};
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <section className="flex h-screen w-full flex-col justify-center gap-6">
        <div className="flex flex-col gap-10 px-6 xs:px-10 sm:grid sm:grid-cols-12 sm:grid-rows-2 sm:px-0">
          <div className="flex w-full justify-start sm:col-start-2 sm:row-start-1 sm:w-max">
            <h2 className="text-5xl font-bold text-accent-700 md:text-white sm:text-6xl md-lg:text-7xl">
              Welcome to
            </h2>
          </div>
          <div className="flex w-full justify-end sm:col-start-3 sm:row-start-2 sm:w-max">
            <h2 className="text-5xl font-bold text-accent-900 sm:text-6xl md-lg:text-7xl">
              Young Europe
            </h2>
          </div>
        </div>
        <div className="mt-28 flex items-center sm:mt-10 md:mt-12 lg:mt-16 xl:mt-16 2xl:mt-32">
          <a
            href="/get-involved"
            className="mx-auto w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black transition-all duration-300 hover:scale-110 md:px-9 md:py-6  md:text-2xl lg:px-10 lg:py-7 lg:text-2xl xl:px-10 xl:py-7 xl:text-3xl"
          >
            Join Us
          </a>
        </div>
      </section>
      <Container className="flex items-center">
        <div className="z-20 w-full md-lg:w-1/2">
          <div className=" flex justify-center">
            <Title text="Who We Are" order="h2" />
          </div>
          <p className=" text-justify text-lg leading-relaxed md:text-xl">
            The European Youth Parliament (EYP) is a non-partisan and
            independent educational platform bringing together thousands of
            young people from all over Europe to discuss current issues, develop
            their skills through dialogue and cooperation, as well as empower
            them to positively shape the world around them..
            <br />
            <br />
            The European Youth Parliament Cyprus is a non-governmental,
            non-partisan organisation and one of the 41 National Committees that
            come under the umbrella of the Pan-European EYP Network. EYP Cyprus
            was established in 2006 and has been actively working to organise
            events and activities catered towards the youth of Cyprus.
          </p>
        </div>
        <div className="ml-20 md-lg:grid w-[45%] place-items-center hidden">
          <ImageGrid.Focus
            flow={"rhs"}
            images={[
              { src: dWhoWeAre1, alt: "" },
              { src: dWhoWeAre3, alt: "" },
              { src: dWhoWeAre2, alt: "" },
            ]}
          />
        </div>
      </Container>
      <WaveDivider.homeTop />
      <Container
        backdrop="bg-primary-600"
        className="flex flex-col items-center lg-xl:px-0"
      >
        <div className="flex justify-center md:justify-end">
          <Title text="Upcoming Events" order="h2" theme="light" />
        </div>

        <ul className="py-10 flex flex-col sm:grid sm:grid-cols-2 lg:flex-row lg:flex gap-8 sm:gap-16 lg:gap-6 lg:justify-evenly lg:px-10">
          {upcomingEvents.map((event, i) => (
            <UpcomingEventCard
              key={i}
              title={event.title}
              description={event.description}
              date={event.date}
              imageURL={event.imageURL}
              actionText={event.actionText}
              actionURL={event.actionURL}
            />
          ))}
        </ul>
      </Container>
      <WaveDivider.homeBottom />
      <Container className="mb-12 min-h-[40rem] h-max">
        <div className="flex flex-col gap-5">
          <div className=" flex justify-center md:justify-start">
            <Title
              text="Testimonials"
              order="h2"
              underline="text-orange-600 rotate-12"
            />
          </div>
          <div className="hidden md:block">
            <Carousel>
              {testimonials.map((testimonial, testimonialIndex) => (
                <TestimonialCard
                  key={testimonialIndex}
                  name={testimonial.name}
                  description={testimonial.description}
                  imageURL={testimonial.imageURL}
                >
                  {testimonial.quote}
                </TestimonialCard>
              ))}
            </Carousel>
          </div>
          <div className="flex flex-col gap-8 sm:gap-10 md:hidden">
            {testimonials.map((testimonial, testimonialIndex) => (
              <TestimonialCard
                key={testimonialIndex}
                name={testimonial.name}
                description={testimonial.description}
                imageURL={testimonial.imageURL}
              >
                {testimonial.quote}
              </TestimonialCard>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
