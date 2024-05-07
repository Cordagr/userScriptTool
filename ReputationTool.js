
// @name         IP Reputation Checker
// @namespace    http://yourwebsite.com
// @version      0.1
// @description  Check the reputation of an IP address using AbuseIPDB API.
// @author       Your Name
// @match        *://*/*
// @grant        GM_xmlhttpRequest


(function() {
    'use strict';

    // AbuseIPDB API endpoint
    const API_ENDPOINT = 'https://api.abuseipdb.com/api/v2/check';

    // Your AbuseIPDB API key
    const API_KEY = 'YOUR_API_KEY';

    // check IP reputation
    function checkIPReputation(ipAddress) {
        const url = `${API_ENDPOINT}?ipAddress=${ipAddress}`;
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            headers: {
                'Key': API_KEY,
                'Accept': 'application/json'
            },
            onload: function(response) {
                const data = JSON.parse(response.responseText);
                if (data && data.data) {
                    const reputation = data.data.abuseConfidenceScore;
                    console.log(`Reputation for ${ipAddress}: ${reputation}`);
                    // Perform actions based on reputation (e.g., block access)





                    
                } else {
                    console.error('Error fetching IP reputation data');
                }
            },
            onerror: function(error) {
                console.error('Error fetching IP reputation data:', error);
            }
        });
    }

    // Example usage: Check reputation of a specific IP address
    const ipAddressToCheck = '123.456.789.123';
    checkIPReputation(ipAddressToCheck);
})();

 // Add toolbar button
    const toolbarButton = document.createElement('button');
    toolbarButton.innerHTML = 'IP Reputation';
    toolbarButton.style.position = 'fixed';
    toolbarButton.style.top = '20px';
    toolbarButton.style.right = '20px';
    toolbarButton.style.zIndex = '9999';
    toolbarButton.addEventListener('click', function() {
        const ipAddress = prompt('Enter IP address:');
        if (ipAddress) {
            checkIPReputation(ipAddress);
        }
    });
    document.body.appendChild(toolbarButton);
})();


