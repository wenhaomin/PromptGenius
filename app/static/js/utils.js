/**
 * Utilities. These functions are general tools that are shared across the project.
 */

function masonry_reload(parent_dom, item_selector, duration) {
    parent_dom.masonry({
        itemSelector: item_selector,
        columnWidth: item_selector,
        transitionDuration: duration,
        percentPosition: true
    }).masonry('reloadItems').masonry('layout');
}

function hex_to_rgb(hex) {
    // If it is a shorthand 3 digit hex color, convert to full 6 digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.slice(0, 2), 16);
    var g = parseInt(hex.slice(2, 4), 16);
    var b = parseInt(hex.slice(4, 6), 16);

    return [r, g, b];
}

function value_to_hex(value, min, max, cmap) {
    if (value < min) value = min;
    if (value > max) value = max;
    var color_scale = chroma.scale(cmap).domain([min, max]);
    return color_scale(value).hex();
}

function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function set_cookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function get_cookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function get_data(url) {
    try {
        const response = await $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json'
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

async function send_post(url, data) {
    try {
        const response = await $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        console.error(error);
    }
}

// copy text
function copy_to_clipboard(text) {
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            mdui.snackbar('Failed to copy.');
            console.log(err);
        }
    }
    copyContent();
}