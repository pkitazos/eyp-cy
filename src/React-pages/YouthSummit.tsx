import type { FC } from "react";
import { SessionElementCard, TextCard, Underline } from "../components";

const YouthSummit: FC = () => {
  return (
    <>
      <div className='grid max-h-max min-h-[60vh] grid-cols-12 px-40'>
        <div className='col-span-8 col-start-3'>
          <TextCard title='Youth Summit' titleSize='text-4xl font-semibold'>
            Youth Summits are 4-day conferences for university students and
            young adults who are 18+ years old. With the Youth Summit being one
            of our major events that usually take place in the Summer, it
            usually welcomes approximately 100 participants from all over Cyprus
            and all over Europe. The conference allows participants to discuss
            amongst teams, but also with experts and high profile decision
            makers, topics that Cyprus and Europe currently face. The event and
            its activities help participants develop invaluable skills both for
            their studies and early careers. Through teambuilding activities,
            Committee Work where teams discuss various important topics, their
            opinions and suggestions as well as through a General Assembly,
            participants develop their teamwork, cooperation, communication and
            public speaking skills. If you are interested in participating in
            the next Youth Summit, get in touch with with our HR officer at
            members@eypcyprus.com to find out more information.
          </TextCard>
        </div>
      </div>
      <div className='max-h-max min-h-[60vh] px-40'>
        <div className='mb-16 flex flex-col gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>Coming Up</h2>
          <Underline className='w-14 text-accent-900' />
        </div>
        <div>
          <p>something something</p>
        </div>
      </div>
      <div className='max-h-max min-h-[60vh] px-40'>
        <div className='mb-16 flex flex-col items-center gap-2'>
          <h2 className='text-4xl font-semibold text-primary-800'>
            Session Program
          </h2>
          <Underline className='w-14 text-accent-900' />
        </div>
        <div className='grid grid-cols-11 grid-rows-4 items-center gap-10'>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='Teambuilding'
          >
            Team building in the context of the European Youth Parliament, means
            communication training, focused on group dynamics. The fundamental
            purpose of team building is to get a disparate group of individuals
            working as a team, through a series of physical, theoretical and
            problem-solving activities. Under the guidance of their committee
            Chairperson, the delegates will participate in a series of group
            dynamic exercises and problem-solving tasks, in order to get to know
            each other and begin functioning as a group.
          </SessionElementCard>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='Committee Work'
          >
            This is the central part of any EYP session. After team-building,
            the delegates come together to discuss their allocated topics, and
            will explore the skills needed to discuss, debate and communicate
            effectively within their committee. The goal of Committee work is
            the production of a strong and meaningful resolution, that will be
            debated upon during the General Assembly.
          </SessionElementCard>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='Discussing Europe'
          >
            Discussing Europe has been established as an annual happening at our
            sessions - an event welcoming various guests in a panel discussion
            centred around the session theme. During this event, participants
            have the opportunity to interact with professionals with expertise
            in the field, as well as experienced political figures.
          </SessionElementCard>
          <SessionElementCard
            className='col-span-9 col-start-2 row-span-1'
            title='General Assembly'
          >
            The General Assembly reunites all the participants of the session to
            consider the results of committee work. Each committee presents and
            defends their motion for a resolution, which is then debated
            according to the current model of the European Parliament.
          </SessionElementCard>
        </div>
      </div>
    </>
  );
};

export default YouthSummit;