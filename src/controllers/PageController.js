export const home = (req, res) => {
    res.render("home", {
        title: "dinausurus",
        content: "dinosaurs are diverse group of reptiles of the clade Dinosauria.",
        message: "Welcome to the Dinosaurs homepage!",
    });
};

export const about = (req, res) => {
    res.render("default", {
        title: "About dinousrus",
        content: "Dinosaurs are a diverse group of reptiles of the clade Dinosauria.",
        message: "Welcome to the Dinosaurs about page!",
    });
};

export const contact = (req, res) => {
    res.render("contact", {
        title: "Contact",
        content: "Dinosaurs are a diverse group of reptiles of the clade Dinosauria.",
        message: "Welcome to the Dinosaurs contact page!",
    });
};

export const privacy = (req, res) => {
    res.render("default", {
        title: "Privacy policy",
        content: "Dinosaurs are a diverse group of reptiles of the clade Dinosauria.",
        message: "Welcome to the Dinosaurs privacy page!",
    });
};
