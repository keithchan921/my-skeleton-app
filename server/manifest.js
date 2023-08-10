const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.bc3ec245.js","app":"_app/immutable/entry/app.02a65336.js","imports":["_app/immutable/entry/start.bc3ec245.js","_app/immutable/chunks/index.39145068.js","_app/immutable/chunks/singletons.eb2786b3.js","_app/immutable/chunks/index.ebc39500.js","_app/immutable/entry/app.02a65336.js","_app/immutable/chunks/index.39145068.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-5116679b.js')),
			__memo(() => import('./chunks/1-89b0f7df.js')),
			__memo(() => import('./chunks/2-614e322a.js')),
			__memo(() => import('./chunks/3-0edb48cb.js')),
			__memo(() => import('./chunks/4-632f8ee2.js')),
			__memo(() => import('./chunks/5-35b111d3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/card",
				pattern: /^\/card\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/table",
				pattern: /^\/table\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/toast",
				pattern: /^\/toast\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
