import type { FC } from "react";
import {
  NCMemberCard,
  PageTitle,
  PreviousBoardButton,
  Underline,
} from "../components";

const NationalCommittee: FC = () => {
  return (
    <>
      <div className='page-margin flex justify-center'>
        <div className='flex flex-col gap-20'>
          <div className='flex flex-col items-center gap-2'>
            <PageTitle
              title='The National Committee'
              className='mb-16 items-center text-center'
            />
            <h2 className='mt-4 text-4xl font-semibold text-primary-800'>
              2023
            </h2>
            <Underline className='w-12 rotate-180 text-accent-900' />
          </div>
          <div className=' flex flex-wrap justify-center gap-10'>
            <NCMemberCard
              name='Lazaros Hadjiforados'
              title='President'
              imageURL='/NC/President.jpg'
            />
            <NCMemberCard
              name='Polyna Antoniou'
              title='Vice President'
              imageURL='/NC/VP.jpg'
            />
            <NCMemberCard
              name='Dimitrios Meris'
              title='Secretary and Social Media Officer'
              imageURL='/NC/Secretary.jpg'
            />
            <NCMemberCard
              name='Georgios Papaconstantinou'
              title='Treasurer'
              imageURL='/NC/Treasurer.jpg'
            />
            <NCMemberCard
              name='Kornelia Kitazou'
              title='PR Officer'
              // imageURL='/NC/PR_Officer.jpg'
            />
            <NCMemberCard
              name='Antreas Psaltis'
              title='HR Officer'
              // imageURL='/NC/HR_Officer.jpg'
            />
            <NCMemberCard
              name='Athina'
              title='National Coordinator'
              imageURL='/NC/NatCo_1.jpg'
            />
            <NCMemberCard
              name='Theodoulos Hadjimatheou'
              title='National Coordinator'
              // imageURL='/NC/NatCo_2.jpg'
            />
          </div>
          <div className='mt-10 flex flex-col items-center gap-2'>
            <h2 className='text-center text-4xl font-semibold text-primary-800'>
              Previous Boards
            </h2>
            <Underline className='mt-1 w-16 text-accent-900' />
          </div>
          <div className='grid grid-cols-3 grid-rows-5 gap-5 xs:grid-cols-4 xs:grid-rows-4'>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2022' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2021' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2020' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2019' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2018' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2017' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2016' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2015' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2014' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2013' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2012' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2011' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2010' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2009' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2008' />
            </div>
            <div className='flex shrink justify-center'>
              <PreviousBoardButton year='2007' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NationalCommittee;