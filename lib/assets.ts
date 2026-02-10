// Places
import Place1 from "@/public/images/places/place-1.jpeg";
import Place2 from "@/public/images/places/place-2.jpeg";
import Place3 from "@/public/images/places/place-3.jpeg";
import Place4 from "@/public/images/places/place-4.jpeg";
// Projects
import Template1 from "@/public/images/templates/jagoan.png";
import Template2 from "@/public/images/templates/jagonime.png";
import Template3 from "@/public/images/templates/clipper.png";
import Template4 from "@/public/images/templates/posjagoan.png";
import Template5 from "@/public/images/templates/posus.png";

export const placeItems = [
  {
    id: 1,
    src: Place1,
    rotation: -5,
    title: "Gunung",
  },
  {
    id: 2,
    src: Place2,
    rotation: 8,
    title: "Futsal",
  },
  {
    id: 3,
    src: Place3,
    rotation: -3,
    title: "Curug",
  },
  {
    id: 4,
    src: Place4,
    rotation: 10,
    title: "Teammates",
  },
];

export const templateItems = [
  {
    slug: "jagoan-premium",
    title: "Jagoan Premium",
    image: Template1,
    published: true,
    demo: "#",
    github: "#",
  },
  {
    slug: "jagonime",
    title: "Jagonime",
    image: Template2,
    published: true,
    demo: "#",
    github: "#",
  },
  {
    slug: "clipping-tools",
    title: "Clipping Tools",
    image: Template3,
    published: true,
    github: "#",
  },
  {
    slug: "pos-premium",
    title: "POS Jagoan Premium",
    image: Template4,
    published: true,
    demo: "#",
    github: "#",
  },
  {
    slug: "pos-usstore13",
    title: "POS USSTORE13",
    image: Template5,
    published: true,
    demo: "#",
    github: "#",
  },
];
