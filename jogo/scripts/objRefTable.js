const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Mouse,
		C3.Plugins.Sprite,
		C3.Plugins.TiledBg,
		C3.Behaviors.Pin,
		C3.Behaviors.Flash,
		C3.Behaviors.solid,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Behaviors.Fade,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Behaviors.LOS,
		C3.Behaviors.Bullet,
		C3.Behaviors.destroy,
		C3.Behaviors.Sin,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Behaviors.Platform.Acts.SetGravity,
		C3.Behaviors.Platform.Acts.SetJumpStrength,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.SetVar,
		C3.Behaviors.LOS.Cnds.HasLOSToObject,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.Bullet.Acts.SetAngleOfMotion,
		C3.Behaviors.Bullet.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.ScriptsInEvents.FolhaDeEventosFase2_Event3_Act1,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Behaviors.Pin.Acts.PinByProperties,
		C3.Behaviors.Fade.Acts.StartFade,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.OnJump,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Acts.SetMaxSpeed,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Flash.Cnds.IsFlashing,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event8_Act1,
		C3.Behaviors.Flash.Acts.Flash,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event9_Act5,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event13_Act1,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event14_Act1,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event17_Act2,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event21_Act1,
		C3.Plugins.Sprite.Cnds.IsMirrored,
		C3.ScriptsInEvents.FolhaDeEventosFase1_Event24_Act1,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.ToggleBoolInstanceVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{Mouse: 0},
	{gameOver: 0},
	{PlanoDeFundoEmBlocos: 0},
	{JogarNovamente: 0},
	{voltarMenu: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Fixar: 0},
	{Piscar: 0},
	{guerreiro: 0},
	{Sólido: 0},
	{piso: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{Plataforma: 0},
	{jogador: 0},
	{Teclado: 0},
	{colisaoAtaque: 0},
	{arrowKeys: 0},
	{spaceBar: 0},
	{obsAtaque: 0},
	{espinho: 0},
	{plataformaPedra: 0},
	{borda: 0},
	{vidas: 0},
	{action: 0},
	{inimigo1: 0},
	{morte: 0},
	{Platform: 0},
	{Esmaecer: 0},
	{Smoke2: 0},
	{Âncora: 0},
	{Vidas: 0},
	{HeartAnch: 0},
	{heartObj: 0},
	{Objetivo: 0},
	{vida: 0},
	{CampoDeVisão: 0},
	{Inimigo2: 0},
	{Projétil: 0},
	{DestruirForaDoLayout: 0},
	{stone: 0},
	{platColl: 0},
	{spikeCol: 0},
	{MovPlat: 0},
	{Senóide: 0},
	{movPlatCol: 0},
	{Sprite: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{Sprite2: 0},
	{bolhaGue: 0},
	{bolhaIni1: 0},
	{bolhaInvi2: 0},
	{Plat1: 0},
	{plat2: 0},
	{plat3: 0},
	{plat4: 0},
	{plat6: 0},
	{plat8: 0},
	{hit: 0},
	{Sprite8: 0},
	{Sprite7: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite3: 0},
	{stone2: 0},
	{I3: 0},
	{monnSpk: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Áudio: 0},
	{inimigo2img: 0},
	{inimigo1img: 0},
	{Sprite13: 0},
	{Objetivo2: 0},
	{Objetivo3: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{PlanoDeFundoEmBlocos7: 0},
	{PlanoDeFundoEmBlocos8: 0},
	{Sprite6: 0},
	{Sprite14: 0},
	{inimigo3: 0},
	{visao: 0},
	{Inimigos: 0},
	{machine: 0},
	{fase1: 0},
	{som: 0},
	{forcaPulo: 0}
];

self.InstanceType = {
	Mouse: class extends self.IInstance {},
	gameOver: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	JogarNovamente: class extends self.ISpriteInstance {},
	voltarMenu: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	guerreiro: class extends self.ISpriteInstance {},
	piso: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	colisaoAtaque: class extends self.ISpriteInstance {},
	arrowKeys: class extends self.ISpriteInstance {},
	spaceBar: class extends self.ISpriteInstance {},
	obsAtaque: class extends self.ISpriteInstance {},
	espinho: class extends self.ISpriteInstance {},
	plataformaPedra: class extends self.ISpriteInstance {},
	borda: class extends self.ISpriteInstance {},
	inimigo1: class extends self.ISpriteInstance {},
	morte: class extends self.ISpriteInstance {},
	Platform: class extends self.ISpriteInstance {},
	Smoke2: class extends self.ISpriteInstance {},
	Vidas: class extends self.ITextInstance {},
	HeartAnch: class extends self.ISpriteInstance {},
	heartObj: class extends self.ISpriteInstance {},
	Objetivo: class extends self.ITextInstance {},
	Inimigo2: class extends self.ISpriteInstance {},
	stone: class extends self.ISpriteInstance {},
	platColl: class extends self.ISpriteInstance {},
	spikeCol: class extends self.ISpriteInstance {},
	MovPlat: class extends self.ISpriteInstance {},
	movPlatCol: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	bolhaGue: class extends self.ISpriteInstance {},
	bolhaIni1: class extends self.ISpriteInstance {},
	bolhaInvi2: class extends self.ISpriteInstance {},
	Plat1: class extends self.ISpriteInstance {},
	plat2: class extends self.ISpriteInstance {},
	plat3: class extends self.ISpriteInstance {},
	plat4: class extends self.ISpriteInstance {},
	plat6: class extends self.ISpriteInstance {},
	plat8: class extends self.ISpriteInstance {},
	hit: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	stone2: class extends self.ISpriteInstance {},
	I3: class extends self.ISpriteInstance {},
	monnSpk: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	inimigo2img: class extends self.ISpriteInstance {},
	inimigo1img: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Objetivo2: class extends self.ITextInstance {},
	Objetivo3: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos7: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos8: class extends self.ITiledBackgroundInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	inimigo3: class extends self.ISpriteInstance {}
}