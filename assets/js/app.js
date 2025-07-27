const jpg = function() // jpg
{
    const jpg_wrapper = document.getElementsByClassName("jpg-wrapper")[0];
    const ul = document.createElement("ul");

    const jpgs = [
        {
            id: 1,
            name: "a cool jpg",
            type: "jpg",
            url: "assets/images/jpg/space.jpg",
        },
        {
            id: 2,
            name: "a cool jpg2",
            type: "jpg",
            url: "assets/images/jpg/drink.jpg",
        },
        {
            id: 3,
            name: "a cool jpg3",
            type: "jpg",
            url: "assets/images/jpg/draw.jpg",
        },
        {
            id: 4,
            name: "a cool jpg4",
            type: "jpg",
            url: "assets/images/jpg/water.jpg",
        },
        {
            id: 5,
            name: "a cool jpg5",
            type: "jpg",
            url: "assets/images/jpg/mystic.jpg",
        },
        {
            id: 6,
            name: "a cool jpg6",
            type: "jpg",
            url: "assets/images/jpg/pets.jpg",
        },
    ];
    
    imageLoader(jpgs, ul);
    
    return jpg_wrapper.append(ul);
}

const png = function() // png
{
    const png_wrapper = document.getElementsByClassName("png-wrapper")[0];
    const ul = document.createElement("ul");

    const pngs = [
        {
            id: 1,
            name: "dog food",
            type: "png",
            url: "assets/images/png/dogfood.png",
        },
        {
            id: 2,
            name: "dog food two",
            type: "png",
            url: "assets/images/png/dogfood2.png",
        },
        {
            id: 3,
            name: "dog food three",
            type: "png",
            url: "assets/images/png/dogfood3.png",
        },
        {
            id: 4,
            name: "lady",
            type: "png",
            url: "assets/images/png/lady.png",
        },
        {
            id: 5,
            name: "lady two",
            type: "png",
            url: "assets/images/png/lady2.png",
        },
        {
            id: 6,
            name: "doggy two",
            type: "png",
            url: "assets/images/png/doggy2.png",
        },
        {
            id: 7,
            name: "doggy three",
            type: "png",
            url: "assets/images/png/doggy3.png",
        },
        {
            id: 8,
            name: "doggy four",
            type: "png",
            url: "assets/images/png/doggy4.png",
        },
        {
            id: 9,
            name: "doggy five",
            type: "png",
            url: "assets/images/png/doggy5.png",
        },
        {
            id: 10,
            name: "doggy six",
            type: "png",
            url: "assets/images/png/doggy6.png",
        },
        {
            id: 11,
            name: "avatar",
            type: "png",
            url: "assets/images/png/avatar.png",
        },
        {
            id: 12,
            name: "avatar two",
            type: "png",
            url: "assets/images/png/avatar2.png",
        },
        {
            id: 13,
            name: "avatar three",
            type: "png",
            url: "assets/images/png/avatar3.png",
        },
        {
            id: 14,
            name: "happy dog",
            type: "png",
            url: "assets/images/png/happydog.png",
        },
        {
            id: 15,
            name: "model dog",
            type: "png",
            url: "assets/images/png/model.png",
        },
        {
            id: 16,
            name: "three dogs",
            type: "png",
            url: "assets/images/png/threedogs.png",
        },
    ];
    
    imageLoader(pngs, ul);
    
    return png_wrapper.append(ul);
}

const webp = function() // webp
{
    const webp_wrapper = document.getElementsByClassName("webp-wrapper")[0];
    const ul = document.createElement("ul");

    const webps = [
        {
            id: 1,
            name: "a cool webp",
            type: "webp",
            url: "assets/images/webp/splash.webp",
        },
        {
            id: 2,
            name: "a cool webp2",
            type: "webp",
            url: "assets/images/webp/art.webp",
        },
        {
            id: 3,
            name: "a cool webp3",
            type: "webp",
            url: "assets/images/webp/anime.webp",
        },
        {
            id: 4,
            name: "a cool webp4",
            type: "webp",
            url: "assets/images/webp/games.webp",
        },
        {
            id: 5,
            name: "a cool webp5",
            type: "webp",
            url: "assets/images/webp/flower.webp",
        },
        {
            id: 6,
            name: "a cool webp6",
            type: "webp",
            url: "assets/images/webp/moutan.webp",
        },
    ];

    imageLoader(webps, ul);

    return webp_wrapper.append(ul);
}

function imageLoader(images, ul)
{
    return images.forEach(image => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.setAttribute("src", image.url);
        img.setAttribute("alt", `Just another ${image.type} for the web`);
        li.append(img);
        ul.append(li);
    });
    
}

jpg();
png();
webp();