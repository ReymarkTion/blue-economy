export const getBlogPagination = (offset, response) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };

    fetch(`api/blog/${offset}/offset`, requestOptions)
        .then((resp) => resp.json())
        .then((data) => response(data))
        .catch((error) => response(error));
};

export const getBlogLink = (link, response) => {
    const requestOptions = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };

    fetch(`api/blog/${link}/link`, requestOptions)
        .then((resp) => resp.json())
        .then((data) => response(data))
        .catch((error) => response(error));
};

export const sumbitContactUsMessage = (data, response) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    };

    fetch(`api/contact-us`, requestOptions)
        .then((resp) => resp.json())
        .then((data) => response(data))
        .catch((error) => response(error));
};
