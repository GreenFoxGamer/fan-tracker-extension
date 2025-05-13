const airtableApiUrl = "https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME";
const airtableApiKey = "YOUR_API_KEY";

async function fetchData() {
  const response = await fetch(airtableApiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${airtableApiKey}`,
      "Content-Type": "application/json"
    }
  });
  
  const data = await response.json();
  return data;
}

chrome.runtime.onInstalled.addListener(() => {
  console.log("Airtable Chrome Extension Installed!");
});

chrome.action.onClicked.addListener(async (tab) => {
  const data = await fetchData();
  console.log(data);
});
