class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;
      
      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  display(repoData) {
    const repoNameEl = document.querySelector('#repo-name');
    repoNameEl.textContent = repoData.full_name;
    document.querySelector('#repo-name-input').value = '';

    const repoDesEl = document.querySelector('#repo-description');
    repoDesEl.textContent = repoData.description;

    const img = document.getElementById('repo-img');
    img.src = repoData.organization.avatar_url;
    img.style = "display: "
  }
}

module.exports = GithubView;