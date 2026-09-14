// Single source of truth for every business fact used across the site.
// Anything customer-facing (contact info, cities, legal text) should be
// read from here, never hardcoded in a page or component.

export const business = {
  name: "Infinite Tech",
  ownerName: "Jimmy",
  tagline: "Websites and AI for small businesses in Metro Vancouver",
  email: "support@infinitetechsupport.ca",
  domain: "https://www.infinitetechsupport.ca",
  region: "Metro Vancouver, BC",
  youtubeUrl: "https://www.youtube.com/@infinite_group",
};

// Shared by every form on the site — Web3Forms access keys are meant to be
// public (they identify the form's destination, not a secret).
export const web3formsAccessKey = "d4e64292-dfb7-4d59-9553-92c97daa9eaa";

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

export const legal = {
  priceDisclaimer:
    "Prices are estimates. I'll confirm your final price in writing before starting any work.",
  privacyNote:
    "Your details are used only to respond to your enquiry. They aren't sold or shared.",
};
