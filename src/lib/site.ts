export const site = {
  name: 'Moreton Bay Mobile Podiatry',
  email: 'enquiries@moretonbaypodiatry.com',
  phone: '0424 428 932',
  phoneHref: 'tel:+61424428932',
  facebook: 'https://www.facebook.com/profile.php?id=100092484425167',
  address: ['38 Ridge Parade', 'Narangba, 4504'],
  providerNumber: '512200NY',
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the deploy base path. */
export const href = (path: string) => `${base}${path}`;
