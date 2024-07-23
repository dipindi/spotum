import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rance De Guzman',
      email: 'rjldeguzman@mymail.mapua.edu.ph',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/134576064348f0e35900789d0aba207c2c4fe63c6677195d9ace28f649e34122?apiKey=f3d810e59048487dac6103fbc9e8f0d9&'
    },
    {
      name: 'Reji Capoquian',
      email: 'rtcapoquian@mymail.mapua.edu.ph',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6cc69117c5ba3c8500e60826c234aaa5b601fac0b6157892b19f85afc7f15684?apiKey=f3d810e59048487dac6103fbc9e8f0d9&'
    },
    {
      name: 'Mico Malatag',
      email: 'mkpmalatag@mymail.mapua.edu.ph',
      imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2020bdf1698a073ee4a15d29b4a83de1f03275c86fbf9978a6b19c80f2fbdd2?apiKey=f3d810e59048487dac6103fbc9e8f0d9&'
    }
  ];

  return (
    <section className='team'>
      <div className='teamContent'>
        <h2 className='teamTitle'>MEET THE TEAM</h2>
        <div className='teamMembers'>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;