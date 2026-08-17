import rawContent from './content.json';

/**
 * The shape of src/data/content.json.
 *
 * All site copy lives in the JSON; this file is the contract for it. Sections
 * import `content` from here so they get autocomplete, and so a key that goes
 * missing from the JSON is a type error rather than `undefined` in the page.
 * Run `npm run check` (also run as part of `npm run build`) to enforce it.
 */

export type CtaType = 'tel' | 'whatsapp';

/** Slug for an inline SVG we draw ourselves — not an icon library. */
export type ServiceIcon = 'home' | 'building' | 'plot';

export type Zone = 'north' | 'south' | 'east' | 'west' | 'central';

export interface Business {
	name: string;
	wordmark: { top: string; bottom: string };
	tagline: string;
	phone: string;
	email: string;
	/** International format, digits only — used to build wa.me links. */
	whatsapp: string;
	addressLines: string[];
	/** Plain link to Google Maps. Deliberately not an embed. */
	mapsUrl: string;
}

export interface Cta {
	label: string;
	type: CtaType;
}

export interface Hero {
	headline: string;
	subhead: string;
	primaryCta: Cta;
	secondaryCta: Cta;
	/** Five locality names, shown as a single reassurance line under the CTAs. */
	trustLine: string[];
}

export interface Service {
	id: string;
	title: string;
	blurb: string;
	icon: ServiceIcon;
}

export interface Audience {
	id: string;
	title: string;
	blurb: string;
}

export interface ProcessStep {
	/** Zero-padded, "01" through "04". */
	step: string;
	title: string;
	blurb: string;
}

export interface Partner {
	name: string;
	role: string;
	/** Each partner has their own line — callers reach the right one directly. */
	phone: string;
	/** International format, digits only. */
	whatsapp: string;
	bio: string;
	/** Path to a WebP portrait in src/assets/. */
	photo: string;
}

export interface About {
	paragraphs: string[];
	partners: Partner[];
}

export interface Contact {
	/** Web3Forms endpoint. The access key belongs in an env var, not here. */
	formEndpoint: string;
	whatsappPrefill: string;
	hours: string;
}

export interface NavLink {
	label: string;
	href: string;
}

export interface Content {
	business: Business;
	hero: Hero;
	services: Service[];
	audiences: Audience[];
	areas: Record<Zone, string[]>;
	process: ProcessStep[];
	about: About;
	contact: Contact;
	nav: {
		menuLabel: string;
		skipToContent: string;
		links: NavLink[];
	};
	footer: {
		phoneLabel: string;
		emailLabel: string;
		rights: string;
	};
	meta: {
		title: string;
		description: string;
	};
}

/**
 * `Content` with string-literal unions widened back to `string`.
 *
 * TypeScript types an imported JSON module with widened primitives, so
 * `content.json` can never satisfy `Content` directly — fields like
 * `hero.primaryCta.type` are `string`, not `'tel'`. Checking the import
 * against the widened shape still catches a missing, misnamed or wrongly
 * typed key, which is the part worth enforcing.
 */
type Widened<T> = T extends string
	? string
	: T extends number
		? number
		: T extends boolean
			? boolean
			: T extends readonly (infer U)[]
				? Widened<U>[]
				: T extends object
					? { [K in keyof T]: Widened<T[K]> }
					: T;

const checked: Widened<Content> = rawContent;

export const content = checked as Content;

export default content;
