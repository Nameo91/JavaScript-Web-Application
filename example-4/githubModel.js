class GithubModel {
  constructor() {
    this.repoInfo = null
  }

  setRepoInfo(repoInfo) {
    this.repoInfo = repoInfo;
  }

  getRepoInfo() {
    return this.repoInfo;
  }
}

module.exports = GithubModel;


// So far, the code only prints the repository data to the console. 
//Add code to the GithubView class so that it also calls the display method.

// Update the display method so that it will:

// Set the content of the #repo-name element to equal the value of the full_name property from the repo data.
// Set the content of the #repo-description element to equal the value of the description property from the repo data.
// We also want to display the repo's profile picture:

// Add a new element <img> on the page, and add JS code so that it displays the image (the image URL can be found under the property organization.avatar_url). 
// You'll have to research how we can dynamically set the HTML image's source URL with JavaScript.