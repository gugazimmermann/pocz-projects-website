import LANG from '../../lang/pt-BR';
import Routes from '../../routes';

interface itemsProps {
  title: string;
  link: string;
}

const FooterList: {title: string; items: itemsProps[] }[] = [
  {
    title: LANG.FOOTER.SOCIAL.title,
    items: [
      {
        title: LANG.FOOTER.SOCIAL.FACEBOOK.title,
        link: Routes.Facebook,
      },
      {
        title: LANG.FOOTER.SOCIAL.INSTAGRAM.title,
        link: Routes.Instagram,
      },
      {
        title: LANG.FOOTER.SOCIAL.TWITTER.title,
        link: Routes.Twitter,
      },
      {
        title: LANG.FOOTER.SOCIAL.LINKEDIN.title,
        link: Routes.LinkedIn,
      },
    ],
  },
  {
    title: LANG.FOOTER.LINKS.title,
    items: [
      {
        title: LANG.FOOTER.LINKS.FAQ.title,
        link: Routes.Faq,
      },
      {
        title: LANG.FOOTER.LINKS.HELP.title,
        link: Routes.Help,
      },
      {
        title: LANG.FOOTER.LINKS.SUPORT.title,
        link: Routes.Suport,
      },
    ],
  },
  {
    title: LANG.FOOTER.LEGAL.title,
    items: [
      {
        title: LANG.FOOTER.LEGAL.TERMS.title,
        link: Routes.Terms,
      },
      {
        title: LANG.FOOTER.LEGAL.PRIVACITY.title,
        link: Routes.Privacity,
      },
    ],
  },
  {
    title: LANG.FOOTER.COMPANY.title,
    items: [
      {
        title: LANG.FOOTER.COMPANY.ABOUTUS.title,
        link: Routes.AboutUs,
      },
      {
        title: LANG.FOOTER.COMPANY.CONTACT.title,
        link: Routes.Contact,
      },
    ],
  },
];

export default FooterList;
