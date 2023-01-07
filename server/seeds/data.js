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
    'KanyeSouth',
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

const types = [
    'assassin',
    'fighter',
    'martial artist',
    'elemental',
    'supernatural',
    'summoner',
    'shapeshifter',
]

const brands = [
    'rackstar',
    'bud strong',
    'bungo',
    'microhard',
    'nintendork',
    'laambourgenie',
    'notquik',
]

const images = [
    'https://i.kym-cdn.com/entries/icons/facebook/000/016/546/hidethepainharold.jpg',
    'https://thumbs.dreamstime.com/z/happy-old-grandpa-indoor-laughing-windows-home-background-happy-old-grandpa-indoor-laughing-174151932.jpg',
    'https://thumbs.dreamstime.com/b/do-not-make-your-grandmother-angry-grandma-can-respond-do-not-make-your-grandmother-angry-grandma-can-respond-comic-portrait-149179502.jpg',
    'https://media.istockphoto.com/id/526115005/photo/cool-grandma-showing-her-f-finger.jpg?s=1024x1024&w=is&k=20&c=3IMngl659vNve0qMFYjiBhP19ZO-K1RyLvB3hgaWn6M=',
    'https://www.shutterstock.com/image-photo/funny-grandmother-portraits-senior-old-260nw-1522642574.jpg',
    'https://media.istockphoto.com/id/1331914376/photo/portrait-of-healthy-happy-smile-senior-elderly-caucasian-old-arm-crossed-with-copy-space.jpg?s=612x612&w=0&k=20&c=ndo2T21ogJa0gH81UVNy5Pt77KvMDHMQPY_wG3SbQms='
]


const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const getRandomUser = () => `${testUser[genRandomIndex(testUser)]}`;

const getRandomWord = () => `${lorum[genRandomIndex(lorum)]}`;

const getRandomPost = (words) => {
    let post = '';
    for (let i = 0; i < words; i++) {
        post += `${getRandomWord()} `;
    }
    return post;
}

const getRandomCharacter = () => `${heroes[genRandomIndex(heroes)]}`;

const getRandomType = () => `${types[genRandomIndex(types)]}`;

const getRandomBrand = () => `${brands[genRandomIndex(brands)]}`;

const getRandomImage = () => `${images[genRandomIndex(images)]}`;

module.exports = {
    getRandomUser,
    getRandomPost,
    getRandomCharacter,
    getRandomType,
    getRandomBrand,
    getRandomImage,
    genRandomIndex
}