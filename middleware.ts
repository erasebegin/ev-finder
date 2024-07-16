import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from "next/server";

// Define the available locales and the default locale
const locales = ['en-GB', 'de-DE'];
const defaultLocale = 'en-GB';

// Get the preferred locale from the request headers
function getLocale(request) {
  const negotiator = new Negotiator(request);
  const languages = negotiator.languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request:NextRequest) {
  // Extract the pathname from the request URL
  const { pathname } = request.nextUrl;

  // Check if the pathname already includes a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale.split('-')[0]}/`) || pathname === `/${locale.split('-')[0]}`
  );

  // If the pathname already includes a locale, do nothing
  if (pathnameHasLocale) return;

  // Otherwise, get the preferred locale and redirect to the URL with the locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale.split('-')[0]}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};

