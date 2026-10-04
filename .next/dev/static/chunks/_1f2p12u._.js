(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Home.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$structure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/structure.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$structureTool$2d$BQS09xl7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__structureTool$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/structureTool-BQS09xl7.js [app-client] (ecmascript) <export t as structureTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/actions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/components/Dashboard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/structure.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const isSingleton = (type)=>__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SINGLETONS"].includes(type);
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    name: 'default',
    title: 'Nikhil Agarwal',
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$structureTool$2d$BQS09xl7$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__structureTool$3e$__["structureTool"])({
            title: 'Content',
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structure"],
            defaultDocumentNode: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultDocumentNode"]
        }),
        // The query tool is for developers only, so it's hidden on the live site.
        ...("TURBOPACK compile-time truthy", 1) ? [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
                defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
            })
        ] : "TURBOPACK unreachable"
    ],
    // "Home" is the first thing he sees after signing in.
    tools: (prev)=>[
            {
                name: 'home',
                title: 'Home',
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomeIcon"],
                component: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$Dashboard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dashboard"]
            },
            ...prev
        ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaTypes"],
        templates: (templates)=>[
                ...templates.filter(({ schemaType })=>!isSingleton(schemaType)),
                {
                    // Used when a link is shared from his phone (wired up on Day 3).
                    id: 'pressMention-from-link',
                    title: 'Press coverage from a link',
                    schemaType: 'pressMention',
                    parameters: [
                        {
                            name: 'url',
                            type: 'string'
                        }
                    ],
                    value: (params)=>({
                            url: params.url,
                            featured: false
                        })
                }
            ]
    },
    document: {
        actions: (input, context)=>{
            if (isSingleton(context.schemaType)) {
                return input.filter(({ action })=>action && [
                        'publish',
                        'discardChanges',
                        'restore'
                    ].includes(action));
            }
            if (context.schemaType === 'article') {
                return input.map((action)=>action.action === 'publish' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAutoSlug"])(action) : action);
            }
            return input;
        },
        newDocumentOptions: (prev, { creationContext })=>creationContext.type === 'global' ? prev.filter((item)=>!isSingleton(item.templateId) && item.templateId !== 'pressMention-from-link') : prev
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "slugify",
    ()=>slugify,
    "withAutoSlug",
    ()=>withAutoSlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$documentPairPermissions$2d$_4_UTF4c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__useDocumentOperation$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/documentPairPermissions-_4_UTF4c.js [app-client] (ecmascript) <export l as useDocumentOperation>");
;
function slugify(input) {
    return input.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s-]/g, '').trim().replace(/[\s-]+/g, '-').slice(0, 80).replace(/-+$/, '');
}
function withAutoSlug(original) {
    var _s = __turbopack_context__.k.signature();
    const AutoSlugPublish = (props)=>{
        _s();
        const { patch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$documentPairPermissions$2d$_4_UTF4c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__useDocumentOperation$3e$__["useDocumentOperation"])(props.id, props.type);
        const result = original(props);
        if (!result) return result;
        return {
            ...result,
            onHandle: ()=>{
                const doc = props.draft || props.published;
                if (doc?.title && !doc.slug?.current) {
                    patch.execute([
                        {
                            set: {
                                slug: {
                                    _type: 'slug',
                                    current: slugify(doc.title)
                                }
                            }
                        }
                    ]);
                }
                result.onHandle?.();
            }
        };
    };
    _s(AutoSlugPublish, "Tdr54ee0bl9Q3/TyvEn/aVWco50=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$documentPairPermissions$2d$_4_UTF4c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__useDocumentOperation$3e$__["useDocumentOperation"]
        ];
    });
    AutoSlugPublish.action = original.action;
    return AutoSlugPublish;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dashboard",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Add.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Launch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Launch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/useLayer-CUKYjJYq.js [app-client] (ecmascript) <export y as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/button-Wii-24Xu.js [app-client] (ecmascript) <export t as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/useLayer-CUKYjJYq.js [app-client] (ecmascript) <export s as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/flex-CpiAc-4D.js [app-client] (ecmascript) <export t as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/button-Wii-24Xu.js [app-client] (ecmascript) <export n as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/stack-SbGBZ0x3.js [app-client] (ecmascript) <export t as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/stack-SbGBZ0x3.js [app-client] (ecmascript) <export n as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$Yp5lnvZK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__TextInput$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/textInput-Yp5lnvZK.js [app-client] (ecmascript) <export t as TextInput>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/client/dist/resolveEditInfo-Cz-smq3a.js [app-client] (ecmascript) <export p as getPublishedId> <export getPublishedId as l> <export l as getPublishedId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/studioClient-CouiNxto.js [app-client] (ecmascript) <export i as useClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$LoadingBlock$2d2d$aNDHjtJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useCurrentUser$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/LoadingBlock--aNDHjtJ.js [app-client] (ecmascript) <export n as useCurrentUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/router.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$withRouter$2d$siAXb04q$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__i__as__useRouter$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/withRouter-siAXb04q.js [app-client] (ecmascript) <locals> <export i as useRouter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/press-fetch.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const STATUS_TONE = {
    Published: 'positive',
    Draft: 'default',
    'Unpublished changes': 'caution',
    Scheduled: 'primary'
};
function greeting() {
    const hour = Number(new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        hour12: false,
        timeZone: 'Asia/Kolkata'
    }).format(new Date()));
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
}
function summarise(rows) {
    const byId = new Map();
    for (const row of rows){
        const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__["getPublishedId"])(row._id);
        const entry = byId.get(id) ?? {};
        if (row._id.startsWith('drafts.')) entry.draft = row;
        else entry.published = row;
        byId.set(id, entry);
    }
    return [
        ...byId.entries()
    ].map(([id, { draft, published }])=>{
        const latest = draft ?? published;
        let status = 'Published';
        if (draft && published) status = 'Unpublished changes';
        else if (draft) status = 'Draft';
        else if (published?.publishedAt && new Date(published.publishedAt) > new Date()) status = 'Scheduled';
        return {
            id,
            type: latest._type,
            title: latest.title || 'Untitled',
            updatedAt: latest._updatedAt,
            status
        };
    }).sort((a, b)=>b.updatedAt.localeCompare(a.updatedAt)).slice(0, 8);
}
function Dashboard() {
    _s();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__["useClient"])({
        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
    });
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$LoadingBlock$2d2d$aNDHjtJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useCurrentUser$3e$__["useCurrentUser"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$withRouter$2d$siAXb04q$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__i__as__useRouter$3e$__["useRouter"])();
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [linkError, setLinkError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const query = `*[_type in ["pressMention", "article"]] | order(_updatedAt desc)[0...40]{
      _id, _type, _updatedAt, publishedAt, "title": coalesce(headline, title, url)
    }`;
            let alive = true;
            const load = {
                "Dashboard.useEffect.load": ()=>client.fetch(query).then({
                        "Dashboard.useEffect.load": (rows)=>alive && setItems(summarise(rows))
                    }["Dashboard.useEffect.load"])
            }["Dashboard.useEffect.load"];
            load();
            const sub = client.listen('*[_type in ["pressMention", "article"]]', {}, {
                visibility: 'query'
            }).subscribe({
                "Dashboard.useEffect.sub": ()=>load()
            }["Dashboard.useEffect.sub"]);
            return ({
                "Dashboard.useEffect": ()=>{
                    alive = false;
                    sub.unsubscribe();
                }
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], [
        client
    ]);
    const addPress = async (event)=>{
        event.preventDefault();
        const trimmed = link.trim();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProbablyUrl"])(trimmed)) {
            setLinkError('That doesn’t look like a web link. Copy it from your browser’s address bar.');
            return;
        }
        setCreating(true);
        setLinkError(undefined);
        try {
            const existing = await client.fetch('*[_type == "pressMention" && url == $url][0]._id', {
                url: trimmed
            });
            if (existing) {
                router.navigateIntent('edit', {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__["getPublishedId"])(existing),
                    type: 'pressMention'
                });
                return;
            }
            const id = crypto.randomUUID();
            await client.create({
                _id: `drafts.${id}`,
                _type: 'pressMention',
                url: trimmed,
                featured: false
            });
            router.navigateIntent('edit', {
                id,
                type: 'pressMention'
            });
        } catch  {
            setLinkError('Something went wrong creating the entry. Try again.');
            setCreating(false);
        }
    };
    const firstName = user?.name?.split(' ')[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
        padding: [
            3,
            4,
            5
        ],
        style: {
            minHeight: '100%',
            overflow: 'auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Container"], {
            width: 3,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                gap: 5,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                        align: "flex-end",
                        justify: "space-between",
                        wrap: "wrap",
                        gap: 3,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                                gap: 3,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Heading"], {
                                        as: "h1",
                                        size: 4,
                                        children: [
                                            greeting(),
                                            firstName ? `, ${firstName}` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                        muted: true,
                                        children: "Everything on your website, in one place."
                                    }, void 0, false, {
                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Button$3e$__["Button"], {
                                as: "a",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteUrl"],
                                target: "_blank",
                                rel: "noreferrer",
                                mode: "ghost",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Launch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LaunchIcon"],
                                text: "View live site"
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sanity/components/Dashboard.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                        gap: 4,
                        wrap: "wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                                padding: 4,
                                radius: 3,
                                shadow: 1,
                                style: {
                                    flex: '2 1 420px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: addPress,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                                        gap: 4,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                                                align: "center",
                                                gap: 2,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                                        size: 2,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkIcon"], {}, void 0, false, {
                                                            fileName: "[project]/sanity/components/Dashboard.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 36
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Heading"], {
                                                        as: "h2",
                                                        size: 2,
                                                        children: "Add press coverage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                                muted: true,
                                                size: 1,
                                                children: "Paste a link to any article about you. The headline, publication, date and picture fill in by themselves."
                                            }, void 0, false, {
                                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                                                gap: 2,
                                                wrap: "wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
                                                        flex: 1,
                                                        style: {
                                                            minWidth: 240
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$textInput$2d$Yp5lnvZK$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__TextInput$3e$__["TextInput"], {
                                                            "aria-label": "Article link",
                                                            placeholder: "https://",
                                                            value: link,
                                                            onChange: (e)=>setLink(e.currentTarget.value),
                                                            fontSize: 2,
                                                            padding: 4,
                                                            type: "url",
                                                            inputMode: "url"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sanity/components/Dashboard.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Button$3e$__["Button"], {
                                                        type: "submit",
                                                        tone: "primary",
                                                        padding: 4,
                                                        text: creating ? 'Opening…' : 'Fetch details',
                                                        icon: creating ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Spinner$3e$__["Spinner"] : undefined,
                                                        disabled: creating || !link.trim()
                                                    }, void 0, false, {
                                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            linkError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                                size: 1,
                                                style: {
                                                    color: 'var(--card-badge-critical-fg-color, #b42318)'
                                                },
                                                children: linkError
                                            }, void 0, false, {
                                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                                lineNumber: 174,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                                padding: 4,
                                radius: 3,
                                shadow: 1,
                                style: {
                                    flex: '1 1 260px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                                    gap: 4,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                                            align: "center",
                                            gap: 2,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                                    size: 2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditIcon"], {}, void 0, false, {
                                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 34
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Heading"], {
                                                    as: "h2",
                                                    size: 2,
                                                    children: "Write an article"
                                                }, void 0, false, {
                                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sanity/components/Dashboard.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                            muted: true,
                                            size: 1,
                                            children: "A clean page that saves as you type. Nothing goes live until you press Publish."
                                        }, void 0, false, {
                                            fileName: "[project]/sanity/components/Dashboard.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Button$3e$__["Button"], {
                                            mode: "ghost",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Add$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddIcon"],
                                            padding: 4,
                                            text: "Start writing",
                                            onClick: ()=>router.navigateIntent('create', {
                                                    type: 'article'
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/sanity/components/Dashboard.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sanity/components/Dashboard.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                        radius: 3,
                        shadow: 1,
                        overflow: "hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
                                padding: 4,
                                style: {
                                    borderBottom: '1px solid var(--card-border-color)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Heading"], {
                                    as: "h2",
                                    size: 1,
                                    children: "Recent"
                                }, void 0, false, {
                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 198,
                                columnNumber: 13
                            }, this),
                            items === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                                padding: 5,
                                justify: "center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Spinner$3e$__["Spinner"], {
                                    muted: true
                                }, void 0, false, {
                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                    lineNumber: 202,
                                    columnNumber: 50
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this),
                            items?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
                                padding: 5,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                    muted: true,
                                    size: 1,
                                    children: "Nothing here yet. Paste your first article link above to get started."
                                }, void 0, false, {
                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            items && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                                        as: "button",
                                        padding: 4,
                                        style: {
                                            borderTop: '1px solid var(--card-border-color)',
                                            textAlign: 'left',
                                            width: '100%'
                                        },
                                        onClick: ()=>router.navigateIntent('edit', {
                                                id: item.id,
                                                type: item.type
                                            }),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                                            align: "center",
                                            gap: 3,
                                            wrap: "wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
                                                    flex: 1,
                                                    style: {
                                                        minWidth: 200
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                                                        gap: 2,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                                                weight: "medium",
                                                                textOverflow: "ellipsis",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                                                size: 1,
                                                                muted: true,
                                                                children: [
                                                                    item.type === 'pressMention' ? 'Press coverage' : 'Article',
                                                                    " · edited",
                                                                    ' ',
                                                                    new Date(item.updatedAt).toLocaleDateString('en-IN', {
                                                                        day: 'numeric',
                                                                        month: 'short'
                                                                    })
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Badge"], {
                                                    tone: STATUS_TONE[item.status],
                                                    padding: 2,
                                                    fontSize: 1,
                                                    children: item.status
                                                }, void 0, false, {
                                                    fileName: "[project]/sanity/components/Dashboard.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sanity/components/Dashboard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/sanity/components/Dashboard.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/Dashboard.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sanity/components/Dashboard.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sanity/components/Dashboard.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/sanity/components/Dashboard.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sanity/components/Dashboard.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "ItUP7hR8zSdQU3B8ZGy4sstdZTM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__["useClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$LoadingBlock$2d2d$aNDHjtJ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useCurrentUser$3e$__["useCurrentUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$withRouter$2d$siAXb04q$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__i__as__useRouter$3e$__["useRouter"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/components/LinkUnfurlInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkUnfurlInput",
    ()=>LinkUnfurlInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$CheckmarkCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/CheckmarkCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Sync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Sync.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$WarningOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/WarningOutline.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/useLayer-CUKYjJYq.js [app-client] (ecmascript) <export y as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/button-Wii-24Xu.js [app-client] (ecmascript) <export t as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/useLayer-CUKYjJYq.js [app-client] (ecmascript) <export s as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/flex-CpiAc-4D.js [app-client] (ecmascript) <export t as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Spinner$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/button-Wii-24Xu.js [app-client] (ecmascript) <export n as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/stack-SbGBZ0x3.js [app-client] (ecmascript) <export t as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/stack-SbGBZ0x3.js [app-client] (ecmascript) <export n as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/client/dist/resolveEditInfo-Cz-smq3a.js [app-client] (ecmascript) <export p as getPublishedId> <export getPublishedId as l> <export l as getPublishedId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/studioClient-CouiNxto.js [app-client] (ecmascript) <export i as useClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$documentPairPermissions$2d$_4_UTF4c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__useDocumentOperation$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/documentPairPermissions-_4_UTF4c.js [app-client] (ecmascript) <export l as useDocumentOperation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/FormValue-CStDZ-gp.js [app-client] (ecmascript) <export n as useFormValue>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/press-fetch.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const FIELD_LABELS = {
    headline: 'headline',
    publication: 'publication',
    date: 'date',
    excerpt: 'excerpt',
    picture: 'picture'
};
function LinkUnfurlInput(props) {
    _s();
    const { value, renderDefault } = props;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__["useClient"])({
        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
    });
    const rawId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
        '_id'
    ]) ?? '';
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__["getPublishedId"])(rawId);
    const { patch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$documentPairPermissions$2d$_4_UTF4c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__useDocumentOperation$3e$__["useDocumentOperation"])(id, 'pressMention');
    const current = {
        headline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'headline'
        ]),
        publication: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'publication'
        ]),
        publishedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'publishedAt'
        ]),
        excerpt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'excerpt'
        ]),
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'image'
        ]),
        category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'category'
        ]),
        archiveUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"])([
            'archiveUrl'
        ])
    };
    const currentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(current);
    currentRef.current = current;
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        kind: 'idle'
    });
    const lastFetched = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LinkUnfurlInput.useCallback[run]": async (link, replaceExisting)=>{
            lastFetched.current = link;
            try {
                setStatus({
                    kind: 'working',
                    step: 'Checking you haven’t added this already…'
                });
                const duplicates = await client.fetch('count(*[_type == "pressMention" && url == $url && !(_id in [$id, $draft])])', {
                    url: link,
                    id,
                    draft: `drafts.${id}`
                });
                if (duplicates > 0) {
                    setStatus({
                        kind: 'duplicate'
                    });
                    return;
                }
                setStatus({
                    kind: 'working',
                    step: 'Reading the article…'
                });
                const details = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchArticleDetails"])(link);
                setStatus({
                    kind: 'working',
                    step: 'Saving the picture and a backup copy…'
                });
                const has = currentRef.current;
                const fill = {
                    "LinkUnfurlInput.useCallback[run].fill": (existing)=>replaceExisting || !existing
                }["LinkUnfurlInput.useCallback[run].fill"];
                const [publicationId, imageAssetId, archiveUrl] = await Promise.all([
                    fill(has.publication) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findOrCreatePublication"])(client, details.publicationName, details.domain) : undefined,
                    fill(has.image) && details.imageUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["savePicture"])(client, details.imageUrl, details.domain).catch({
                        "LinkUnfurlInput.useCallback[run]": ()=>undefined
                    }["LinkUnfurlInput.useCallback[run]"]) : undefined,
                    has.archiveUrl ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestArchive"])(link)
                ]);
                const updates = {};
                if (details.headline && fill(has.headline)) updates.headline = details.headline;
                if (details.publishedAt && fill(has.publishedAt)) updates.publishedAt = details.publishedAt;
                if (details.excerpt && fill(has.excerpt)) updates.excerpt = details.excerpt;
                if (publicationId) updates.publication = {
                    _type: 'reference',
                    _ref: publicationId
                };
                if (imageAssetId) {
                    updates.image = {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAssetId
                        },
                        alt: details.headline || ''
                    };
                }
                if (archiveUrl) updates.archiveUrl = archiveUrl;
                const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guessCategory"])(details.headline);
                if (category && !has.category) updates.category = category;
                if (Object.keys(updates).length > 0) patch.execute([
                    {
                        set: updates
                    }
                ]);
                // Only point out gaps that are still empty after filling in.
                const nowFilled = {
                    headline: updates.headline ?? has.headline,
                    publication: publicationId ?? has.publication,
                    date: updates.publishedAt ?? has.publishedAt,
                    excerpt: updates.excerpt ?? has.excerpt,
                    picture: imageAssetId ?? has.image
                };
                const missing = Object.keys(nowFilled).filter({
                    "LinkUnfurlInput.useCallback[run].missing": (k)=>!nowFilled[k]
                }["LinkUnfurlInput.useCallback[run].missing"]);
                setStatus({
                    kind: 'done',
                    missing
                });
            } catch (err) {
                setStatus({
                    kind: 'error',
                    message: err instanceof Error ? err.message : 'The details couldn’t be fetched. You can fill them in by hand.'
                });
            }
        }
    }["LinkUnfurlInput.useCallback[run]"], [
        client,
        id,
        patch
    ]);
    // Fetch automatically when a link is pasted into an empty entry.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LinkUnfurlInput.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProbablyUrl"])(value) || value === lastFetched.current || current.headline || !rawId) return;
            const timer = setTimeout({
                "LinkUnfurlInput.useEffect.timer": ()=>run(value, false)
            }["LinkUnfurlInput.useEffect.timer"], 500);
            return ({
                "LinkUnfurlInput.useEffect": ()=>clearTimeout(timer)
            })["LinkUnfurlInput.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LinkUnfurlInput.useEffect"], [
        value,
        rawId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
        gap: 3,
        children: [
            renderDefault(props),
            status.kind === 'working' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                padding: 3,
                radius: 2,
                tone: "primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                    align: "center",
                    gap: 3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Spinner$3e$__["Spinner"], {
                            muted: true
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                            size: 1,
                            children: status.step
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 138,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            status.kind === 'done' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                padding: 3,
                radius: 2,
                tone: status.missing.length ? 'caution' : 'positive',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                    align: "flex-start",
                    gap: 3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                            size: 1,
                            children: status.missing.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$WarningOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningOutlineIcon"], {}, void 0, false, {
                                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                                lineNumber: 146,
                                columnNumber: 53
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$CheckmarkCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircleIcon"], {}, void 0, false, {
                                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                                lineNumber: 146,
                                columnNumber: 78
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                            gap: 2,
                            flex: 1,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                    size: 1,
                                    weight: "medium",
                                    children: status.missing.length ? 'Most details found. Fill in the rest below, then publish.' : 'Details found. Check them over, then publish.'
                                }, void 0, false, {
                                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                status.missing.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                                    size: 1,
                                    muted: true,
                                    children: [
                                        "Couldn’t find: ",
                                        status.missing.map((m)=>FIELD_LABELS[m] || m).join(', '),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                                    lineNumber: 154,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                lineNumber: 144,
                columnNumber: 9
            }, this),
            status.kind === 'duplicate' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                padding: 3,
                radius: 2,
                tone: "caution",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                    align: "center",
                    gap: 3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                            size: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$WarningOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningOutlineIcon"], {}, void 0, false, {
                                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                                lineNumber: 166,
                                columnNumber: 28
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                            size: 1,
                            children: "This article is already on your site. You can delete this entry."
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            status.kind === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                padding: 3,
                radius: 2,
                tone: "critical",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                    align: "flex-start",
                    gap: 3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                            size: 1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$WarningOutline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WarningOutlineIcon"], {}, void 0, false, {
                                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                                lineNumber: 175,
                                columnNumber: 28
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                            size: 1,
                            children: status.message
                        }, void 0, false, {
                            fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, this),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$press$2d$fetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProbablyUrl"])(value) && status.kind !== 'working' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$button$2d$Wii$2d$24Xu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Button$3e$__["Button"], {
                    mode: "ghost",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Sync$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncIcon"],
                    fontSize: 1,
                    padding: 3,
                    text: status.kind === 'idle' ? 'Fetch details' : 'Fetch details again (replaces what’s below)',
                    onClick: ()=>run(value, status.kind !== 'idle')
                }, void 0, false, {
                    fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sanity/components/LinkUnfurlInput.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(LinkUnfurlInput, "yg05lUg1dsqYJvdn/54tkpBLXo0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__["useClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$documentPairPermissions$2d$_4_UTF4c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__l__as__useDocumentOperation$3e$__["useDocumentOperation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$FormValue$2d$CStDZ$2d$gp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__useFormValue$3e$__["useFormValue"]
    ];
});
_c = LinkUnfurlInput;
var _c;
__turbopack_context__.k.register(_c, "LinkUnfurlInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/components/PressPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PressPreview",
    ()=>PressPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$_chunks$2d$es$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/_chunks-es/compat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/useLayer-CUKYjJYq.js [app-client] (ecmascript) <export y as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/useLayer-CUKYjJYq.js [app-client] (ecmascript) <export s as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/flex-CpiAc-4D.js [app-client] (ecmascript) <export t as Flex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/stack-SbGBZ0x3.js [app-client] (ecmascript) <export t as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/ui/dist/stack-SbGBZ0x3.js [app-client] (ecmascript) <export n as Text>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/studioClient-CouiNxto.js [app-client] (ecmascript) <export i as useClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$_chunks$2d$es$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImageUrlBuilder"])({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"]
});
const CATEGORY_LABEL = {
    appointment: 'Appointment',
    interview: 'Interview',
    feature: 'Feature',
    mention: 'Mention'
};
function PressPreview(props) {
    _s();
    const doc = props.document.displayed;
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__["useClient"])({
        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
    });
    const [publication, setPublication] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PressPreview.useEffect": ()=>{
            if (!doc.publication?._ref) return setPublication(undefined);
            client.fetch('*[_id == $id][0].name', {
                id: doc.publication._ref
            }).then({
                "PressPreview.useEffect": (name)=>setPublication(name ?? undefined)
            }["PressPreview.useEffect"]);
        }
    }["PressPreview.useEffect"], [
        client,
        doc.publication?._ref
    ]);
    const image = doc.image?.asset?._ref ? builder.image(doc.image).width(1200).height(750).fit('crop').url() : undefined;
    const date = doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Box$3e$__["Box"], {
        padding: [
            3,
            4,
            5
        ],
        style: {
            background: '#F7F5F0',
            minHeight: '100%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
            gap: 3,
            style: {
                maxWidth: 560,
                margin: '0 auto'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Text$3e$__["Text"], {
                    size: 1,
                    muted: true,
                    children: "How this will look on your site"
                }, void 0, false, {
                    fileName: "[project]/sanity/components/PressPreview.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$useLayer$2d$CUKYjJYq$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__s__as__Card$3e$__["Card"], {
                    padding: 4,
                    radius: 3,
                    style: {
                        background: '#FFFFFF',
                        color: '#15171C'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$stack$2d$SbGBZ0x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Stack$3e$__["Stack"], {
                        gap: 4,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    aspectRatio: '16 / 10',
                                    background: '#E7E2D8',
                                    borderRadius: 6,
                                    overflow: 'hidden'
                                },
                                children: image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: image,
                                    alt: "",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/sanity/components/PressPreview.tsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/PressPreview.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$flex$2d$CpiAc$2d$4D$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Flex$3e$__["Flex"], {
                                gap: 3,
                                align: "center",
                                wrap: "wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Georgia, serif',
                                            fontVariant: 'small-caps',
                                            letterSpacing: '0.04em',
                                            fontSize: 17
                                        },
                                        children: publication || 'Publication'
                                    }, void 0, false, {
                                        fileName: "[project]/sanity/components/PressPreview.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 13,
                                            color: '#575C66'
                                        },
                                        children: date
                                    }, void 0, false, {
                                        fileName: "[project]/sanity/components/PressPreview.tsx",
                                        lineNumber: 57,
                                        columnNumber: 24
                                    }, this),
                                    doc.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 12,
                                            border: '1px solid #1E3A5F',
                                            color: '#1E3A5F',
                                            borderRadius: 999,
                                            padding: '2px 10px'
                                        },
                                        children: CATEGORY_LABEL[doc.category] ?? doc.category
                                    }, void 0, false, {
                                        fileName: "[project]/sanity/components/PressPreview.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sanity/components/PressPreview.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Georgia, serif',
                                    fontSize: 26,
                                    lineHeight: 1.15
                                },
                                children: doc.headline || 'Headline will appear here'
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/PressPreview.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            doc.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: 15,
                                    lineHeight: 1.6,
                                    color: '#3A3F48'
                                },
                                children: doc.excerpt
                            }, void 0, false, {
                                fileName: "[project]/sanity/components/PressPreview.tsx",
                                lineNumber: 67,
                                columnNumber: 29
                            }, this),
                            doc.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: doc.url,
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    color: '#1E3A5F',
                                    fontWeight: 500,
                                    fontSize: 14
                                },
                                children: [
                                    "Read on ",
                                    publication || 'the original site',
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sanity/components/PressPreview.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sanity/components/PressPreview.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sanity/components/PressPreview.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/sanity/components/PressPreview.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/sanity/components/PressPreview.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(PressPreview, "MtO7Kn7/xzDREiGrR8DfaLFWsgc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$studioClient$2d$CouiNxto$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__useClient$3e$__["useClient"]
    ];
});
_c = PressPreview;
var _c;
__turbopack_context__.k.register(_c, "PressPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId,
    "siteUrl",
    ()=>siteUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const projectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8v8936ib';
const dataset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2025-10-01';
const siteUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/lib/press-fetch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchArticleDetails",
    ()=>fetchArticleDetails,
    "findOrCreatePublication",
    ()=>findOrCreatePublication,
    "guessCategory",
    ()=>guessCategory,
    "isProbablyUrl",
    ()=>isProbablyUrl,
    "requestArchive",
    ()=>requestArchive,
    "savePicture",
    ()=>savePicture
]);
async function fetchArticleDetails(link) {
    const res = await fetch(`/api/unfurl?url=${encodeURIComponent(link)}`);
    const data = await res.json().catch(()=>({}));
    if (!res.ok) throw new Error(data.error || 'The details couldn’t be fetched. You can fill them in by hand.');
    return data;
}
async function findOrCreatePublication(client, name, domain) {
    const existing = await client.fetch(`*[_type == "publication" && !(_id in path("drafts.**")) && ($domain in domains || lower(name) == lower($name))][0]._id`, {
        domain,
        name: name || ''
    });
    if (existing) return existing;
    if (!name) return undefined;
    const created = await client.create({
        _type: 'publication',
        name,
        domains: [
            domain
        ],
        showInFeaturedStrip: false
    });
    return created._id;
}
async function savePicture(client, imageUrl, domain) {
    const res = await fetch(`/api/unfurl/image?url=${encodeURIComponent(imageUrl)}`);
    if (!res.ok) return undefined;
    const blob = await res.blob();
    const ext = (blob.type.split('/')[1] || 'jpg').replace('jpeg', 'jpg');
    const asset = await client.assets.upload('image', blob, {
        filename: `press-${domain.replace(/\./g, '-')}.${ext}`
    });
    return asset._id;
}
async function requestArchive(link) {
    try {
        const res = await fetch('/api/archive', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: link
            })
        });
        if (!res.ok) return undefined;
        return (await res.json()).archiveUrl;
    } catch  {
        return undefined;
    }
}
function guessCategory(headline = '') {
    const h = headline.toLowerCase();
    if (/\b(appoint|appointed|appointment|named|nominated|elevated|takes charge|assumes charge|inducted)\b/.test(h)) return 'appointment';
    if (/\b(interview|in conversation|speaks to|q&a|talks to|says)\b/.test(h)) return 'interview';
    return undefined;
}
function isProbablyUrl(value) {
    if (!value) return false;
    try {
        const u = new URL(value);
        return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname.includes('.');
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemas/article.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "article",
    ()=>article
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Blockquote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Blockquote.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
;
;
;
const article = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'article',
    title: 'Article',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditIcon"],
    groups: [
        {
            name: 'writing',
            title: 'Writing',
            default: true
        },
        {
            name: 'details',
            title: 'Details'
        }
    ],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'writing',
            validation: (r)=>r.required().error('Give the article a title.').max(140)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'standfirst',
            title: 'Summary',
            type: 'text',
            rows: 2,
            group: 'writing',
            description: 'One or two sentences shown under the title and on article listings.',
            validation: (r)=>r.required().error('Add a short summary.').max(280)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'coverImage',
            title: 'Cover picture',
            type: 'image',
            group: 'writing',
            options: {
                hotspot: true
            },
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'alt',
                    title: 'Describe the picture',
                    type: 'string'
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'caption',
                    title: 'Caption or credit',
                    type: 'string'
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'body',
            title: 'Article',
            type: 'array',
            group: 'writing',
            description: 'Not needed if this was published elsewhere and you only want to link to it.',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'block',
                    styles: [
                        {
                            title: 'Paragraph',
                            value: 'normal'
                        },
                        {
                            title: 'Heading',
                            value: 'h2'
                        },
                        {
                            title: 'Smaller heading',
                            value: 'h3'
                        },
                        {
                            title: 'Quote',
                            value: 'blockquote'
                        }
                    ],
                    lists: [
                        {
                            title: 'Bulleted list',
                            value: 'bullet'
                        },
                        {
                            title: 'Numbered list',
                            value: 'number'
                        }
                    ],
                    marks: {
                        decorators: [
                            {
                                title: 'Bold',
                                value: 'strong'
                            },
                            {
                                title: 'Italic',
                                value: 'em'
                            }
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'Link address'
                                    }
                                ]
                            }
                        ]
                    }
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    name: 'pullQuote',
                    title: 'Pull quote',
                    type: 'object',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Blockquote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockquoteIcon"],
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'text',
                            title: 'Quote',
                            type: 'text',
                            rows: 2
                        })
                    ],
                    preview: {
                        select: {
                            title: 'text'
                        },
                        prepare: ({ title })=>({
                                title,
                                subtitle: 'Pull quote'
                            })
                    }
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'image',
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageIcon"],
                    options: {
                        hotspot: true
                    },
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'alt',
                            title: 'Describe the picture',
                            type: 'string'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'caption',
                            title: 'Caption',
                            type: 'string'
                        })
                    ]
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'kind',
            title: 'Kind of piece',
            type: 'string',
            group: 'details',
            options: {
                list: [
                    'Essay',
                    'Opinion',
                    'Op-ed',
                    'Speech',
                    'Interview'
                ],
                layout: 'radio',
                direction: 'horizontal'
            },
            initialValue: 'Essay'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'topic',
            title: 'Topic',
            type: 'string',
            group: 'details',
            description: 'One or two words, e.g. “Aerospace” or “Governance”.'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publishedAt',
            title: 'Publish date',
            type: 'datetime',
            group: 'details',
            description: 'Pick a future date to schedule it. It appears on the site from then on.',
            initialValue: ()=>new Date().toISOString(),
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'originallyPublished',
            title: 'Originally published elsewhere?',
            type: 'object',
            group: 'details',
            description: 'For op-eds that ran in a newspaper. Readers will be linked to the original.',
            options: {
                collapsible: true,
                collapsed: true
            },
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'publication',
                    title: 'Publication',
                    type: 'reference',
                    to: [
                        {
                            type: 'publication'
                        }
                    ]
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'url',
                    title: 'Link to the original',
                    type: 'url'
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'featured',
            title: 'Show first on homepage',
            type: 'boolean',
            group: 'details',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'slug',
            title: 'Web address',
            type: 'slug',
            group: 'details',
            description: 'Created from the title automatically when you publish. You rarely need to touch this.',
            options: {
                source: 'title',
                maxLength: 80
            }
        })
    ],
    orderings: [
        {
            title: 'Newest first',
            name: 'dateDesc',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'desc'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
            kind: 'kind',
            date: 'publishedAt',
            media: 'coverImage'
        },
        prepare: ({ title, kind, date, media })=>({
                title: title || 'Untitled article',
                subtitle: [
                    kind,
                    date && new Date(date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })
                ].filter(Boolean).join(', '),
                media
            })
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemas/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SINGLETONS",
    ()=>SINGLETONS,
    "schemaTypes",
    ()=>schemaTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$article$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/article.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$pressMention$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/pressMention.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$publication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/publication.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$siteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/siteSettings.ts [app-client] (ecmascript)");
;
;
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$pressMention$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pressMention"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$article$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["article"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$publication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publication"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$siteSettings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"]
];
const SINGLETONS = [
    'profile',
    'siteSettings'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemas/pressMention.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PRESS_CATEGORIES",
    ()=>PRESS_CATEGORIES,
    "pressMention",
    ()=>pressMention
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/node_modules/@sanity/client/dist/resolveEditInfo-Cz-smq3a.js [app-client] (ecmascript) <export p as getPublishedId> <export getPublishedId as l> <export l as getPublishedId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$LinkUnfurlInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/components/LinkUnfurlInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
;
;
;
;
const PRESS_CATEGORIES = [
    {
        title: 'Appointment',
        value: 'appointment'
    },
    {
        title: 'Interview',
        value: 'interview'
    },
    {
        title: 'Feature',
        value: 'feature'
    },
    {
        title: 'Mention',
        value: 'mention'
    }
];
const pressMention = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'pressMention',
    title: 'Press coverage',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'url',
            title: 'Article link',
            type: 'url',
            description: 'Paste the link from your browser’s address bar. The details below fill in by themselves.',
            components: {
                input: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$LinkUnfurlInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkUnfurlInput"]
            },
            validation: (r)=>r.required().custom(async (value, context)=>{
                    if (!value || !context.document) return true;
                    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$resolveEditInfo$2d$Cz$2d$smq3a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getPublishedId$3e$__$3c$export__getPublishedId__as__l$3e$__$3c$export__l__as__getPublishedId$3e$__["getPublishedId"])(context.document._id);
                    const count = await context.getClient({
                        apiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
                    }).fetch('count(*[_type == "pressMention" && url == $url && !(_id in [$id, $draft])])', {
                        url: value,
                        id,
                        draft: `drafts.${id}`
                    });
                    return count > 0 ? 'This article has already been added.' : true;
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: (r)=>r.required().error('Add the article’s headline.')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publication',
            title: 'Publication',
            type: 'reference',
            to: [
                {
                    type: 'publication'
                }
            ],
            description: 'Matched automatically from the link. Pick another if it’s wrong.',
            validation: (r)=>r.required().error('Choose which publication ran this article.')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'publishedAt',
            title: 'Date published',
            type: 'date',
            options: {
                dateFormat: 'D MMMM YYYY'
            },
            validation: (r)=>r.required().error('Add the date the article was published.').custom((value)=>{
                    if (!value) return true;
                    return new Date(value) > new Date() ? 'This date is in the future.' : true;
                })
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'category',
            title: 'Type of coverage',
            type: 'string',
            options: {
                list: PRESS_CATEGORIES,
                layout: 'radio',
                direction: 'horizontal'
            },
            validation: (r)=>r.required().error('Choose the type of coverage.')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'excerpt',
            title: 'Short excerpt',
            type: 'text',
            rows: 3,
            description: 'Two or three lines shown under the headline. Edit freely.',
            validation: (r)=>r.max(320).warning('Shorter excerpts read better. Aim for two or three lines.')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'image',
            title: 'Picture',
            type: 'image',
            options: {
                hotspot: true
            },
            description: 'Saved to your site, so it stays even if the news site removes it.',
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'alt',
                    title: 'Describe the picture',
                    type: 'string',
                    description: 'Read aloud to people who can’t see images, e.g. “Dr. Agarwal at the HAL board meeting”.'
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'featured',
            title: 'Show on homepage',
            type: 'boolean',
            description: 'Pins this to the “Featured coverage” spot on your homepage.',
            initialValue: false
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'archiveUrl',
            title: 'Backup copy',
            type: 'url',
            readOnly: true,
            description: 'Saved automatically on the Internet Archive, in case the original link ever stops working.'
        })
    ],
    orderings: [
        {
            title: 'Newest first',
            name: 'dateDesc',
            by: [
                {
                    field: 'publishedAt',
                    direction: 'desc'
                }
            ]
        }
    ],
    initialValue: {
        featured: false
    },
    preview: {
        select: {
            title: 'headline',
            publication: 'publication.name',
            date: 'publishedAt',
            media: 'image',
            url: 'url'
        },
        prepare: ({ title, publication, date, media, url })=>({
                title: title || url || 'New press coverage',
                subtitle: [
                    publication,
                    date && new Date(date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })
                ].filter(Boolean).join(', '),
                media
            })
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemas/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profile",
    ()=>profile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$User$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/User.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
;
const profile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'profile',
    title: 'My profile',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$User$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"],
    groups: [
        {
            name: 'intro',
            title: 'Introduction',
            default: true
        },
        {
            name: 'career',
            title: 'Career'
        },
        {
            name: 'contact',
            title: 'Contact'
        }
    ],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Name',
            type: 'string',
            group: 'intro',
            initialValue: 'Dr. Nikhil Agarwal',
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'positioning',
            title: 'One-line introduction',
            type: 'string',
            group: 'intro',
            description: 'The sentence under your name at the top of the homepage.',
            validation: (r)=>r.max(180)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'portrait',
            title: 'Portrait',
            type: 'image',
            group: 'intro',
            options: {
                hotspot: true
            },
            description: 'A tall photo works best. Drag the circle to keep your face in frame on every screen size.',
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'credit',
                    title: 'Photo credit',
                    type: 'string'
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'shortBio',
            title: 'Short biography',
            type: 'text',
            rows: 4,
            group: 'intro',
            description: 'Two or three sentences for the homepage.'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fullBio',
            title: 'Full biography',
            type: 'array',
            group: 'intro',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'block',
                    styles: [
                        {
                            title: 'Paragraph',
                            value: 'normal'
                        }
                    ]
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'currentRoles',
            title: 'Current roles',
            type: 'array',
            group: 'career',
            description: 'Shown in the strip under your name. Drag to reorder.',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'object',
                    name: 'role',
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            description: 'e.g. “Board”, “Education”.'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'title',
                            title: 'Role',
                            type: 'string',
                            validation: (r)=>r.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'organisation',
                            title: 'Organisation',
                            type: 'string'
                        })
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'organisation'
                        }
                    }
                })
            ],
            validation: (r)=>r.max(4)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'timeline',
            title: 'Career timeline',
            type: 'array',
            group: 'career',
            description: 'Most recent first.',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'object',
                    name: 'milestone',
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'year',
                            title: 'Year',
                            type: 'string',
                            validation: (r)=>r.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'title',
                            title: 'Role or milestone',
                            type: 'string',
                            validation: (r)=>r.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'organisation',
                            title: 'Organisation',
                            type: 'string'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'highlight',
                            title: 'Highlight this one',
                            type: 'boolean',
                            initialValue: false
                        })
                    ],
                    preview: {
                        select: {
                            year: 'year',
                            title: 'title',
                            organisation: 'organisation'
                        },
                        prepare: ({ year, title, organisation })=>({
                                title: `${year} · ${title}`,
                                subtitle: organisation
                            })
                    }
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'contactEmail',
            title: 'Email for enquiries',
            type: 'string',
            group: 'contact',
            validation: (r)=>r.email()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'socials',
            title: 'Social links',
            type: 'object',
            group: 'contact',
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'linkedin',
                    title: 'LinkedIn',
                    type: 'url'
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                    name: 'x',
                    title: 'X (Twitter)',
                    type: 'url'
                })
            ]
        })
    ],
    preview: {
        select: {
            title: 'name',
            media: 'portrait'
        }
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemas/publication.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publication",
    ()=>publication
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$DocumentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/DocumentText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
;
const publication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'publication',
    title: 'Publication',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$DocumentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentTextIcon"],
    description: 'A newspaper, magazine or website that has covered you or published your writing.',
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'As it should appear on your site, e.g. “The Economic Times”.',
            validation: (r)=>r.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'domains',
            title: 'Website addresses',
            type: 'array',
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: 'string'
                })
            ],
            description: 'e.g. economictimes.indiatimes.com — links from these addresses are matched to this publication automatically.',
            options: {
                layout: 'tags'
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'logo',
            title: 'Logo (optional)',
            type: 'image',
            description: 'Shown in the “As featured in” strip. A transparent PNG or SVG works best.'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'showInFeaturedStrip',
            title: 'Show in “As featured in”',
            type: 'boolean',
            initialValue: false
        })
    ],
    preview: {
        select: {
            title: 'name',
            domains: 'domains',
            media: 'logo'
        },
        prepare: ({ title, domains, media })=>({
                title,
                subtitle: domains?.[0],
                media
            })
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemas/siteSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteSettings",
    ()=>siteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Cog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
;
const siteSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'siteSettings',
    title: 'Site settings',
    type: 'document',
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CogIcon"],
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'title',
            title: 'Site title',
            type: 'string',
            description: 'Shown in Google results and browser tabs.',
            initialValue: 'Dr. Nikhil Agarwal'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'description',
            title: 'Site description',
            type: 'text',
            rows: 2,
            description: 'The short summary Google shows under your name. Around 150 characters.',
            validation: (r)=>r.max(170).warning('Google cuts off descriptions longer than about 160 characters.')
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'shareImage',
            title: 'Default share picture',
            type: 'image',
            description: 'Used when someone shares your homepage on LinkedIn or WhatsApp. 1200 × 630 pixels.'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'mediaKit',
            title: 'Media kit',
            type: 'file',
            description: 'A PDF or ZIP journalists can download from the Speaking page.'
        })
    ],
    preview: {
        prepare: ()=>({
                title: 'Site settings'
            })
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/structure.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultDocumentNode",
    ()=>defaultDocumentNode,
    "structure",
    ()=>structure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Cog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$DocumentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/DocumentText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Edit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/Link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$User$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/icons/dist/User.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$PressPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/components/PressPreview.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
const structure = (S)=>S.list().title('Your website').items([
        S.listItem().title('Press coverage').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkIcon"]).child(S.documentTypeList('pressMention').title('Press coverage').defaultOrdering([
            {
                field: 'publishedAt',
                direction: 'desc'
            }
        ])),
        S.listItem().title('My articles').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Edit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditIcon"]).child(S.documentTypeList('article').title('My articles').defaultOrdering([
            {
                field: 'publishedAt',
                direction: 'desc'
            }
        ])),
        S.divider(),
        S.listItem().title('My profile').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$User$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"]).child(S.document().schemaType('profile').documentId('profile').title('My profile')),
        S.listItem().title('Publications').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$DocumentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentTextIcon"]).child(S.documentTypeList('publication').title('Publications').defaultOrdering([
            {
                field: 'name',
                direction: 'asc'
            }
        ])),
        S.listItem().title('Site settings').icon(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$icons$2f$dist$2f$Cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CogIcon"]).child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site settings'))
    ]);
const defaultDocumentNode = (S, { schemaType })=>{
    if (schemaType === 'pressMention') {
        return S.document().views([
            S.view.form().title('Details'),
            S.view.component(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$PressPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PressPreview"]).title('Preview')
        ]);
    }
    return S.document();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1f2p12u._.js.map