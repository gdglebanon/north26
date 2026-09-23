# GDG North Lebanon - DevFest 2026 🚀

Official website for **GDG North Lebanon DevFest 2026** (Tripoli, Lebanon).

## ⚙️ Easy Configuration & Visibility Toggles

In `data.js`, you can easily configure the event details and toggle sections on/off without losing any underlying data:

```javascript
const devFestConfig = {
    year: "2026",
    edition: "DevFest Tripoli 2026",
    tagline: "GDG North Lebanon",
    dateDisplay: "October 17, 2026",
    locationDisplay: "BAU Tripoli",
    registrationUrl: "https://rsvp.gdglebanon.com/",
    contactEmail: "info@gdglebanon.com",

    // Visibility toggles: Set to true when you want to reveal the full content!
    showAgenda: false,          // Set to true to show the full agenda tracks & schedule
    showSpeakers: false,        // Set to true to show the speakers grid
    showSponsors: false,        // Set to true to show the sponsors & partners grid
    showBadgeGenerator: false,  // Set to true to enable the badge generator
};
```

When any toggle is set to `false`, the website displays a modern, engaging **Coming Soon** teaser card with callouts for Call for Speakers, Sponsor Inquiries, and notification signups.

When switched to `true`, the website instantly activates the dynamic interactive components (speaker cards, agenda tracks, filtering, search, and sponsor tiers).

---
Made with Antigravity 
