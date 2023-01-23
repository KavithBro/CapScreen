/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
module.exports = {
	appId: 'icon.icoScreen Recorder.cf',
	productName: 'CapScreen',
	asar: true,
	copyright: '© 2022 CapScreen <3 Kavith',
	directories: { buildResources: 'build', output: 'release/${version}' },
	files: ['dist'],
	win: { target: [{ arch: ['x64'], target: 'nsis' }] },
	nsis: {
		allowToChangeInstallationDirectory: true,
		artifactName: '${productName}-Setup.${ext}',
		createDesktopShortcut: true,
		createStartMenuShortcut: true,
		deleteAppDataOnUninstall: false,
		oneClick: false,
		perMachine: false,
		runAfterFinish: true,
		uninstallDisplayName: '${productName}',
		installerHeaderIcon: 'build/installerHeader.bmp',
		installerSidebar: 'build/installerSidebar.bmp',
		
	},
	mac: {
		category: 'public.app-category.utilities',
		electronLanguages: ['en'],
		extendInfo: {
			'Bundle name': '${productName}',
			'com.apple.application-identifier': 'paxanddos.github.io',
			'com.apple.developer.team-identifier': 'paxanddos',
			ElectronTeamID: 'paxanddos',
			LSHasLocalizedDisplayName: true,
		},
		identity: 'PAXANDDOS Individual Co.',
		target: ['dmg'],
	},
	dmg: {
		artifactName: '${productName}-Installer.${ext}',
		sign: false,
		title: '${productName} ${version}',
	},
	linux: { category: 'Utility', target: ['AppImage'] },
	appImage: { artifactName: '${productName}-Installer.${ext}' },
}
