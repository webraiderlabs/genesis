/*
 *      Arbeit Studio © 2023
 *      The Genesis Framework
 *      https://git.arbeit.studio/genesis (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/images.js
 */
let imageContainer;
let state = 0;
const randomId = Math.random().toString(36).substring(2, 12);
const imageContainerId = `imageContainer_${randomId}`;
const imageContainerBackdropId = `imageContainer_${randomId}_backdrop`;

function insertSitewideStyle() {
    const imageContainerBackdrop = document.createElement('div');
    imageContainerBackdrop.id = imageContainerBackdropId;
    imageContainerBackdrop.addEventListener("click", () => {
        if (state === 1)
            templateHideImage();
    });

    imageContainer = document.createElement('div');
    imageContainer.id = imageContainerId;
    imageContainer.setAttribute("data-state", "0");
    imageContainer.appendChild(imageContainerBackdrop);

    var style = document.createElement('style');
    style.textContent = `#${imageContainerId}{position:fixed;top:10%;left:10%;width:80%;height:80%;display:flex;justify-content:center;align-items:center}#${imageContainerId}[data-state="0"]{display:none}#${imageContainerBackdropId}{content:"";z-index:-1;position:fixed;top:0;left:0;right:0;bottom:0;backdrop-filter:blur(4px) brightness(0.25)}#${imageContainerId} img{max-width:100%;max-height:100%;height:auto;width:auto}`;

    document.body.appendChild(imageContainer);
    document.head.appendChild(style);
}