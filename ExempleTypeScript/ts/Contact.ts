/**
 * Contact
 */
class Contact {
    
    private prenom: string;
    
    /**
     * Création d'un contact
     * @param {string} prenom Le prénom du contact
     */
    constructor(prenom: string) {
        this.prenom = prenom;
    }
    
    /**
     * Affiche bonjour le prénom saisi
     * @return {string} Le message
     */
    hello() : string {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

export default Contact;