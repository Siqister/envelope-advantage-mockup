//Exports layer visibility and animation settings
//Each exported object corresponds to a specific animation state, with a list of visible layers + target style (if applicable)

const layers = {
	AIR_RIGHTS_ANNO: 'air-rights-anno',
	CTX_BLDG_FRONT: 'ctx-bldg-front',
	ENVELOPE_LINE: 'envelope_1_',
	ENVELOPE_LINE_BEHIND: 'envelope-behind',
	ENVELOPE_FILL: 'envelope-fill',
	BLDG_LINE: 'bldg-line',
	ZONING_ANNO: 'zoning-anno',
	BLDG_FILL: 'bldg-fill',
	CTX_BLDG_BACK: 'ctx-bldg-back',
	LOT_ANNO: 'lot-anno',
	LOT_LINE_THICK: 'lot-outline_1_',
	LOT_LINE_THIN: 'lot-innerline',
	LOT_FILL: 'lot-fill',
	LOT_SHADOW: 'lot-shadow',
};

//Scenes
const state1 = {
	desc: 'default state, pre-developement',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		layers.CTX_BLDG_BACK,
		layers.CTX_BLDG_FRONT
	]
}
export {state1};

const state2 = {
	desc: 'highlight envelope\'s lot area calculations',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		layers.LOT_FILL,
		layers.LOT_ANNO,
		{layer: layers.CTX_BLDG_BACK, style: {opacity:.2}},
		{layer: layers.CTX_BLDG_FRONT, style: {opacity: .2}}
	]
}
export {state2};

const state3 = {
	desc: 'highlight air rights database',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		//layers.LOT_FILL,
		//layers.LOT_ANNO,
		{layer: layers.CTX_BLDG_BACK, style: {opacity:1}},
		{layer: layers.CTX_BLDG_FRONT, style: {opacity:1}},
		layers.AIR_RIGHTS_ANNO
	]
}
export {state3};

const state4 = {
	desc: 'highlight comprehensive zoning coverage',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		//layers.LOT_FILL,
		//layers.LOT_ANNO,
		{layer: layers.CTX_BLDG_BACK, style: {opacity:.05}},
		{layer: layers.CTX_BLDG_FRONT, style: {opacity:.05}},
		//layers.ENVELOPE_FILL,
		//layers.ENVELOPE_LINE,
		//layers.ENVELOPE_LINE_BEHIND,
		layers.ZONING_ANNO,
	]
}
export {state4};

const state5 = {
	desc: 'highlight comprehensive zoning coverage',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		//layers.LOT_FILL,
		//layers.LOT_ANNO,
		{layer: layers.CTX_BLDG_BACK, style: {opacity:.05}},
		{layer: layers.CTX_BLDG_FRONT, style: {opacity:.05}},
		//layers.ENVELOPE_FILL,
		layers.ENVELOPE_LINE,
		layers.ENVELOPE_LINE_BEHIND,
		layers.ZONING_ANNO,
	]
}
export {state5};


const state6 = {
	desc: 'building massing',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		{layer: layers.CTX_BLDG_BACK, style: {opacity:.2}},
		{layer: layers.CTX_BLDG_FRONT, style: {opacity:.2}},
		layers.ENVELOPE_LINE,
		layers.BLDG_FILL,
		layers.BLDG_LINE,
	],
	progress: [
		{
			layer: layers.BLDG_LINE,
			subSelector: "*",
		}
	]
}
export {state6};

const state7 = {
	desc: 'final building',
	layers: [
		layers.LOT_SHADOW,
		layers.LOT_LINE_THIN,
		layers.LOT_LINE_THICK,
		//layers.LOT_FILL,
		//layers.LOT_ANNO,
		{layer: layers.CTX_BLDG_BACK, style: {opacity:1}},
		{layer: layers.CTX_BLDG_FRONT, style: {opacity:1}},
		//layers.ENVELOPE_FILL,
		//layers.ENVELOPE_LINE,
		layers.BLDG_FILL,
		layers.BLDG_LINE,
	]
}
export {state7};