// navigation links array
export const navLinks = [
    {
        id: "1",
        title: "Home",
        link: ""
    },
    {
        id: "2",
        title: "Services",
        link: ""
    },
    {
        id: "3",
        title: "About",
        link: ""
    },
    {
        id: "4",
        title: "Beg",
        link: ""
    },
    {
        id: "8",
        title: "Login",
        link: ""
    }
]

// animation
export const linkAnimationVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

export const sideBarVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
}
