// Single source of truth for every business fact used across the site.
// Anything customer-facing (contact info, cities, legal text) should be
// read from here, never hardcoded in a page or component.

export const business = {
  name: "Infinite Tech",
  ownerName: "Jimmy",
  tagline: "Mobile computer repair and IT support in Metro Vancouver",
  phoneDisplay: "(604) 283-2791",
  phoneHref: "+16042832791",
  email: "support@infinitetechsupport.ca",
  domain: "https://www.infinitetechsupport.ca",
  region: "Metro Vancouver, BC",
  youtubeUrl: "https://www.youtube.com/@infinite_group",
};

// Free travel. Larger jobs further out (extendedCities) are quoted per job.
export const coreCities = ["Surrey", "Delta", "White Rock", "Langley", "Cloverdale"];
export const extendedCities = ["Burnaby", "Coquitlam", "Richmond", "New Westminster", "Vancouver"];
export const servedCityNames = [...coreCities, ...extendedCities];

export const legal = {
  priceDisclaimer:
    "Prices are for labour only and are estimates. I'll confirm your final price in writing before starting work.",
  labourOnly: "Labour only, parts extra.",
  privacyNote:
    "Your details are used only to respond to your enquiry. They aren't sold or shared.",
  dataLossNote:
    "Back up anything important if you can — data loss during a repair can't be guaranteed against.",
};
