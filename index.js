import {GitHub} from './GitHub.js';
import {Ui} from './Ui.js';
import {debounce} from './debounce.js';

(() => {
    const github = new GitHub();
    const ui = new Ui();
    const readyState = document.readyState;

    if (readyState === 'interactive' || readyState === 'complete') {
        const searchUser = document.querySelector('.searchUser');

        const search = async (event) =>{
            const userName = event.target.value;

            if (userName.trim() !== '') {
                try {
                    const user = await github.getUser(userName);
                    const repositories = await github.getRepositories(userName);

                    ui.showProfile(user);
                    ui.showRepositories(repositories.slice(0,5));
                } catch (error) {
                    ui.clearProfile();
                    ui.clearRepositories();
                    ui.showAlert(error, 'danger');
                    setTimeout(() => {
                        ui.hideAlert()
                    }, 3000)
                }
            } else {
                ui.clearProfile();
                ui.clearRepositories();
            }
        }

        searchUser.addEventListener('keyup', debounce(search, 1000));
    }
})()
