# V21 Deep Review & Fix Report

## Review findings from the live V20 site

1. Navigation was inconsistent: homepage and inner pages did not always show the same global choices. V21 standardizes Home, Destinations, Day Trips, Stays, Itineraries, and Secret Picks.
2. The itinerary library claimed to contain ready-made plans, but the detailed itinerary pages were missing from the deployed package. V21 restores the 9 itinerary pages and rebuilds the itinerary index.
3. Stays library was too thin and still had “Coming Soon” blocks. V21 adds Waterfront Cottages, Boutique Hotels, and Glamping guide pages.
4. Several pages still showed internal production notes such as “Suggested local image folder,” “Photo polish note,” and “working draft.” V21 removes public-facing production notes.
5. Some hidden gem hero titles parsed awkwardly because the page title repeated inside the heading. V21 cleans hidden-gem hero headings.
6. Duplicate footer behavior existed on older flagship destination pages because old footers remained before V20 sections. V21 removes old/simple footers and standardizes the final footer.
7. Photo captions were too technical. V21 removes asset-folder language from public captions.
8. Day Trips hub is useful but needed to be connected more strongly from nav/footer and planning flow. V21 standardizes this.
9. Best Time, Photo Locations, Perfect For, and Things To Know sections exist but should be treated as planning tools, not afterthoughts. V21 keeps them and removes distractions around them.
10. Overall site architecture is now: Homepage → Destination Library → Day Trips → Stays → Itineraries → Destination details.

## Remaining future upgrades

- Add verified local photos for all hidden gems.
- Add a photo credits page once the final image set is selected.
- Add interactive Ontario map.
- Add filtering/search only after the content is stable.
