export class ResponseItem {
	/**
	 * @param {string} title
	 * @param {string} subtitle
	 * @param {{
	 * 	method: 'Flow.Launcher.ChangeQuery' | 'Flow.Launcher.RestartApp' | 'Flow.Launcher.SaveAppAllSettings' | 'Flow.Launcher.CheckForNewUpdate' | 'Flow.Launcher.ShellRun' | 'Flow.Launcher.CloseApp' | 'Flow.Launcher.HideApp' | 'Flow.Launcher.ShowApp' | 'Flow.Launcher.ShowMsg' | 'Flow.Launcher.GetTranslation' | 'Flow.Launcher.OpenSettingDialog' | 'Flow.Launcher.GetAllPlugins' | 'Flow.Launcher.StartLoadingBar' | 'Flow.Launcher.StopLoadingBar' | 'Flow.Launcher.ReloadAllPluginData',
	 *  parameters: string[],
	 *  dontHideAfterAction: boolean
	 * }} JsonRPCAction
	 * @param {string} IcoPath
	 */
	constructor(title, subtitle, JsonRPCAction, IcoPath) {
		this.title = title
		this.subtitle = subtitle
		this.JsonRPCAction = JsonRPCAction
		this.IcoPath = IcoPath
	}
}


export class Response {
	/**
	 * @param {ResponseItem | ResponseItem[] | string} result
	 */
	constructor(result) {
		if (Array.isArray(result)) {
			this.result = result
		} else if (result instanceof ResponseItem) {
			this.result = [result]
		} else if (typeof result === 'string') {
			this.result = new ResponseItem(result)
		} else {
			this.result = []
		}
	}
}

export const defaultRespondFunction = (message) => console.log(JSON.stringify(message))