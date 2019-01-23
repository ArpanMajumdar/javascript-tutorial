class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.repoList = document.getElementById('repos');

        console.log(this.repoList);
    }

    showProfile(user) {

        this.profile.innerHTML = `
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                <img class="img-fluid" src="${user.avatar_url}" alt="">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mt-3">View profile</a>
            </div>
            <div class="col-md-9">
                <span class="badge badge-pill badge-primary p-3">Public repos ${user.public_repos}</span>
                <span class="badge badge-pill badge-warning p-3">Public gists ${user.public_gists}</span>
                <span class="badge badge-pill badge-success p-3">Followers ${user.followers}</span>
                <span class="badge badge-pill badge-info p-3">Following ${user.following}</span>

                <table class="table table-hover mt-3">
                    <tbody>
                        <tr>
                            <th scope="row">Company</th>
                            <td>${user.company}</td>
                        </tr>
                        <tr>
                            <th scope="row">Website/Blog</th>
                            <td>${user.blog}</td>
                        </tr>
                        <tr>
                            <th scope="row">Location</th>
                            <td>${user.location}</td>
                        </tr>
                        <tr>
                            <th scope="row">Member since</th>
                            <td>${new Date(user.created_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    showAlert(message) {
        this.clearAlert();
        const div = document.createElement('div');
        div.className = 'alert alert-danger'
        div.appendChild(document.createTextNode(message));

        const searchContainer = document.querySelector('.searchContainer');
        const searchInput = document.querySelector('.searchInput');

        searchContainer.insertBefore(div, searchInput);

        setTimeout(() => {
            this.clearAlert();
        }, 1000);
    }

    clearAlert() {
        const alert = document.querySelector('.alert');

        if (alert !== null) {
            alert.remove();
        }
    }

    showRepos(repos) {
        let lis = '';

        repos.forEach(repo => {
            lis += `
        <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-2">
                        <span class="badge badge-success badge-pill p-2">Stars ${repo.stargazers_count
                }</span>
                    </div>
                    <div class="col-md-2">
                        <span class="badge badge-warning badge-pill p-2">Watchers ${repo.watchers_count}</span>
                    </div>
                    <div class="col-md-2">
                        <span class="badge badge-danger badge-pill p-2">Forks ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
        `;
        })
        this.repoList.innerHTML = lis;
    }

    clearRepos() {
        this.repoList.innerHTML = '';
    }
}