export const navigationItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
      type: "link"
    },
    {
      id: 2,
      title: "About Us",
      link: "/about-us",
      type: "link"
    },
    {
      id: 3,
      title: "Services",
      link: "#",
      type: "dropdown",
      children: [
        { title: "Service 1", link: "/services-1" },
        { title: "Service 2", link: "/services-2" },
        { title: "Service 3", link: "/services-3" }
      ]
    },
    {
      id: 4,
      title: "Products",
      link: "/products",
      type: "link"
    },
    {
      id: 5,
      title: "Projects",
      link: "/projects",
      type: "link"
    },
    {
      id: 6,
      title: "Downloads",
      link: "/downloads",
      type: "link"
    },
    {
      id: 7,
      title: "Career",
      link: "/career",
      type: "link"
    },
    {
      id: 8,
      title: "Contact Us",
      link: "/contact",
      type: "link"
    }
  ];
  
  export const mobileNavigationItems = [
    ...navigationItems
  ];

  export const galleryItems = [
    { id: 1, image: "/assets/imgs/pages/offcanvas/gallery-1.png", alt: "vatech" },
    { id: 2, image: "/assets/imgs/pages/offcanvas/gallery-2.png", alt: "vatech" },
    { id: 3, image: "/assets/imgs/pages/offcanvas/gallery-3.png", alt: "vatech" },
    { id: 4, image: "/assets/imgs/pages/offcanvas/gallery-4.png", alt: "vatech" },
    { id: 5, image: "/assets/imgs/pages/offcanvas/gallery-5.png", alt: "vatech" },
    { id: 6, image: "/assets/imgs/pages/offcanvas/gallery-6.png", alt: "vatech" },
    { id: 7, image: "/assets/imgs/pages/offcanvas/gallery-7.png", alt: "vatech" },
    { id: 8, image: "/assets/imgs/pages/offcanvas/gallery-8.png", alt: "vatech" },
    { id: 9, image: "/assets/imgs/pages/offcanvas/gallery-9.png", alt: "vatech" }
  ];

  export const contactInfo = {
    address: "Dubai, UAE",
    hours: "9:00 - 18:00, Mon - Fri, Sat - 9:30 - 16:00",
    phone: "+971564129562"
  };

 