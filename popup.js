document.getElementById("downloadBtn").addEventListener("click", onDownloadButtonClick);

async function onDownloadButtonClick() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const tab = tabs[0];
  
  if (tab && tab.id) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: modifyIframeSrc
    });
  }
}

// This function is injected into the current tab
function modifyIframeSrc() {
  const iframe = document.getElementsByTagName("iframe")[0];
  if (iframe && iframe.src) {
    const url = new URL(iframe.src);
    iframe.src = url.origin + url.pathname + "?xythos-download=true";
  } else {
    alert("No iframe found on the page.");
  }
}
