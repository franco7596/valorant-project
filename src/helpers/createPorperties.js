export function generateProperties(object) {
	const LURKER = Math.floor(Math.random() * 30);
	const AWP = Math.floor(Math.random() * 30);
	const ENTRY = Math.floor(Math.random() * 30);
	const STRONHOLDERS = Math.floor(Math.random() * (100 - LURKER - AWP - ENTRY));
	const SMOKEADORES = Math.floor(Math.random() * (100 - LURKER - AWP - ENTRY));
	const SPOTEADORES = Math.floor(Math.random() * (100 - LURKER - AWP - ENTRY));
	const HEALERS = Math.floor(Math.random() * (100 - LURKER - AWP - ENTRY));
	const FLASHEADORES = Math.floor(Math.random() * (100 - LURKER - AWP - ENTRY));
	return {
		...object,
		LURKER,
		AWP,
		ENTRY,
		STRONHOLDERS,
		SMOKEADORES,
		SPOTEADORES,
		HEALERS,
		FLASHEADORES,
	};
}
