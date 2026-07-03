const beginnerLaunchChecklist = [
  'Step 1: Choose this niche pack',
  'Step 2: Download the Shopify CSV',
  'Step 3: Create or open a Shopify store',
  'Step 4: Go to Shopify Products > Import',
  'Step 5: Upload the CSV file',
  'Step 6: Review product titles, descriptions, prices, and images',
  'Step 7: Use the Store Launch Content for homepage copy',
  'Step 8: Add WhatsApp/Gmail contact details to the store',
  'Step 9: Use the Social Media Launch Kit to post on Pinterest, Facebook, Instagram, TikTok, YouTube Shorts, and X',
  'Step 10: Launch the store and start promoting it'
];

const kitDisclaimerNote =
  'This kit helps you launch faster with ready products, CSV, copy, and marketing content. It does not automatically create your Shopify store yet.';

const packConfigs = {
  'baby-essentials-pack-usa': {
    packName: 'Baby Essentials Pack (USA)',
    niche: 'Baby Essentials',
    storeNames: ['TinyCare Essentials', 'ParentReady Baby', 'Little Daily Goods'],
    audience: 'new parents, baby shower shoppers, caregivers, and family gift buyers',
    benefit: 'make feeding, bath time, travel, and nursery routines easier',
    visual: 'a calm nursery station with baby care essentials arranged for daily routines',
    firstReply: 'Thanks for your message. Are you shopping for feeding, sleep, bath time, travel, or a baby shower gift?',
    mistakes: [
      'Making medical, sleep, or safety guarantees.',
      'Forgetting age, supervision, and parent convenience details.',
      'Using complicated parenting language instead of calm practical guidance.'
    ]
  },
  'beauty-tools-pack-usa': {
    packName: 'Beauty Tools Pack (USA)',
    niche: 'Beauty Tools',
    storeNames: ['GlowPrep Tools', 'Beauty Routine Supply', 'SoftGlam Essentials'],
    audience: 'beauty beginners, self-care shoppers, skincare users, and gift buyers',
    benefit: 'make daily beauty routines cleaner, easier, and more organized',
    visual: 'a vanity setup with beauty tools, mirror, organizers, and skincare accessories',
    firstReply: 'Thanks for your message. Are you shopping for skincare tools, makeup prep, grooming, storage, or a gift?',
    mistakes: [
      'Promising medical skincare results or instant transformations.',
      'Using unclear beauty claims instead of simple routine benefits.',
      'Forgetting hygiene, cleaning, and gentle-use instructions in product copy.'
    ]
  },
  'car-accessories-pack-usa': {
    packName: 'Car Accessories Pack (USA)',
    niche: 'Car Accessories',
    storeNames: ['DriveReady Goods', 'AutoEase Essentials', 'CleanRide Supply'],
    audience: 'drivers, commuters, parents, road trip users, and car care shoppers',
    benefit: 'keep vehicles cleaner, safer, more organized, and more convenient',
    visual: 'a clean car interior with organizer, phone mount, charger, and travel accessories',
    firstReply: 'Thanks for your message. Are you shopping for daily commuting, family trips, cleaning, charging, or car organization?',
    mistakes: [
      'Making safety claims beyond what the accessory can support.',
      'Ignoring vehicle fit, placement, and driver distraction concerns.',
      'Posting car photos without showing before-and-after organization or cleanup value.'
    ]
  },
  'desk-office-gadgets-pack-usa': {
    packName: 'Desk & Office Gadgets Pack (USA)',
    niche: 'Desk & Office Gadgets',
    storeNames: ['DeskFlow Tools', 'Workday Setup Co', 'FocusDesk Finds'],
    audience: 'remote workers, students, office teams, gamers, and productivity-focused shoppers',
    benefit: 'make desks cleaner, more comfortable, and easier to work from every day',
    visual: 'a tidy work desk with laptop stand, cable management, light bar, and organizer tray',
    firstReply: 'Thanks for your message. Are you improving comfort, cable clutter, laptop setup, lighting, or focus first?',
    mistakes: [
      'Listing office gadgets without explaining the desk problem they solve.',
      'Forgetting laptop size, port needs, and workspace limits.',
      'Using only corporate language instead of practical home-office copy.'
    ]
  },
  'fitness-accessories-pack-usa': {
    packName: 'Fitness Accessories Pack (USA)',
    niche: 'Fitness Accessories',
    storeNames: ['MoveDaily Gear', 'HomeFit Starter', 'Active Routine Supply'],
    audience: 'beginners, home workout users, walkers, and people building simple fitness habits',
    benefit: 'start practical workouts at home with compact, beginner-friendly gear',
    visual: 'a small home workout corner with bands, yoga mat, water bottle, and recovery tools',
    firstReply: 'Thanks for your message. Are you starting with strength, stretching, cardio, recovery, or a simple home routine?',
    mistakes: [
      'Making weight-loss or body transformation promises.',
      'Skipping safety notes and beginner-friendly product use.',
      'Only posting intense workout content that scares off beginners.'
    ]
  },
  'home-organization-pack-usa': {
    packName: 'Home Organization Pack (USA)',
    niche: 'Home Organization',
    storeNames: ['NeatNest Home', 'ClearSpace Living', 'RoomReset Organizers'],
    audience: 'renters, families, small-space homes, and anyone reducing clutter',
    benefit: 'create calmer rooms with simple storage and organization tools',
    visual: 'an organized closet and pantry with labeled bins and clear storage zones',
    firstReply: 'Thanks for your message. Which area do you want to organize first: closet, kitchen, bedroom, office, or laundry?',
    mistakes: [
      'Showing perfect rooms only and not explaining the small first step.',
      'Selling storage without helping customers choose by room or problem.',
      'Forgetting measurements, capacity, and where the item fits.'
    ]
  },
  'kitchen-gadgets-pack-usa': {
    packName: 'Kitchen Gadgets Pack (USA)',
    niche: 'Kitchen Gadgets',
    storeNames: ['PrepSmart Kitchen', 'Daily Cook Tools', 'KitchenEase Finds'],
    audience: 'home cooks, meal preppers, apartment kitchens, and busy families',
    benefit: 'prep meals faster, save counter space, and make everyday cooking simpler',
    visual: 'a bright kitchen counter with practical meal prep gadgets arranged for use',
    firstReply: 'Thanks for your message. What kind of cooking do you do most: quick meals, meal prep, baking, or family dinners? I can suggest the best tools first.',
    mistakes: [
      'Overpromising that a gadget replaces good cooking skills or full appliances.',
      'Not showing the item in a real kitchen task.',
      'Forgetting to mention cleaning, storage, and kitchen size considerations.'
    ]
  },
  'pet-accessories-pack-usa': {
    packName: 'Pet Accessories Pack (USA)',
    niche: 'Pet Accessories',
    storeNames: ['Happy Paws Picks', 'PetParent Daily', 'Tail & Home Supply'],
    audience: 'dog and cat owners who want practical daily pet care items',
    benefit: 'keep pets comfortable, entertained, clean, and easier to care for',
    visual: 'a pet care corner with bowls, toys, grooming tools, and walking essentials',
    firstReply: 'Thanks for your message. Are you shopping for a dog, cat, or both, and do you need grooming, feeding, walking, or play items?',
    mistakes: [
      'Making medical or training guarantees that the products cannot promise.',
      'Ignoring pet size, age, and daily routine in the copy.',
      'Posting cute pet content without a clear product benefit or call to action.'
    ]
  },
  'phone-accessories-pack-usa': {
    packName: 'Phone Accessories Pack (USA)',
    niche: 'Phone Accessories',
    storeNames: ['ChargeNest Gear', 'Everyday Phone Tools', 'PocketTech Supply'],
    audience: 'phone users, commuters, students, creators, and remote workers',
    benefit: 'charge faster, protect devices, and make daily phone use easier',
    visual: 'a clean desk with phone charging gear, stands, and everyday tech accessories',
    firstReply: 'Thanks for reaching out. What phone model do you use, and are you looking for charging, protection, car use, or desk setup accessories?',
    mistakes: [
      'Skipping compatibility details for phones, cases, chargers, and mounts.',
      'Using only tech jargon instead of simple everyday benefits.',
      'Promoting too many items at once without separating charging, protection, and setup needs.'
    ]
  },
  'travel-essentials-pack-usa': {
    packName: 'Travel Essentials Pack (USA)',
    niche: 'Travel Essentials',
    storeNames: ['RoamReady Essentials', 'CarryOn Comfort Co', 'TripEase Goods'],
    audience: 'travelers, weekend visitors, and frequent flyers',
    benefit: 'pack cleaner, stay comfortable, and solve small travel problems before they become stressful',
    visual: 'a neatly packed carry-on with travel accessories ready for a weekend trip',
    firstReply: 'Thanks for your message. Which trip are you shopping for, and do you want comfort items, packing organizers, or tech travel accessories first?',
    mistakes: [
      'Listing every product as a generic travel item instead of grouping by trip type.',
      'Forgetting to explain size, carry-on use, and practical benefits.',
      'Posting only airport photos without showing how each item solves a real travel problem.'
    ]
  }
};

const lowerFirst = (value) => value.charAt(0).toLowerCase() + value.slice(1);

const buildKit = ({ packName, niche, storeNames, audience, benefit, visual, firstReply, mistakes }) => {
  const lowerNiche = lowerFirst(niche);

  return {
    store_name_ideas: storeNames,
    hero_headline: `Launch a ${niche} store with practical products people can use right away`,
    hero_subheadline: `Start with ready-to-import products, simple homepage copy, and marketing ideas built for ${audience}.`,
    whatsapp_order_message: `Hi, I am interested in the ${packName}. Please send me the details, payment steps, and delivery time for this Shopify launch kit.`,
    gmail_order_subject: `Order request: ${packName}`,
    gmail_order_body: `Hi Kashi Packs,\n\nI want to order the ${packName}. Please send me the payment steps, what is included, and how the Shopify CSV and launch content will be delivered.\n\nMy name:\nMy email:\nPreferred contact method:`,
    pinterest_pin_titles: [
      `${niche} starter ideas for a new Shopify store`,
      `Useful ${lowerNiche} products customers can buy online`,
      `Build a beginner-friendly ${lowerNiche} store faster`
    ],
    pinterest_pin_descriptions: [
      `Save this ${lowerNiche} launch kit idea if you want a practical niche store with ready product copy and CSV import.`,
      `A simple product pack for ${audience}, focused on items that help them ${benefit}.`,
      `Use these ${lowerNiche} products, homepage copy, and social post ideas to prepare a cleaner Shopify launch.`
    ],
    facebook_ad_primary_texts: [
      `Starting a ${lowerNiche} store? This launch kit gives you product ideas, Shopify CSV content, page copy, and simple marketing angles in one place.`,
      `Help ${audience} ${benefit} with a focused set of ${lowerNiche} products.`,
      `Skip the blank-page stage. Use this ${niche} pack to prepare your products, homepage message, and first social posts faster.`
    ],
    facebook_ad_headlines: [
      `Start Your ${niche} Store`,
      `Ready ${niche} Product Pack`,
      'Simple Shopify Launch Kit'
    ],
    facebook_post_captions: [
      `Thinking about a ${lowerNiche} store? Start with products that solve clear everyday problems, then keep your launch message simple.`,
      `This ${niche} pack is built for beginners who want product copy, CSV import content, and first-week marketing ideas ready to use.`,
      'Tip: post one product problem each day. Show the pain point, the item, and one simple reason it helps.'
    ],
    instagram_reel_captions: [
      `POV: your ${lowerNiche} store finally has products, copy, and launch posts ready to go.`,
      `Three reasons this ${niche} idea works for beginners: useful products, easy content angles, and clear customer problems.`,
      `Turn ${visual} into a quick reel and invite shoppers to message you for details.`
    ],
    tiktok_video_hooks: [
      `I would start a ${lowerNiche} store like this.`,
      `Beginner Shopify idea: ${niche} products.`,
      'Here is a simple niche store you can build without guessing every product.'
    ],
    tiktok_video_script: `Show ${visual}. Say: 'If I were launching a beginner Shopify store, I would keep it focused on ${lowerNiche} products that help ${audience} ${benefit}. Start with a small set of useful items, import your CSV, clean up the product pages, then post one problem-solution video each day for the first week.'`,
    youtube_shorts_titles: [
      `Beginner Shopify niche idea: ${niche}`,
      `How to launch a ${lowerNiche} store faster`,
      `${niche} products for a simple online store`
    ],
    youtube_shorts_script: `Open with ${visual}. Voiceover: 'Here is a beginner-friendly Shopify niche: ${niche}. The idea is simple: sell practical products for ${audience}. Use the CSV to import products, review every title and price, add clear homepage copy, then create short posts showing one product benefit at a time. Keep the store simple and launch before you overthink it.'`,
    x_posts: [
      `A ${lowerNiche} store is easier to launch when every product solves a clear daily problem. Start focused, then improve as customers ask questions.`,
      `Beginner Shopify tip: do not start with 100 random products. Start with a tight ${niche} pack and make the message easy to understand.`,
      `For ${niche}, your first content week can be simple: show the problem, show the product, explain the benefit, invite questions.`
    ],
    x_hooks: [
      `If I had to launch a ${lowerNiche} store this week, I would start here:`,
      `Most beginner stores make ${niche} too complicated. Keep it this simple:`,
      `A practical ${lowerNiche} launch plan in 10 steps:`
    ],
    beginner_launch_checklist: beginnerLaunchChecklist,
    seven_day_marketing_checklist: [
      'Day 1: Publish the homepage using the hero headline and subheadline.',
      `Day 2: Post one Pinterest pin about the main ${lowerNiche} problem your products solve.`,
      'Day 3: Share a Facebook or Instagram post featuring 3 useful products from the pack.',
      `Day 4: Record a short TikTok/Reel using ${visual}.`,
      'Day 5: Post a YouTube Short explaining who this store helps and why.',
      `Day 6: Share an X post with a simple tip for ${audience}.`,
      'Day 7: Review messages, update unclear copy, and repost the best-performing angle.'
    ],
    beginner_mistakes_to_avoid: mistakes,
    after_first_customer_message: firstReply,
    kit_disclaimer_note: kitDisclaimerNote
  };
};

export const phase15LaunchKits = Object.fromEntries(
  Object.entries(packConfigs).map(([packId, config]) => [packId, buildKit(config)])
);
