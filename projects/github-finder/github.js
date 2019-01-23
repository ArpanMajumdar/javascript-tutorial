class GithubApi {
    constructor() {
        this.clientId = '17d68e83f64181e393a5';
        this.clientSecret = '62e0a662648784825e4fe24b9de948be80dcf062';
        this.repos_count = 10;
        this.repos_sort_by = 'updated :desc'
    }

    async getUser(username) {
        const getUserUrl = `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`;

        const getReposUrl = `https://api.github.com/users/${username}/repos?client_id=${this.clientId}&client_secret=${this.clientSecret}&per_page=${this.repos_count}&sort=${this.repos_sort_by}`;

        const profileResponse = await fetch(getUserUrl);
        const profile = await profileResponse.json();

        const repoResponse = await fetch(getReposUrl);
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        };
    }
}