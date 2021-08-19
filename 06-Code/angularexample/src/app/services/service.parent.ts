export class ServiceParent {
    private URI: string = "http://localhost:3000";

    constructor(){}

    getURI() {
        return this.URI
    }

    extendsURI(extended: string) {
        this.URI = `${this.URI}${extended}`
    }
}