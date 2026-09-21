const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');

export const siteUrl = configuredSiteUrl || 'https://www.tonton-bushcraft.fr';
