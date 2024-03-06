let TvApi = require("./app")

async function test() {
	let tvApi = new TvApi("192.168.1.20", "8080", "464855")

	// tvApi.setDebugMode(true)

	try {
		await tvApi.authenticate()

		let volume = await tvApi.queryData(TvApi.TV_INFO_VOLUME)
		console.log("volume:");
		console.log(volume[0].level[0])

		//let muteResult = await tvApi.processCommand(TvApi.TV_CMD_MUTE_TOGGLE)
		//console.log(muteResult)

		let powerResult = await tvApi.processCommand(TvApi.TV_CMD_POWER)
		console.log(powerResult)


		// let channelList = await tvApi.queryData(tvApi.TV_INFO_CHANNEL_LIST)
		// console.log(channelList)

		// let changeChannelResult = await tvApi.processCommand(tvApi.TV_CMD_CHANGE_CHANNEL, channelList[5])
		// console.log(changeChannelResult)

		// let stream = await tvApi.takeScreenShot()
		// stream.pipe(require("fs").createWriteStream("screen.jpg"))
	} catch (err) {
		console.error(err)
	}
}

test()