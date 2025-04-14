

const scriptsInEvents = {

	async FolhaDeEventosFase1_Event8_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas --;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase1_Event9_Act5(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas --;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase1_Event13_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas --;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase1_Event14_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas --;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase1_Event17_Act2(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas ++;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase1_Event21_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas --;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase1_Event24_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas --;
		
		runtime.globalVars.Vidas = vidas
	},

	async FolhaDeEventosFase2_Event3_Act1(runtime, localVars)
	{
		let vidas = runtime.globalVars.Vidas;
		
		vidas = 0;
		
		runtime.globalVars.Vidas = vidas
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
