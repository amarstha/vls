export default {
    items: [
        {
            id: 'pages',
            title: 'Pages',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                    classes: 'nav-item',
                    icon: 'fa fa-home'
                },
                {
                    id: 'learners',
                    title: 'Learners',
                    type: 'item',
                    url: '/learners',
                    classes: 'nav-item',
                    icon: 'fa fa-users'
                },
                {
                    id: 'exam',
                    title: 'Courses',
                    type: 'item',
                    url: '/courses',
                    classes: 'nav-item',
                    icon: 'fa fa-star'
                },
                {
                    id: 'questions',
                    title: 'Questions',
                    type: 'item',
                    url: '/questions',
                    classes: 'nav-item',
                    icon: 'fa fa-book'
                }
            ]
        }
    ]
}