import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  // Turkish is disabled for now; messages/tr.json is kept so it can be re-enabled.
  locales: ['en'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will assist with routing strategy.
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);
