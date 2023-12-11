chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        let queryOptions = { active: true, currentWindow: true };
        let tabs = await chrome.tabs.query(queryOptions);
        chrome.scripting.executeScript({
            target: {
                tabId: tab.id,
                allFrames: true
            }
        })
    }
})