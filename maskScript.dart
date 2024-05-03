
// @name         Email Masking
// @namespace    http://yourwebsite.com
// @version      0.1
// @description  Mask email addresses displayed on webpages to prevent them from being harvested by spammers.
// @author       Your Name
// @match        *://*/*
// @grant        none


(function() {
    'use strict';

    // Function to mask email addresses
    function maskEmails() {
        const emailElements = document.querySelectorAll('a[href^="mailto:"]');
        emailElements.forEach(element => {
            const email = element.getAttribute('href').replace('mailto:', '');
            const maskedEmail = mask(email);
            element.textContent = maskedEmail;
            element.setAttribute('href', 'mailto:' + email); // Update href to original email address
        });
    }

    // Function to mask an email address
    function mask(email) {
        const atIndex = email.indexOf('@');
        const username = email.slice(0, atIndex);
        const domain = email.slice(atIndex + 1);
        const maskedUsername = username.substring(0, 1) + '...' + username.substring(username.length - 1);
        return maskedUsername + '@' + domain;
    }

    // Apply email masking when the page loads
    window.addEventListener('load', maskEmails);
})();
