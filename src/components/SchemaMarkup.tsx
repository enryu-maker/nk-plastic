"use client";

import Script from "next/script";

const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NK Plastics",
    "image": "https://nkplastic.in/logo.png",
    "@id": "https://nkplastic.in",
    "url": "https://nkplastic.in",
    "telephone": "+91 7770096944",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. C.79/D.101 M.I.D.Supa, Tal Parner",
      "addressLocality": "Ahmednagar",
      "addressRegion": "Maharashtra",
      "postalCode": "414301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0195,
      "longitude": 74.4533
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://nkplastic.in"
    ],
    "priceRange": "₹₹₹"
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Recycled Plastic Granules (LDPE/HDPE)",
    "image": [
      "https://nkplastic.in/hero-factory.jpg"
    ],
    "description": "High-quality recycled plastic granules, including LDPE and HDPE variants for industrial manufacturing and plastic production.",
    "brand": {
      "@type": "Brand",
      "name": "NK Plastics"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://nkplastic.in#products",
      "priceCurrency": "INR",
      "lowPrice": "40",
      "highPrice": "120",
      "offerCount": "10"
    }
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
};

export default SchemaMarkup;
