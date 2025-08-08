export const png = function(module) {
    const png_wrapper = document.getElementsByClassName("png-wrapper")[0];
    const ul = document.createElement("ul");
    
    imageLoader(module, ul);
    
    return png_wrapper.append(ul);
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