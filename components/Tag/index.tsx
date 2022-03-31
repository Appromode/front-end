import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Tag {
  tagName: string;
}

const Tag: FC<Tag> = ({ tagName }) => <div className={styles.tag}>{tagName}</div>;

export default Tag;
