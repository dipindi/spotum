import React from 'react';
import styles from './TeamMember.css';

const TeamMember = ({ imageSrc, name, email }) => {
  return (
    <div className={styles.teamMember}>
      <img loading="lazy" src={imageSrc} alt={`${name}'s profile`} className={styles.memberImage} />
      <div className={styles.memberInfo}>
        <h3 className={styles.memberName}>{name}</h3>
        <p className={styles.memberEmail}>{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;