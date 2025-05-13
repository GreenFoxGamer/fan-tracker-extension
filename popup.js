document.addEventListener("DOMContentLoaded", async () => {
  const dataContainer = document.getElementById("data-container");
  
  // Fetch Airtable data from the background script
  chrome.runtime.sendMessage({ action: "fetchData" }, (response) => {
    if (response && response.records) {
      response.records.forEach((record) => {
        const div = document.createElement("div");
        div.className = "item";
        div.textContent = `Record ID: ${record.id} - Field Value: ${record.fields.YOUR_FIELD_NAME}`;
        dataContainer.appendChild(div);
      });
    } else {
      dataContainer.textContent = "No data found.";
    }
  });
});
