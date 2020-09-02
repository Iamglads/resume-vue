const app = new Vue({
    el: '#app',
    data: {
        personne: {
            nom: 'Aristoverne',
            prenom: 'Gladston',
            metier: 'Développeur web freelance',
            telephone: '0768 000000',
            website: 'www.glad-ston.fr',
        },
        
        media:[
            {linkedin: 'https://www.linkedin.com/in/gladston-developpeur-web/'},
            {github: 'https://github.com/Iamglads'}
        ],

        formation: [
            {
                date: '2019 - 2020',
                ville: 'Paris',
                ecole: 'OPENCLASSROOMS',
                parcours: 'Développeur web',
                text: "J'ai suivi le parcours de développeur web junior. J'ai développé mes compétences en intégration et en programmation web. Je me perfectionne en Javascript et son Framework Vue"
            },
            {
                date: '2019 - 2020',
                ville: 'Paris',
                ecole: 'OPENCLASSROOMS',
                parcours: 'Développeur web',
                text: "J'ai suivi le parcours de développeur web junior. J'ai développé mes compétences en intégration et en programmation web. Je me perfectionne en Javascript et son Framework Vue"
            },
            {
                date: '2019 - 2020',
                ville: 'Paris',
                ecole: 'OPENCLASSROOMS',
                parcours: 'Développeur web',
                text: "J'ai suivi le parcours de développeur web junior. J'ai développé mes compétences en intégration et en programmation web. Je me perfectionne en Javascript et son Framework Vue"
            }
        ],

        experience: [
            {
                date: '2019 - 2020',
                ville: 'Guadelopue',
                metier: 'DEVELOPPEUR WEB - WEB MOBILE',
                status: 'Freelence',
                text: "Je développe des sites web ou des fonctionnalités pour des agences web en Guadeloupe"
            },
            {
                date: '2019 - 2020',
                ville: 'Guadelopue',
                metier: 'DEVELOPPEUR WEB - WEB MOBILE',
                status: 'Freelence',
                text: "Je développe des sites web ou des fonctionnalités pour des agences web en Guadeloupe"
            },
            {
                date: '2019 - 2020',
                ville: 'Guadelopue',
                metier: 'DEVELOPPEUR WEB - WEB MOBILE',
                status: 'Freelence',
                text: "Je développe des sites web ou des fonctionnalités pour des agences web en Guadeloupe"
            }
        ]
    }
})