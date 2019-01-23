// UI Elements
const userSearchInput = document.getElementById('search-user');

// API
const github = new GithubApi();
//UI
const ui = new UI();

// Event listener
userSearchInput.addEventListener('keyup', event => {
    const searchText = event.target.value;

    if (searchText !== '') {
        github
            .getUser(searchText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert(`Profile with name ${searchText} not found`);
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);

                }
            });
    } else {
        // Clear profile
        ui.clearProfile();
        ui.clearRepos();
    }
});
