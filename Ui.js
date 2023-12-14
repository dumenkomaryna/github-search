export class Ui {
    constructor() {
        this.profile = document.querySelector('.profile');
        this.repositoriesContainer = document.querySelector('.repositories');
        this.alertsContainer = document.querySelector(".alert-container")
    }

    showProfile(user) {
        this.profile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}" alt="avatar">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      `;
    }

    showRepositories(repositories) {
        this.repositoriesContainer.innerHTML = `<h3 class="page-heading mb-3">Latest Repos</h3>`;
        repositories.forEach((repo) => {
            console.log(repo);
            const div = document.createElement("div");
            div.classList.add('card', 'card-body', 'mb-3');
            div.innerHTML = `<div class="row">
              <div class="col-md-8">
                <a href="${repo.html_url}" target="_blank" class="card-link">${repo.name}</a><span class="badge badge-info ml-2">${repo.private ? "Private": "Public"}</span>
                <div>
                    <span class="badge badge-secondary">${repo.language}</span><span class="badge badge-secondary ml-2">${repo.updated_at}</span>
                </div>
              </div>
              <div class="col-md-4">
                <span class="badge badge-info">Stars: ${repo.stargazers_count}</span>
              </div>
            </div>`;

            this.repositoriesContainer.appendChild(div);
        })
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    clearRepositories() {
        this.repositoriesContainer.innerHTML = '';
    }

    showAlert(text, classMods) {
        this.alertsContainer.innerHTML = `<div class="alert alert-${classMods}">
                ${text}
            </div>`;
    }

    hideAlert() {
        this.alertsContainer.innerHTML = '';
    }
}
