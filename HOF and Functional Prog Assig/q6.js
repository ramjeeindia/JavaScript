// 6. LinkedIn Profile URL Validator.
// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.

// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs that do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.

const isValidURL = (url) => {
    const regex = new RegExp(
      /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/
    );
  
    return regex.test(url)
      ? 'Linkedin URL is valid'
      : 'Linkedin URL is not valid';
  };
  
  // test-case
  
  [
    'https://www.linkedin.com/in/ramjee-india',
    'https://www.linkedin.com/in/hello',
  ].map((url) => {
    console.log(isValidURL(url));
  });