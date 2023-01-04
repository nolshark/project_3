const testUser = [
    'Mat123',
    'Nolen420',
    'Mo666',
    'Chris69',
    'BirchS2',
    'OakTreeMan',
    'MisterCheeks',
    'TheCoolestAccount',
    'RandomUserNameEpic',
    'WEOUTHERE',
    'KanyeSouth'
];

const lorum = [
    'lorem',
    'imsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'curabitur',
    'vel',
    'hendrerit',
    'libero',
    'eleifend',
    'blandit',
    'nunc',
    'ornare',
    'odio',
    'ut',
    'orci',
    'gravida',
    'imperdiet',
    'nullam',
    'purus',
    'lacinia',
    'a',
    'pretium',
    'quis',
];

const heroes = [
    'hero-guy',
    'hero-girl',
    'the super strong person',
    'overpowered god',
    'useless piece of trash',
    'anime protag',
    'villain man',
]

const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomUser = () => `${testUser[genRandomIndex(testUser)]}`;

const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const getRandomPost = (words) => {
    let post = '';
    for (let i = 0; i < words; i++) {
        post += `${getRandomWord()}`;
    }
    return post;
}

const getRandomCharacter = () => `${heroes[genRandomIndex(heroes)]}`;

module.exports = {
    getRandomUser,
    getRandomPost,
    getRandomCharacter,
    genRandomIndex
}