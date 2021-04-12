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
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    url: '/Users',
                    classes: 'nav-item',
                    icon: 'fa fa-users'
                },
                {
                    id: 'exam',
                    title: 'Exam',
                    type: 'item',
                    url: '/exam',
                    classes: 'nav-item',
                    icon: 'fa fa-graduation-cap'
                },
                {
                    id: 'exam',
                    title: 'Courses',
                    type: 'item',
                    url: '/courses',
                    classes: 'nav-item',
                    icon: 'fa fa-book'
                }
            ]
        }
    ]
}