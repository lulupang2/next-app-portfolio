import clsx from 'clsx';
import {
  GithubIcon,
  HomeIcon,
  Mail,
  NotebookIcon,
} from 'lucide-react';
import React from 'react';
const cn = (str: string) => clsx(`contact-` + str);

const Contact = () => {
  return (
    <section className="page-wrapper contact">
      <div className={cn('container')}>
        <span className={cn('title')}>Contact Me</span>
        <span className={cn('item')}>
          <Mail size={24} />
          <a
            href="mailto:lulupang@mail.com"
            className={cn('email')}
          >
            lulupang@mail.com
          </a>
        </span>
        <span className={cn('item')}>
          <GithubIcon size={24} />
          <a
            href="https://github.com/lulupang2/"
            target="_blank"
            rel="noreferrer"
          >
            github.com/lulupang2
          </a>
        </span>
        <span className={cn('item')}>
          <NotebookIcon size={24} />
          <a
            href="https://jisungin.notion.site/1-32852d349e45496ab785ad1c4679d48c?pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            Notion Resume Page
          </a>
        </span>
        <span className={cn('item')}>
          <HomeIcon size={24} />
          <a
            href="https://blog.jisung.pro"
            target="_blank"
            rel="noreferrer"
          >
            정리하려고 하는 블로그
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
