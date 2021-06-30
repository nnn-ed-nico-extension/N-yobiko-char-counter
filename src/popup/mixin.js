export default {
	computed: {
		commitHash: () => process.env.VUE_APP_GIT_HASH,
		baseURL: () => process.env.VUE_APP_HOMEPAGE,
		manifest: () => browser.runtime.getManifest(),
		extName: () => browser.i18n.getMessage('extName'),
		extVersion() { return this.manifest.version },
		extID: () => browser.app.getDetails().id,
		gitBranch: () => process.env.VUE_APP_GIT_BRANCH,
		gitHash: () => process.env.VUE_APP_GIT_HASH
    }
}