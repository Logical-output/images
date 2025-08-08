export const svg = function(svg, path) {
    const svg_wrapper = document.getElementsByClassName("svg-wrapper")[0];
    const ul = document.createElement("ul");

    svgLoader(svg, path, ul);

    return svg_wrapper.append(ul);
}

function svgLoader(svgElements, pathElements, ul)
{
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");     
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const li = document.createElement("li");
    
    svgElements.forEach( svgElement => {
        svg.setAttribute("xmlns", svgElement.xmlns);
        svg.setAttribute("width", svgElement.width);
        svg.setAttribute("height", svgElement.height);
        svg.setAttribute("overflow", svgElement.overflow);
        svg.setAttribute("viewBox", svgElement.viewBox);        
    });

    pathElements.forEach( pathElement => {
        path.setAttribute("fill", pathElement.fill[0]);
        path.setAttribute("fill-rule", pathElement.fillRule);
        path.setAttribute("d", pathElement.d[0]);
        path.setAttribute("clip-rule", pathElement.clipRule);
    });
    
    pathElements.forEach( pathElement => {
        path2.setAttribute("fill", pathElement.fill[1]);
        path2.setAttribute("transform", pathElement.transform);
        path2.setAttribute("d", pathElement.d[1]);
    });

    svg.append(path, path2);     
    li.append(svg);

    return ul.append(li);
}