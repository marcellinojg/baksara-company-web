

export const ROUTES = {
    EXTERNAL: {
        LANDING: '/',
        ABOUT_US: '/about-us',
        FAQ: '/faq',
        NEWS: '/news',
        LOGIN: '/sign-in'
    },
    INTERNAL: {
        DASHBOARD: '/internal/dashboard',
        CREATE_NEWS: '/internal/news/create',
        EDIT_NEWS: '/internal/news/:id/edit',
    },
    OTHER: {

    }
}

export const DYNAMIC_ROUTES = {
    EXTERNAL: {

    },
    INTERNAL: {
        EDIT_NEWS: (id: string) => `/internal/news/${id}/edit`,
    },
    OTHER: {

    }
}