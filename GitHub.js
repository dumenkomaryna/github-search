export class GitHub {
    constructor() {
        this.clientId = "71c6c24e68ed678377b7";
        this.clientSecret = "521d595a7bdfd8344da46fef88a7244b4eb4c021";
    }

    async getUser(userName){
        const data = await fetch(`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        if (!data.ok) {
            throw new Error("User not found");
        }

        return await data.json();
    }

    async getRepositories(userName) {
        const data = await fetch(`https://api.github.com/users/${userName}/repos?&sort=created:asc&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

        if (!data.ok) {
            throw new Error("Repositories not found");
        }

        return await data.json();
    }
}