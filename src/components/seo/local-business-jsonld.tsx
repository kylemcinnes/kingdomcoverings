import { LocalBusinessJsonLd } from "next-seo";
import { COMPANY } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site";
import { HERO_IMAGE, TESTIMONIALS } from "@/lib/content";

const reviewsForSchema = TESTIMONIALS.slice(0, 4).map((t) => ({
  "@type": "Review" as const,
  author: { "@type": "Person" as const, name: t.name },
  reviewBody: t.quote,
  reviewRating: {
    "@type": "Rating" as const,
    ratingValue: t.rating,
    bestRating: 5,
    worstRating: 1,
  },
}));

export function LocalBusinessJsonLdBlock() {
  const url = getSiteUrl();
  return (
    <LocalBusinessJsonLd
      type={["HousePainter", "LocalBusiness"]}
      scriptKey="kingdom-local-business"
      name={COMPANY.legalName}
      description={`${COMPANY.differentiator} Serving ${COMPANY.areas.join(", ")}.`}
      url={url}
      telephone={COMPANY.phoneE164}
      email={COMPANY.email}
      image={[HERO_IMAGE]}
      priceRange="$$"
      slogan="Professional painting that covers more than walls."
      address={{
        "@type": "PostalAddress",
        streetAddress: COMPANY.streetAddress,
        addressLocality: COMPANY.addressLocality,
        addressRegion: COMPANY.addressRegion,
        postalCode: COMPANY.postalCode,
        addressCountry: COMPANY.addressCountry,
      }}
      geo={{
        "@type": "GeoCoordinates",
        latitude: COMPANY.geo.latitude,
        longitude: COMPANY.geo.longitude,
      }}
      areaServed={[
        "Port Credit ON",
        "Mississauga ON",
        "Oakville ON",
        "Greater Toronto Area",
      ]}
      sameAs={[COMPANY.facebookUrl]}
      aggregateRating={{
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 140,
        bestRating: 5,
        worstRating: 1,
      }}
      review={reviewsForSchema}
    />
  );
}
