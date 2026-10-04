module.exports = [
"[project]/lib/sanity/mock.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockFor",
    ()=>mockFor
]);
/**
 * Sample content for previewing the design before real content exists.
 * Turn on with MOCK_CONTENT=1 in .env.local. Never enabled in production.
 * Everything in square brackets is a placeholder, not a fact.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity/queries.ts [app-rsc] (ecmascript)");
;
const block = (text, style = 'normal')=>({
        _type: 'block',
        _key: Math.random().toString(36).slice(2),
        style,
        markDefs: [],
        children: [
            {
                _type: 'span',
                _key: 's',
                text,
                marks: []
            }
        ]
    });
const pubs = [
    'The Economic Times',
    'Business Standard',
    'Mint',
    'The Hindu',
    'Hindustan Times',
    'Press Information Bureau'
].map((name, i)=>({
        _id: `pub-${i}`,
        name
    }));
const press = [
    {
        headline: 'Dr. Nikhil Agarwal appointed Additional Director of Hindustan Aeronautics Limited',
        category: 'appointment',
        publishedAt: '2026-03-14',
        featured: true,
        pub: 0
    },
    {
        headline: '[Interview headline as published]',
        category: 'interview',
        publishedAt: '2026-05-02',
        pub: 2
    },
    {
        headline: '[Feature headline as published]',
        category: 'feature',
        publishedAt: '2026-01-20',
        pub: 1
    },
    {
        headline: '[Headline as published]',
        category: 'mention',
        publishedAt: '2025-11-08',
        pub: 3
    },
    {
        headline: '[Interview headline as published]',
        category: 'interview',
        publishedAt: '2025-08-30',
        pub: 4
    },
    {
        headline: '[Announcement headline as published]',
        category: 'appointment',
        publishedAt: '2025-04-12',
        pub: 5
    }
].map((p, i)=>({
        _id: `press-${i}`,
        url: 'https://example.com/article',
        headline: p.headline,
        category: p.category,
        publishedAt: p.publishedAt,
        featured: !!p.featured,
        publication: pubs[p.pub],
        excerpt: '[Excerpt pulled automatically from the article, two to three lines long.]',
        archiveUrl: 'https://web.archive.org/web/2/https://example.com/article'
    }));
const articles = [
    {
        title: '[Lead essay title, set large]',
        kind: 'Essay',
        topic: '[Topic]',
        publishedAt: '2026-06-10T09:00:00Z',
        featured: true
    },
    {
        title: '[Opinion piece title]',
        kind: 'Opinion',
        topic: '[Topic]',
        publishedAt: '2026-04-22T09:00:00Z'
    },
    {
        title: '[Op-ed published in a newspaper]',
        kind: 'Op-ed',
        publishedAt: '2026-02-03T09:00:00Z',
        external: true
    },
    {
        title: '[Speech title]',
        kind: 'Speech',
        topic: '[Event]',
        publishedAt: '2025-10-15T09:00:00Z'
    }
].map((a, i)=>({
        _id: `article-${i}`,
        slug: `sample-${i}`,
        title: a.title,
        kind: a.kind,
        topic: a.topic,
        publishedAt: a.publishedAt,
        featured: !!a.featured,
        standfirst: '[One or two sentences that tell the reader why this matters.]',
        hasBody: !a.external,
        readingMinutes: a.external ? 0 : 6,
        originallyPublished: a.external ? {
            url: 'https://example.com/op-ed',
            publication: {
                name: 'Mint'
            }
        } : undefined
    }));
const profile = {
    name: 'Dr. Nikhil Agarwal',
    positioning: '[One-sentence introduction: the fields he leads in and what he writes about.]',
    shortBio: '[Two or three sentences of biography. The full version lives on the About page and is edited from My profile in the Studio.]',
    fullBio: [
        block('[Opening paragraph of the full biography.]'),
        block('[Second paragraph.]'),
        block('[Third paragraph.]')
    ],
    currentRoles: [
        {
            _key: 'r1',
            label: 'Board',
            title: 'Additional Director',
            organisation: 'Hindustan Aeronautics Limited'
        },
        {
            _key: 'r2',
            label: '[Role type]',
            title: '[Role]',
            organisation: '[Organisation]'
        },
        {
            _key: 'r3',
            label: 'Education',
            title: '[Degree]',
            organisation: '[Institution]'
        }
    ],
    timeline: [
        {
            _key: 't1',
            year: '[Year]',
            title: 'Additional Director',
            organisation: 'Hindustan Aeronautics Limited',
            highlight: true
        },
        {
            _key: 't2',
            year: '[Year]',
            title: '[Role]',
            organisation: '[Organisation]'
        },
        {
            _key: 't3',
            year: '[Year]',
            title: '[Role]',
            organisation: '[Organisation]'
        },
        {
            _key: 't4',
            year: '[Year]',
            title: '[Degree]',
            organisation: '[Institution]'
        }
    ],
    contactEmail: 'office@example.com',
    socials: {
        linkedin: 'https://www.linkedin.com/'
    }
};
const body = [
    block('[Opening paragraph, set slightly larger. Body text is Newsreader at 21px with a 1.65 line height, about 66 characters per line.]'),
    block('[Body paragraph. Lorem-style filler is avoided on purpose: real content replaces these brackets.]'),
    block('[Section heading]', 'h2'),
    block('[Body paragraph.]'),
    {
        _type: 'pullQuote',
        _key: 'pq',
        text: '[A line from the article worth pulling out.]'
    },
    block('[Closing paragraph.]')
];
function mockFor(query, params) {
    switch(query){
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["profileQuery"]:
            return profile;
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["settingsQuery"]:
            return {
                title: 'Dr. Nikhil Agarwal'
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pressQuery"]:
            return press;
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["featuredPublicationsQuery"]:
            return pubs.slice(0, 5);
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articlesQuery"]:
            return articles;
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleSlugsQuery"]:
            return articles.map((a)=>a.slug);
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relatedArticlesQuery"]:
            return articles.filter((a)=>a.slug !== params.slug).slice(0, 2);
        case __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2f$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleQuery"]:
            {
                const a = articles.find((x)=>x.slug === params.slug);
                return a ? {
                    ...a,
                    body: a.hasBody ? body : undefined
                } : null;
            }
        default:
            return undefined;
    }
}
}),
];

//# sourceMappingURL=lib_sanity_mock_ts_1kc5xb_._.js.map