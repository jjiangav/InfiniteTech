// Single source of truth for every business fact used across the site.
// Anything customer-facing (contact info, cities, legal text) should be
// read from here, never hardcoded in a page or component.

export const business = {
  name: "Infinite Tech",
  ownerName: "Jimmy",
  tagline: "Computer repair and IT support in Metro Vancouver",
  phoneDisplay: "(604) 283-2791",
  phoneHref: "+16042832791",
  email: "support@infinitetechsupport.ca",
  domain: "https://www.infinitetechsupport.ca",
  region: "Metro Vancouver, BC",
  youtubeUrl: "https://www.youtube.com/@infinite_group",
};

export const servedCityNames = [
  "Surrey",
  "Delta",
  "White Rock",
  "Langley",
  "Cloverdale",
  "Burnaby",
  "Coquitlam",
  "Richmond",
  "New Westminster",
  "Vancouver",
];

// Common jobs, labour only — parts extra. Matches the printed flyer.
export const services = [
  { name: "Diagnostic — credited to the repair", price: "$69" },
  { name: "Virus and malware removal", price: "$129" },
  { name: "Slow computer tune-up", price: "$119" },
  { name: "SSD upgrade and clone", price: "$129" },
  { name: "Battery replacement", price: "$99" },
  { name: "Screen replacement", price: "$139–169" },
  { name: "New computer setup and data move", price: "$139" },
];

export const legal = {
  priceDisclaimer:
    "Prices are for labour only and are estimates. I'll confirm your final price in writing before starting work.",
  labourOnly: "Labour only, parts extra.",
  minimumJob: "Minimum job $99.",
  diagnosticNote: "Diagnostic is $69 and it comes off the repair.",
  privacyNote:
    "Your details are used only to respond to your enquiry. They aren't sold or shared.",
  dataLossNote:
    "Back up anything important if you can — data loss during a repair can't be guaranteed against.",
};
