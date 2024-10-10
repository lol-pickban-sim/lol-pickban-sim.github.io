document.addEventListener("DOMContentLoaded", () => {

window.scrollTo(1, 0);
let currentHeroIndex = 0;

const heroes = [
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
    { name: 'Aatrox', categories: ['top'],smlimg: 'src/aatrox2.png', splash:'src/aatrox.webp',selected:false },
];

let heroOrder;
if(screen.width<=820){
    heroOrder = [
        10, 15, 11, 16, 12, 17, 5, 5, 6, 6, 7, 7, 18, 13, 19, 14, 8, 8, 9, 9
    ];
}
else{
    heroOrder = [
        0, 5, 1, 6, 2, 7, 0, 0, 1, 1, 2, 2, 8, 3, 9, 4, 3, 3, 4, 4
    ];
}

const heroGrid = document.querySelector('.hero-grid');
const categories = document.querySelectorAll('.hero-categories button');
let banSlots = document.querySelectorAll('.small-div');
let pickSlots1 = document.querySelectorAll('.large-div2');
let pickSlots2 = document.querySelectorAll('.large-div');
let selectedHero = null;

const searchInput = document.getElementById('search');
const searchInput2 = document.getElementById('search2');
let blueTeamIndicator;
let redTeamIndicator;
if(screen.width<=820){
    blueTeamIndicator = document.getElementById('blueTeamIndicator');
    redTeamIndicator = document.getElementById('redTeamIndicator');
}
else{
    blueTeamIndicator = document.getElementById('blueTeamIndicator2');
    redTeamIndicator = document.getElementById('redTeamIndicator2');
}

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    filterHeroes(query);
});

const loadHeroes = (category) => {
     const heroesToDisplay = category === 'all' ? heroes : heroes.filter(hero => hero.categories.includes(category));
     displayHeroes(heroesToDisplay);
};

const filterHeroes = (query) => {
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(query));
    displayHeroes(filteredHeroes);
};

const displayHeroes = (heroesToDisplay) => {
    heroGrid.innerHTML = '';
    heroesToDisplay.forEach(hero => {
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');
        heroDiv.dataset.hero = hero.name;
        heroDiv.dataset.categories = hero.categories.join(',');
        if (hero.selected === true) {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.smlimg}" alt="${hero.name}" style="-webkit-filter: grayscale(1);">`;
        } else {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.smlimg}" alt="${hero.name}" style="cursor: pointer;">`;
            heroDiv.addEventListener('mouseover', () =>{
                if(inDraft){
                    let targetDiv;
                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        return;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "url('" + hero.splash + "')";
                        targetDiv.style.backgroundSize = "cover";
                        targetDiv.style.backgroundPosition = "top";
                        targetDiv.style.backgroundRepeat = "no-repeat";
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "url('" + hero.splash + "')";
                        targetDiv.style.backgroundSize = "cover";
                        targetDiv.style.backgroundPosition = "top";
                        targetDiv.style.backgroundRepeat = "no-repeat";
                    }
                }
            });
            heroDiv.addEventListener('mouseout', () =>{
                if(inDraft){
                    let targetDiv;
                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        return;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = ``;
                        targetDiv.style.backgroundImage = "";
                    }
                }
            });
            heroDiv.addEventListener('click', () => {
                selectedHero = hero;
                if(inDraft){
                    let targetDiv;
                    startTimer();
                    if(currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 6 ||  currentHeroIndex == 7 ||currentHeroIndex == 10 || currentHeroIndex == 11 || currentHeroIndex == 13 || currentHeroIndex == 15|| currentHeroIndex == 18){
                        blueTeamIndicator.style.visibility = 'hidden';
                        redTeamIndicator.style.visibility = 'visible';
                    }
                    else{
                        blueTeamIndicator.style.visibility = 'visible';
                        redTeamIndicator.style.visibility = 'hidden';
                    }

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-red-small');
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-blue-small');
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            targetDiv.classList.add('glow-blue');
                        }
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            targetDiv.classList.add('glow-red');
                        }
                    }

                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                                                <div class="ban-indicator"></div>`;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}"><div class="gradient-overlay"></div><div class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</div>`;
                        resetDivs(0);
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}"><div class="gradient-overlay"></div><div class="pick-slot-text">${selectedHero.name}</div>`;
                        resetDivs(1);
                    }
                    targetDiv.classList.remove('glow-blue');
                    targetDiv.classList.remove('glow-red');
                    targetDiv.classList.remove('glow-blue-small');
                    targetDiv.classList.remove('glow-red-small');
                    targetDiv.dataset.hero = selectedHero.name;

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            expandDiv(targetDiv,0);
                        }
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            expandDiv(targetDiv,1);
                        }
                    }
                
                disableHeroInGrid(selectedHero);
                currentHeroIndex++;
                if (currentHeroIndex >= heroOrder.length){ 
                    hideTimer();
                    inDraft = false;
                    redTeamIndicator.style.visibility = 'hidden';
                    blueTeamIndicator.style.visibility = 'hidden';
                    disableDraftMode();
                    return;
                }
            }
            });
            
        }
        heroGrid.appendChild(heroDiv);
    });
};


loadHeroes('all');
globalCat = 'all';


categories.forEach(button => {
    button.addEventListener('click', () => {
        loadHeroes(button.dataset.category);
        globalCat = button.dataset.category;
    });
});

banSlots.forEach(slot => {
    const banSlotClickListener = () => {
        if (selectedHero) {
            slot.innerHTML = `
                <img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                <div class="ban-indicator"></div>
                <span class="remove-sml">✕</span>
            `;
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', banSlotClickListener); 
            });
            disableHeroInGrid(selectedHero);
            slot.removeEventListener('click', banSlotClickListener); 
        }
    }
    slot.addEventListener('click', banSlotClickListener);
});

function expandDiv(element, team) {
    let allDivs;
    if(team == 1){
        allDivs = document.querySelectorAll('.large-div');
    }
    else{
        allDivs = document.querySelectorAll('.large-div2');
    }
    allDivs.forEach(div => {
        if(div != element){
        const pickSlotText = div.querySelector('.pick-slot-text');
        setTimeout(() => {
            div.style.height = '15.5vh';
        }, 2000);
        }
    });
    const pickSlotText = element.querySelector('.pick-slot-text');

    setTimeout(() => {
        element.style.height = '28vh';
    }, 2000);
    
}
function resetDivs(team) {
    let allDivs
    if(team == 1)
        allDivs = document.querySelectorAll('.large-div');
    else
        allDivs = document.querySelectorAll('.large-div2');

    allDivs.forEach(div => {
        const pickSlotText = div.querySelector('.pick-slot-text');
        setTimeout(() => {
            div.style.height = '18vh';
        }, 2000);
        
    });
}

pickSlots1.forEach(slot => {
    const slotClickListener = () => {
        if (selectedHero) {
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                <div class="gradient-overlay"></div>
                <span class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</span>
                <span class="remove">✕</span>`;
            var img = slot.querySelector('img');
            img.onload = function() {
                img.classList.add('animate');
            };
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);

                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); 
            });
            disableHeroInGrid(selectedHero);

            slot.removeEventListener('click', slotClickListener); 
        }
    };

    slot.addEventListener('click', slotClickListener);
})

pickSlots2.forEach(slot => {
    const slotClickListener = () => {
        if (selectedHero) {
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                <div class="gradient-overlay"></div>
                <span class="pick-slot-text">${selectedHero.name}</span>
                <span class="remove">✕</span>`;
            var img = slot.querySelector('img');
            img.onload = function() {
                img.classList.add('animate');
            };
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);

                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); // Re-attach the click listener
            });
            disableHeroInGrid(selectedHero);

            slot.removeEventListener('click', slotClickListener); // Remove the click listener
        }
    };

    slot.addEventListener('click', slotClickListener);
});


const disableHeroInGrid = (heroName) => {
    heroName.selected = true;
    selectedHero=null;
    loadHeroes(globalCat);
};

const enableHeroInGrid = (heroName) => {
    const foundHero = heroes.find(hero => hero.name === heroName);
    foundHero.selected = false;
    loadHeroes(globalCat);
};



let inDraft = false;
const draftButton = document.getElementById('draft-button');
const icon = document.getElementById('icon');

const draftModeEnableClick = () => {
    enableDraftMode();
}

draftButton.addEventListener('click', draftModeEnableClick);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        disableDraftMode();
    }
});


function disableDraftMode() {
    hideTimer();
    pickSlots2 = document.querySelectorAll('.large-div');
    pickSlots1 = document.querySelectorAll('.large-div2');
    banSlots = document.querySelectorAll('.small-div');
    inDraft = false;

    pickSlots2.forEach(slot => {
        const slotClickListener = () => {
            if (selectedHero) {
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                    <div class="gradient-overlay"></div>
                    <span class="pick-slot-text">${selectedHero.name}</span>
                    <span class="remove">✕</span>`;
                var img = slot.querySelector('img');
                img.onload = function() {
                    img.classList.add('animate');
                };
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', slotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', slotClickListener); 
            }
        };
        
        if (slot.dataset.hero != null) {
            var span = document.createElement('span');
            span.className = 'remove';
            span.innerHTML = '✕';
            slot.appendChild(span);
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); 
            });
        }
        else {
            slot.addEventListener('click', slotClickListener); 
        }

        slot.classList.remove('glow-red');
    });

    pickSlots1.forEach(slot => {
        const slotClickListener = () => {
            if (selectedHero) {
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                    <span class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</span>
                    <div class="gradient-overlay"></div>
                    <span class="remove">✕</span>`;
                var img = slot.querySelector('img');
                img.onload = function() {
                    img.classList.add('animate');
                };
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', slotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', slotClickListener); 
            }
        };
        
        if (slot.dataset.hero != null) {
            var span = document.createElement('span');
            span.className = 'remove';
            span.innerHTML = '✕';
            slot.appendChild(span);
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); // Re-attach the click listener
            });
        }
        else {
            slot.addEventListener('click', slotClickListener); 
        }
        slot.classList.remove('glow-blue');
    });

    banSlots.forEach(slot => {
        const banSlotClickListener = () => {
            if (selectedHero) {
                slot.innerHTML = `
                    <img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                    <div class="ban-indicator"></div>
                    <span class="remove-sml">✕</span>
                `;
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', banSlotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', banSlotClickListener); 
            }
        };

        if (slot.dataset.hero != null) {
            const foundHero = heroes.find(hero => hero.name === slot.dataset.hero);
            slot.innerHTML = ``;
            slot.innerHTML = `
                <img title="${foundHero.name}" src="${foundHero.smlimg}" alt="${foundHero.name}">
                <div class="ban-indicator"></div>
                <span class="remove-sml">✕</span>
            `;
            slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', banSlotClickListener); 
            });
        }
        else {
            slot.addEventListener('click', banSlotClickListener); 
        }
        slot.classList.remove('glow-blue-small');
        slot.classList.remove('glow-red-small');
        redTeamIndicator.style.visibility = 'hidden';
        blueTeamIndicator.style.visibility = 'hidden';
    });
}
function enableDraftMode() {
    currentHeroIndex = 0;
    const largeDivs = document.querySelectorAll('.large-div');
    const largeDiv2s = document.querySelectorAll('.large-div2');
    const smallDivs = document.querySelectorAll('.small-div');

    largeDivs.forEach(div => div.innerHTML = '');
    largeDiv2s.forEach(div => div.innerHTML = '');
    smallDivs.forEach(div => div.innerHTML = '');

    largeDivs.forEach(div => div.removeAttribute('data-hero'));
    largeDiv2s.forEach(div => div.removeAttribute('data-hero'));
    smallDivs.forEach(div => div.removeAttribute('data-hero'));
    if(screen.width<=820)
        smallDivs[10].classList.add('glow-blue-small');
    else
        smallDivs[0].classList.add('glow-blue-small');

    banSlots.forEach(slot => slot.replaceWith(slot.cloneNode(true)));
    pickSlots1.forEach(slot => slot.replaceWith(slot.cloneNode(true)));
    pickSlots2.forEach(slot => slot.replaceWith(slot.cloneNode(true)));

    heroes.forEach(hero => {
        hero.selected = false;
    });

    loadHeroes(globalCat);

    inDraft = true;
    draftButton.style.visibility = 'hidden';

    blueTeamIndicator.style.visibility = 'visible';
    redTeamIndicator.style.visibility = 'hidden';
    timerContainer.style.visibility = 'visible';
    if(countdownText)
        countdownText.style.visibility = 'visible'; 
    startTimer(); 
}
    
let countdownBar;
let timerContainer;
let countdownText = null;

    countdownBar = document.getElementById('countdown-bar2');
    timerContainer = document.getElementById('timer-container2');
    countdownText = document.getElementById('countdown-text');

let totalTime = 30; 
let currentTime = totalTime;
const updateInterval = 10; 
const initialWidth = 100; 
let timerInterval;

function updateCountdown(callback) {
    if (currentTime <= 0) {
        clearInterval(timerInterval);
        currentTime = 0;
        countdownBar.style.width = '0%'; 
        if(countdownText)
            countdownText.textContent = '0'; 
        if(callback){
            callback();
        }
    }

    currentTime -= updateInterval / 1000; 
    let widthPercentage = (currentTime / totalTime) * initialWidth;
    countdownBar.style.width = widthPercentage + '%';
    if(countdownText)
        countdownText.textContent = Math.ceil(currentTime); 
}

function startTimer() {
    let targetDiv;
    defaultCallback = () => {
        console.log(1)
        if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 13) {
            blueTeamIndicator.style.visibility = 'hidden';
            redTeamIndicator.style.visibility = 'visible';
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-red-small');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12 || currentHeroIndex == 14) {
            blueTeamIndicator.style.visibility = 'visible';
            redTeamIndicator.style.visibility = 'hidden';
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-blue-small');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 5) {
            blueTeamIndicator.style.visibility = 'visible';
            redTeamIndicator.style.visibility = 'hidden';
            targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-blue');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 15) {
            blueTeamIndicator.style.visibility = 'hidden';
            redTeamIndicator.style.visibility = 'visible';
            targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-red');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } 
    };
    currentTime = totalTime;
    countdownBar.style.width = initialWidth + '%'; 
    if(countdownText)
        countdownText.textContent = totalTime; 
    clearInterval(timerInterval); 
    timerInterval = setInterval(() => updateCountdown(defaultCallback), updateInterval); 
}

function hideTimer(){
    timerContainer.style.visibility = 'hidden';
    if(countdownText)
        countdownText.style.visibility = 'hidden'; 
    clearInterval(timerInterval);
    draftButton.style.visibility= 'visible';
    if(screen.width>820){
        resetDivs(1);
        resetDivs(0);
    }
}
});