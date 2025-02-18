
import { person } from "../data/data.js";


export const home = (req, res) => {
  res.render("pages/home", {
    title: "dinausurus",
    content: "dinosaurs are diverse group of reptiles of the clade Dinosauria.",
    message: "Welcome to the Dinosaurs homepage!",
    navigation: [
        { url: '/', label: 'Home' },
        { url: '/about', label: 'About' },
        { url: '/contact', label: 'Contact' },
        { url: '/privacy', label: 'Privacy' },
    ]
  });
};

export const about = (req, res) => {
  res.render("pages/default", {
    title: "About dinousrus",
    content:
      "Dinosaurs are a diverse group of reptiles of the clade Dinosauria.",
    message: "Welcome to the Dinosaurs about page!",
    team: [
      "T-rex",
      "andere T-rex",
      "vleesetende T-rex",
      "plantetende T-rex",
      "<strong>Allesetende</strong> T-rex",
    ],
    navigation: [
        { url: '/', label: 'Home' },
        { url: '/about', label: 'About' },
        { url: '/contact', label: 'Contact' },
        { url: '/privacy', label: 'Privacy' },
    ]
  });
};
export const contact = (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    content:
      "Dinosaurs are a diverse group of reptiles of the clade Dinosauria.",
    message: "Welcome to the Dinosaurs contact page!",
    person,
    navigation: [
        { url: '/', label: 'Home' },
        { url: '/about', label: 'About' },
        { url: '/contact', label: 'Contact' },
        { url: '/privacy', label: 'Privacy' },
    ]
  });
};

export const privacy = (req, res) => {
  res.render("pages/default", {
    title: "Privacy policy",
    content:
      "Dinosaurs are a diverse group of reptiles of the clade Dinosauria.",
    message: "Welcome to the Dinosaurs privacy page!",
    team: false,
    navigation: [
        { url: '/', label: 'Home' },
        { url: '/about', label: 'About' },
        { url: '/contact', label: 'Contact' },
        { url: '/privacy', label: 'Privacy' },
    ]  });
};
